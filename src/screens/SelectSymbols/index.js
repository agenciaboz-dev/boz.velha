import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import CustomRadioButton from '../../components/CustomRadioButton';
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
    navigation.navigate('SelectSize', {
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

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <View
            style={{
              alignItems: "center"
            }}
          >
            <ChoiceSlot symbol="X" />
            <CustomRadioButton selected={player1Choice === 'X'} onPress={() => handlePlayer1SymbolChange('X')} />
          </View>

          <View
            style={{
              alignItems: "center"
            }}
          >
            <ChoiceSlot symbol="O" />
            <CustomRadioButton selected={player1Choice === 'O'} onPress={() => handlePlayer1SymbolChange('O')} />
          </View>
        </View>

        <PageSubTitle pageSubTitle={'Jogador 2'}/>
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              alignItems: "center"
            }}
          >
            <ChoiceSlot symbol="X" />
            <CustomRadioButton selected={player2Choice === 'X'} onPress={() => handlePlayer2SymbolChange('X')} />
          </View>

          <View
            style={{
              alignItems: "center"
            }}
          >
            <ChoiceSlot symbol="O" />
            <CustomRadioButton selected={player2Choice === 'O'} onPress={() => handlePlayer2SymbolChange('O')} />
          </View>
        </View>

      </View>

      <ProceedButton buttonText={'Avançar'} onPress={handleProceed} />
      <BackButton />
    </View>
  );
}
