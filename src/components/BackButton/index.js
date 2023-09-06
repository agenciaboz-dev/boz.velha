import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BackButton() {
    const navigation = useNavigation();
  
    const handleGoBack = () => {
      navigation.goBack();
    };
  
    return (
      <Button title="Voltar" onPress={handleGoBack} />
    );
  }
  