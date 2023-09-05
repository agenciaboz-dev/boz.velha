import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './screens/Start';
import SelectSymbols from './screens/SelectSymbols';
import SelectColors from './screens/SelectColors';
import SelectSize from './screens/SelectSize';
import Game from './screens/Game';
import Draw from './screens/GameOver/Draw';
import Winner_O from './screens/GameOver/Winner_O';
import Winner_X from './screens/GameOver/Winner_X';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{ animation: 'flip', headerShown: false }}>
        <Stack.Screen name="Start" component={Start}  />
        <Stack.Screen name="SelectSymbols" component={SelectSymbols}  />
        <Stack.Screen name="SelectColors" component={SelectColors}  />
        <Stack.Screen name="SelectSize" component={SelectSize}  />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Draw" component={Draw} />
        <Stack.Screen name="Winner_O" component={Winner_O} />
        <Stack.Screen name="Winner_X" component={Winner_X} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
