import React from 'react';
import { Text, View } from 'react-native';
import ProceedButton from '../../components/ProceedButton';

export default function Start({navigation}) {
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
        }}>
            <Text>Olá</Text>
            <ProceedButton buttonText={'Começar'} onPress={() => navigation.navigate('SelectSymbols')} />
        </View>
    )
}