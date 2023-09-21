import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './screens/Start';
import SelectSymbols from './screens/SelectSymbols';
import SelectColors from './screens/SelectColors';
import SelectSize from './screens/SelectSize';
import Game from './screens/Game';
import GameOver from './screens/GameOver';
import { ImageBackground } from 'react-native';
import images from './utils/images';
import { configureFonts } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  const theme = {
    ...DefaultTheme, 
    colors: {
      ...DefaultTheme.colors, 
      background: 'transparent'
    },
    fonts: configureFonts({config: {fontFamily: 'KGPrimaryPenmanshipAlt'}})
  }

  return (
    <NavigationContainer theme={theme}>
      <ImageBackground style={{
        flex: 1
      }} source={images.background} >
        <Stack.Navigator initialRouteName="Start" screenOptions={{ animation: 'fade', headerShown: false }}>
          <Stack.Screen name="Start" component={Start}  />
          <Stack.Screen name="SelectSymbols" component={SelectSymbols}  />
          <Stack.Screen name="SelectColors" component={SelectColors}  />
          <Stack.Screen name="SelectSize" component={SelectSize}  />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="GameOver" component={GameOver} />
        </Stack.Navigator>
      </ImageBackground>
    </NavigationContainer>
  );
}
