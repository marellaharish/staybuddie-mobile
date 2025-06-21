// src/navigation/NavigationContext.tsx
import React, { createContext, ReactNode, useContext, useState } from 'react';

type ScreenFlow = 'home' | 'auth' | 'main';

interface NavigationContextType {
    flow: ScreenFlow;
    goToHome: () => void;
    goToAuth: () => void;
    goToMain: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
    const [flow, setFlow] = useState<ScreenFlow>('home'); // Initial flow is home

    return (
        <NavigationContext.Provider
            value={{
                flow,
                goToHome: () => setFlow('home'),
                goToAuth: () => setFlow('auth'),
                goToMain: () => setFlow('main'),
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
