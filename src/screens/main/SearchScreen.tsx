// src/screens/main/SearchScreen.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Search Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 24 },
});

export default SearchScreen;