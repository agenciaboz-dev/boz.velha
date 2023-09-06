import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import BackButton from '../../components/BackButton';

export default function SelectSymbols({ navigation }) {
  const [player1Choice, setPlayer1Choice] = useState('O');
  const [player2Choice, setPlayer2Choice] = useState('X');

  const handlePlayer1SymbolChange = (selectedSymbol) => {
    setPlayer1Choice(selectedSymbol);
    setPlayer2Choice(selectedSymbol === 'X' ? 'O' : 'X');
  };

  const handlePlayer2SymbolChange = (selectedSymbol) => {
    setPlayer2Choice(selectedSymbol);
    setPlayer1Choice(selectedSymbol === 'X' ? 'O' : 'X');
  };

  const handleProceed = () => {
    navigation.navigate('SelectColors', {
      player1Symbol: player1Choice,
    });
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 400 }}>
      <Text>Escolha seu símbolo</Text>

      <Text>Jogador 1</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton.Group
          onValueChange={(value) => handlePlayer1SymbolChange(value)}
          value={player1Choice}
        >
          <RadioButton.Android value="O" />
          <RadioButton.Android value="X" />
        </RadioButton.Group>
        <Text>{player1Choice}</Text>
      </View>

      <Text>Jogador 2</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton.Group
          onValueChange={(value) => handlePlayer2SymbolChange(value)}
          value={player2Choice}
        >
          <RadioButton.Android value="O" />
          <RadioButton.Android value="X" />
        </RadioButton.Group>
        <Text>{player2Choice}</Text>
      </View>

      <Button title="Escolher cores" onPress={handleProceed} />
      <BackButton />
    </View>
  );
}
