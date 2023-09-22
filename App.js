import React, { useEffect } from 'react';
import AppRoutes from './src/routes';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { paperTheme } from './src/utils/paperTheme';

export default function App() {
    let [loaded, error] = useFonts({
        KGPrimaryPenmanshipAlt: require("./assets/fonts/kg_primary_penmanship/KGPrimaryPenmanshipAlt.ttf"),
    })

    if (!loaded) {
        return <></>
    }
    
    return (
        <PaperProvider theme={paperTheme}>
            <AppRoutes />
        </PaperProvider>
    )
}