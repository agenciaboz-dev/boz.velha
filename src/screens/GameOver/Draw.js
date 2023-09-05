import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Draw({navigation}) {
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 400
        }}>
            <Text>Empate</Text>
            <Button
            title='Start'
            onPress={() => navigation.navigate('Start')}
            />
        </View>
    )
}