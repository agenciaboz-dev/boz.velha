import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useColors } from '../../hooks/useColors';
import { Text } from 'react-native-paper';

export default function ProceedButton({ buttonText, onPress }) {
  const colors = useColors();

  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.primary,
      paddingRight: 50,
      paddingBottom: 5,
      paddingLeft: 50,
      borderRadius: 50,
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontSize: 40,
    },
  });

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
