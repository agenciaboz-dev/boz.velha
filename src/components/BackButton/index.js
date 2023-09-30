import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useColors } from '../../hooks/useColors';
import { Text } from 'react-native-paper';

export default function BackButton({ buttonText, onPress }) {
  const colors = useColors()
  
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
      onPress={onPress}
    >
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
