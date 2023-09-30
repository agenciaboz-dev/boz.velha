import React from 'react';
import { BackHandler, Platform, View, Image } from 'react-native';
import ProceedButton from '../../components/ProceedButton';
import images from '../../utils/images';
import BackButton from '../../components/BackButton';

export default function Start({navigation}) {
    return (
        <View style={{
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "100%"
        }}>
            <Image source={images.boz_logo}
                style={{
                    width: 130,
                    resizeMode: "contain",
                }}
            />
            <Image source={images.game_logo}
                style={{
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
            
            {Platform.OS != "ios" && (
                        <BackButton
                            buttonText={'Sair'}
                            onPress={() => BackHandler.exitApp()}
                        />
                    )}

        </View>
    )
}