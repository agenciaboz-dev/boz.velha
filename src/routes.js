import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import Home from './screens/Home';
import Game3 from './screens/Game3';
import Draw from './screens/GameOver/Draw';
import Winner_O from './screens/GameOver/Winner_O';
import Winner_X from './screens/GameOver/Winner_X';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ animation: 'flip', headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Game3" component={Game3} />
        <Stack.Screen name="Draw" component={Draw} />
        <Stack.Screen name="Winner_O" component={Winner_O} />
        <Stack.Screen name="Winner_X" component={Winner_X} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
