import React from 'react';
import { View, Image } from 'react-native';
import ProceedButton from '../../components/ProceedButton';
import images from '../../utils/images';

export default function Start({navigation}) {
    return (
        <View style={{
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "100%"
        }}>
            <Image source={images.boz_logo}
                style={{
                    // height: 130,
                    width: 130,
                    resizeMode: "contain",
                }}
            />
            <Image source={images.game_logo}
                style={{
                    // height: 300,
                    width: 300,
                    resizeMode: "contain",
                }}
            />
            <Image source={images.bozzer_jumping}
                style={{
                    height: 250,
                    width: 250,
                    resizeMode: "contain",
                    marginTop: -50
                }}
            />
            <ProceedButton buttonText={'Jogar'} onPress={() => navigation.navigate('SelectSymbols')} />
        </View>
    )
}