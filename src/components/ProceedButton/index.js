import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useColors } from '../../hooks/useColors';
import KGPrimaryPenmanshipAlt from '../../../assets/fonts/kg_primary_penmanship/KGPrimaryPenmanshipAlt.ttf';

export default function ProceedButton({ buttonText, onPress }) {
  const colors = useColors();

  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.primary,
      paddingRight: 50,
      paddingBottom: 10,
      paddingLeft: 50,
      borderRadius: 50,
      alignItems: 'center',
    },
    text: {
      fontFamily: 'KGPrimaryPenmanshipAlt',
      color: 'white',
      fontSize: 42,
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
