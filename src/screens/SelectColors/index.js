import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function SelectColors({ route, navigation }) {
  const { player1Symbol } = route.params;

  const [player1Color, setPlayer1Color] = useState('yellow');
  const [player2Color, setPlayer2Color] = useState('red');

  const handleProceed = () => {
    navigation.navigate('SelectSize', {
        player1Symbol: player1Symbol,
        player1Color: player1Color,
        player2Color: player2Color,
      });
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 400 }}>
      <Text>Escolha seu símbolo</Text>

      <Text>Jogador 1</Text>
      <RadioButton.Group
        onValueChange={(value) => setPlayer1Color(value)}
        value={player1Color}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Android value="yellow" />
          <Text>Amarelo</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Android value="red" />
          <Text>Vermelho</Text>
        </View>
      </RadioButton.Group>

      <Text>Jogador 2</Text>
      <RadioButton.Group
        onValueChange={(value) => setPlayer2Color(value)}
        value={player2Color}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Android value="yellow" />
          <Text>Amarelo</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Android value="red" />
          <Text>Vermelho</Text>
        </View>
      </RadioButton.Group>

      <Button title="Escolher tabuleiro" onPress={handleProceed} />
    </View>
  );
}
