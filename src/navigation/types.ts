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
    Payments: undefined;
    Complaints: undefined;
};

export type RootStackParamList = {
    Auth: AuthStackParamList;
    Main: MainTabParamList;
};

export type HomeStackParamList = {
    Landing: undefined;
    HostelsList: { city: string };
    HostelDetails: { item: any };
    Filters: undefined;
};

export type UserStackParamList = {
    EditProfile: undefined;
    Language: undefined;
    FAQ: undefined;
    ShareApp: undefined;
    RateUs: undefined;
    Help: undefined;
    PrivacyPolicy: undefined;
    Feedback: undefined;
    Terms: undefined;
    About: undefined;
};


export type UserTabParamList = {
    UserMainTabs: undefined;
    UserNavigator: undefined;
    Notifications: undefined;
};