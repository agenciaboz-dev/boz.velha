import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useColors } from '../../hooks/useColors';
import { Text } from 'react-native-paper';

export default function ProceedButton({ buttonText, onPress }) {
  const colors = useColors();

  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.primary,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 50,
      alignItems: 'center',
      width: "80%"
    },
    text: {
      color: 'white',
      fontSize: 45,
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
