import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import BackButton from '../../components/BackButton';
import ProceedButton from '../../components/ProceedButton';
import PageTitle from '../../components/PageTitle';
import { useColors } from '../../hooks/useColors';
import PageSubTitle from '../../components/PageSubTitle';

export default function SelectSymbols({ navigation }) {
  const colors = useColors();

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
    <View style={{ height: "100%", justifyContent: 'space-evenly', alignItems: 'center' }}>
      <PageTitle pageTitle={'Escolha seu símbolo'} />

      <View
        style={{
          alignItems: "center",
          backgroundColor: colors.background,
          borderRadius: 50,
          padding: 20,
          height: "50%",
          width: "90%"
        }}
      >
        <PageSubTitle pageSubTitle={'Jogador 1'}/>

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

        <PageSubTitle pageSubTitle={'Jogador 2'}/>
        
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
      </View>

      <ProceedButton buttonText={'Escolher Cores'} onPress={handleProceed} />
      <BackButton />
    </View>
  );
}
