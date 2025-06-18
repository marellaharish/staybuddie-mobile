import { StyleSheet } from 'react-native';

export const Layouts = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    column: {
        flexDirection: 'column',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    flex: {
        flex: 1,
    },
    flexWrap: {
        flexWrap: 'wrap',
    },
});
