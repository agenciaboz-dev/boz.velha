import React from 'react';
import { Button, ImageBackground, Text, View } from 'react-native';
import images from '../../utils/images';

export default function Start({navigation}) {
    return (
        <ImageBackground source={images.background} >
            <View style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Olá</Text>
                <Button
                title='Jogar'
                onPress={() => navigation.navigate('SelectSymbols')}
                />
            </View>
        </ImageBackground>
    )
}