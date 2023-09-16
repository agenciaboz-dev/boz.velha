import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useColors } from '../../hooks/useColors';

export default function BackButton() {
    const navigation = useNavigation()
    const colors = useColors()
  
    const handleGoBack = () => {
      navigation.goBack();
    };
    
    const styles = StyleSheet.create({
      button: {
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      text: {
        color: 'white',
        fontSize: 16,
      },
    });

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handleGoBack}
    >
      <Text style={styles.text}>Voltar</Text>
    </TouchableOpacity>
  );
}
