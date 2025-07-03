// src/navigation/NavigationContext.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type ScreenFlow = 'home' | 'auth' | 'main' | 'adminAuth' | 'admin';

interface NavigationContextType {
    flow: ScreenFlow;
    goToHome: () => void;
    goToAuth: () => void;
    goToAdminAuth: () => void;
    goToMain: () => void;
    goToAdmin: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const STORAGE_KEY = 'appScreenFlow';

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
    const [flow, setFlow] = useState<ScreenFlow>('admin'); // default to 'home'
    const [isLoaded, setIsLoaded] = useState(false);


    // const clearStorage = async () => {
    //     try {
    //       await AsyncStorage.clear();
    //       console.log('AsyncStorage cleared!');
    //     } catch (e) {
    //       console.error('Failed to clear AsyncStorage:', e);
    //     }
    // };

    useEffect(() => {
        // clearStorage();
        const loadStoredFlow = async () => {
            try {
                const stored = await AsyncStorage.getItem(STORAGE_KEY);
                console.log(stored, "stored flow");
                if (stored === 'home' || stored === 'auth' || stored === 'main' || stored === 'adminAuth' || stored === 'admin') {
                    setFlow(stored);
                }
            } catch (e) {
                console.warn('Failed to load screen flow from storage', e);
            } finally {
                setIsLoaded(true);
            }
        };

        loadStoredFlow();
    }, []);

    useEffect(() => {
        AsyncStorage.setItem(STORAGE_KEY, flow).catch((e) =>
            console.warn('Failed to save screen flow', e)
        );
    }, [flow]);

    if (!isLoaded) return null; // or a loading spinner

    return (
        <NavigationContext.Provider
            value={{
                flow,
                goToHome: () => setFlow('home'),
                goToAuth: () => setFlow('auth'),
                goToAdminAuth: () => setFlow('adminAuth'),
                goToMain: () => setFlow('main'),
                goToAdmin: () => setFlow('admin'),
            }}
        >
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigationFlow = () => {
    const context = useContext(NavigationContext);
    if (!context) throw new Error('useNavigationFlow must be used inside NavigationProvider');
    return context;
};
