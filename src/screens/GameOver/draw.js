import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Home({navigation}) {
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 400
        }}>
            <Text>Empate</Text>
            <Button
            title='Home'
            onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}