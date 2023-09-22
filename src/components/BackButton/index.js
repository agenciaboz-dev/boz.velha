import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useColors } from '../../hooks/useColors';
import { Text } from 'react-native-paper';

export default function BackButton() {
    const navigation = useNavigation()
    const colors = useColors()
  
    const handleGoBack = () => {
      navigation.goBack();
    };
    
    const styles = StyleSheet.create({
      button: {
        backgroundColor: colors.secondary,
        paddingTop: 5,
        paddingRight: 25,
        paddingBottom: 5,
        paddingLeft: 25,
        borderRadius: 50,
        alignItems: 'center',
      },
      text: {
        color: 'white',
        fontSize: 25,
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
