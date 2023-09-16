import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useColors } from '../../hooks/useColors';

export default function ProceedButton({ buttonText, onPress }) {
  const colors = useColors();

  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.primary,
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
      onPress={onPress}
    >
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
