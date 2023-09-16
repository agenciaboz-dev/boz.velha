import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import BackButton from '../../components/BackButton';

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
      <View style={{ height: "100%", justifyContent: 'center', alignItems: 'center' }}>
        <Text>Escolha sua cor</Text>
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
        <ProceedButton buttonText={'Escolher Tabuleiro'} onPress={handleProceed} />
        <BackButton />
      </View>
  );
}
