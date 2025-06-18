// src/navigation/navigationService.ts
import { createNavigationContainerRef } from '@react-navigation/native';
import { AuthStackParamList, RootStackParamList } from './types';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<RouteName extends keyof AuthStackParamList>(
    ...args: undefined extends AuthStackParamList[RouteName]
        ? [screen: RouteName] | [screen: RouteName, params: AuthStackParamList[RouteName]]
        : [screen: RouteName, params: AuthStackParamList[RouteName]]
) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(...args);
    } else {
        console.warn('Navigation not ready — retrying in 100ms');
        setTimeout(() => {
            if (navigationRef.isReady()) {
                navigationRef.navigate(...args);
            } else {
                console.error('Navigation still not ready after retry.');
            }
        }, 100);
    }
}
