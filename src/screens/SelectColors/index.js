import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import BackButton from '../../components/BackButton';
import ProceedButton from '../../components/ProceedButton';
import { useColors } from '../../hooks/useColors';

export default function SelectColors({ route, navigation }) {
  const colors = useColors();

  const { player1Symbol } = route.params;

  const [player1Color, setPlayer1Color] = useState(colors.yellow);
  const [player2Color, setPlayer2Color] = useState(colors.red);

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
            <RadioButton.Android value={colors.yellow} />
            <Text>Amarelo</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton.Android value={colors.red} />
            <Text>Vermelho</Text>
          </View>
        </RadioButton.Group>
        <Text>Jogador 2</Text>
        <RadioButton.Group
          onValueChange={(value) => setPlayer2Color(value)}
          value={player2Color}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton.Android value={colors.yellow} />
            <Text>Amarelo</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton.Android value={colors.red} />
            <Text>Vermelho</Text>
          </View>
        </RadioButton.Group>
        <ProceedButton buttonText={'Escolher Tabuleiro'} onPress={handleProceed} />
        <BackButton />
      </View>
  );
}
