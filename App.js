import React from 'react';
import AppRoutes from './src/routes';
import { useFonts } from 'expo-font';

export default function App() {
    let [loaded] = useFonts({
        KGPrimaryPenmanshipAlt: require("./assets/fonts/kg_primary_penmanship/KGPrimaryPenmanshipAlt.ttf"),
    })

    if (!loaded) {
        return <></>
    }

    return (
        <AppRoutes />
    )
}