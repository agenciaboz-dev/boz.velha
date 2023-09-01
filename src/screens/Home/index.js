import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Home({navigation}) {
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 400
        }}>
            <Text>Olá</Text>
            <Button
            title='Jogar'
            onPress={() => navigation.navigate('Game3')}
            />
        </View>
    )
}