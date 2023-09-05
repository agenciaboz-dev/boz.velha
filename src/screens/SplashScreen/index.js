import React from 'react';
import { Button, Text, View } from 'react-native';

export default function SplashScreen({navigation}) {
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 400
        }}>
            <Text>SplashScreen</Text>
            <Button
            title='Start'
            onPress={() => navigation.navigate('Start')}
            />
        </View>
    )
}