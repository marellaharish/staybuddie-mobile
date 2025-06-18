import BottomSheet from '@gorhom/bottom-sheet';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

interface BottomSheetWrapperProps {
    snapPoints: (string | number)[];
    context: React.ReactNode;
}

export type BottomSheetRef = {
    open: () => void;
    close: () => void;
};

const BottomSheetWrapper = forwardRef<BottomSheetRef, BottomSheetWrapperProps>(({ snapPoints, context }, ref) => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    useImperativeHandle(ref, () => ({
        open: () => {
            console.log("BottomSheetWrapper ref called"),
                bottomSheetRef.current?.expand();
        },
        close: () => {
            bottomSheetRef.current?.close();
        },
    }));


    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            backgroundStyle={styles.sheetBackground}
        >
            <View style={styles.contentContainer}>{context}</View>
        </BottomSheet>
    );
});

export default BottomSheetWrapper;

const styles = StyleSheet.create({
    contentContainer: {
        padding: 16,
        height: 250,
        backgroundColor: '#fff',
    },
    sheetBackground: {
        borderRadius: 16,
        backgroundColor: '#fff',
    },
});
