import React from 'react';
import { Text, View, Image } from 'react-native';
import ProceedButton from '../../components/ProceedButton';
import images from '../../utils/images';

export default function Start({navigation}) {
    return (
        <View style={{
            alignItems: "center",
            height: "100%"
        }}>
            <Image source={images.boz_logo}
                style={{
                    height: 130,
                    width: 130,
                    resizeMode: "contain",
                }}
            />
            <Image source={images.game_logo}
                style={{
                    height: 300,
                    width: 300,
                    resizeMode: "contain",
                }}
            />
            <Image source={images.bozzer_jumping}
                style={{
                    height: 100,
                    width: 100,
                    resizeMode: "contain",
                }}
            />
            <ProceedButton buttonText={'Jogar'} onPress={() => navigation.navigate('SelectSymbols')} />
        </View>
    )
}