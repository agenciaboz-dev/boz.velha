import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

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
      <Button
        title='Start'
        onPress={() => navigation.navigate('Start')}
      />
    </View>
  );
}
