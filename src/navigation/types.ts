// src/navigation/types.ts

export type AuthStackParamList = {
    Login: undefined;
    Signup: undefined;
};

// Add this new type for our tabs
export type MainTabParamList = {
    Home: undefined;
    Search: undefined;
    Profile: undefined;
};

export type RootStackParamList = {
    Auth: AuthStackParamList;
    Main: MainTabParamList;
};

export type HomeStackParamList = {
    Landing: undefined;
    HostelsList: { city: string };
    HostelDetails: { item: any };
};