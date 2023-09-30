import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import ProceedButton from '../../components/ProceedButton';
import PageTitle from '../../components/PageTitle';
import images from '../../utils/images';
import CloseButton from '../../components/CloseButton';

export default function GameOver({ route, navigation }) {
    const outcome = route.params.outcome
    const [message, setMessage] = useState('Game Over')

    useEffect(() => {
        setMessage(outcome == 'draw' ? "Empate!" : outcome == 'winner_O' ? "Jogador O ganhou!" : "Jogador X ganhou!")
    }, [])

  return (
    <View
      style={{
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%"
      }}
    >

      <View
        style={{
          position: "absolute",
          top: 40,
          left: 40
        }}
      >
        <CloseButton onPress={() => { navigation.navigate('Start')}} />
      </View>

      <Image source={images.boz_logo}
        style={{
          width: 130,
          resizeMode: "contain",
        }}
      />
      <PageTitle pageTitle={message} />
      <Image source={images.bozzer_balloon}
        style={{
          height: 300,
          width: 300,
          resizeMode: "contain",
        }}
      />
      <ProceedButton buttonText={'Jogar novamente'} onPress={() => { navigation.navigate('Start')}} />
    </View>
  );
}
