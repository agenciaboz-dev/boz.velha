import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import BackButton from '../../components/BackButton';
import ProceedButton from '../../components/ProceedButton';
import PageTitle from '../../components/PageTitle';
import { useColors } from '../../hooks/useColors';
import PageSubTitle from '../../components/PageSubTitle';
import ChoiceSlot from '../../components/ChoiceSlot';

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
          borderRadius: 20,
          padding: 20,
          width: "90%"
        }}
      >
        <PageSubTitle pageSubTitle={'Jogador 1'}/>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Group
            onValueChange={(value) => handlePlayer1SymbolChange(value)}
            value={player1Choice}
          >
            <View
              style={{
                flexDirection: "row"
              }}
            >
              <View
                style={{
                  alignItems: "center"
                }}
              >
                <ChoiceSlot symbol="X" />
                <RadioButton value="X" />
              </View>
              <View
                style={{
                  alignItems: "center"
                }}
              >
                <ChoiceSlot symbol="O" />
                <RadioButton value="O" />
              </View>
            </View>
          </RadioButton.Group>
        </View>

        <PageSubTitle pageSubTitle={'Jogador 2'}/>
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Group
            onValueChange={(value) => handlePlayer1SymbolChange(value)}
            value={player2Choice}
          >
            <View
              style={{
                flexDirection: "row"
              }}
            >
              <View
                style={{
                  alignItems: "center"
                }}
              >
                <ChoiceSlot symbol="X" />
                <RadioButton value="X" />
              </View>
              <View
                style={{
                  alignItems: "center"
                }}
              >
                <ChoiceSlot symbol="O" />
                <RadioButton value="O" />
              </View>
            </View>
          </RadioButton.Group>
        </View>
      </View>

      <ProceedButton buttonText={'Avançar'} onPress={handleProceed} />
      <BackButton />
    </View>
  );
}
