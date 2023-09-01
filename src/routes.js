import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import Home from './screens/Home';
import Game3 from './screens/Game3';
import Empate from './screens/GameOver/draw';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
        <Stack.Screen name="Game3" component={Game3} options={{ headerShown: false }} />
        <Stack.Screen name="Empate" component={Empate} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
