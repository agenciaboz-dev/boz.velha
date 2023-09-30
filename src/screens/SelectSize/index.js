import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import BackButton from '../../components/BackButton';
import ProceedButton from '../../components/ProceedButton';
import PageTitle from '../../components/PageTitle';
import { colors } from '../../utils/colors';
import CustomRadioButton from '../../components/CustomRadioButton';
import PageSubTitle from '../../components/PageSubTitle';

export default function SelectSize({ route, navigation }) {
  const { player1Symbol } = route.params;

  const [boardSize, setBoardSize] = useState(3);

  const handleProceed = () => {
    navigation.navigate('Game', {
        player1Symbol: player1Symbol,
        boardSize: boardSize,
      });
  }

  return (
      <View style={{ height: "100%", justifyContent: 'space-evenly', alignItems: 'center' }}>
        <PageTitle pageTitle={'Escolha o tabuleiro'} />

        <View
          style={{
            alignItems: "center",
            backgroundColor: colors.background,
            borderRadius: 50,
            padding: 20,
            width: "90%",
            gap: 40
          }}
        >

          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }} >
            <PageSubTitle pageSubTitle={'3 x 3'}/>
            <CustomRadioButton selected={boardSize === '3'} onPress={() => setBoardSize('3')} />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }} >
            <PageSubTitle pageSubTitle={'4 x 4'}/>
            <CustomRadioButton selected={boardSize === '4'} onPress={() => setBoardSize('4')} />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }} >
            <PageSubTitle pageSubTitle={'5 x 5'}/>
            <CustomRadioButton selected={boardSize === '5'} onPress={() => setBoardSize('5')} />
          </View>

        </View>

        <ProceedButton buttonText={'Começar!'} onPress={handleProceed} />
        <BackButton />
      </View>
  );
}
