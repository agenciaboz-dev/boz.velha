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
        paddingRight: 50,
        paddingBottom: 5,
        paddingLeft: 50,
        borderRadius: 50,
        alignItems: 'center',
      },
      text: {
        color: 'white',
        fontSize: 28,
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
