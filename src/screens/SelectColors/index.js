import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import BackButton from '../../components/BackButton';
import ProceedButton from '../../components/ProceedButton';
import { useColors } from '../../hooks/useColors';
import PageTitle from '../../components/PageTitle';
import PageSubTitle from '../../components/PageSubTitle';

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
      <View style={{ height: "100%", justifyContent: 'space-around', alignItems: 'center' }}>
        <PageTitle pageTitle={'Escolha sua cor'} />

        <View
          style={{
            alignItems: "center",
            backgroundColor: colors.background,
            borderRadius: 50,
            padding: 20,
            width: "90%"
          }}
        >

          <PageSubTitle pageSubTitle={'Jogador 1'}/>

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

          <PageSubTitle pageSubTitle={'Jogador 2'}/>

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
        </View>

        <ProceedButton buttonText={'Avançar'} onPress={handleProceed} />
        <BackButton />
      </View>
  );
}
