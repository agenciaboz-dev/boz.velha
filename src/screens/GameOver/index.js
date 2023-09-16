import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ProceedButton from '../../components/ProceedButton';

export default function GameOver({ route, navigation }) {
    const outcome = route.params.outcome
    const [message, setMessage] = useState('Game Over')

    useEffect(() => {
        setMessage(outcome == 'draw' ? "Empate!" : outcome == 'winner_O' ? "O ganhou!" : "X ganhou!")
    }, [])

  return (
    <View style={{
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    }}>
      <Text>{message}</Text>
      <ProceedButton buttonText={'Início'} onPress={() => { navigation.navigate('Start')}} />
    </View>
  );
}
