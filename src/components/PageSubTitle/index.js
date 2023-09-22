import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useColors } from '../../hooks/useColors';
import { Text } from 'react-native-paper';

export default function PageSubTitle({ pageSubTitle }) {
  const colors = useColors();

  const styles = StyleSheet.create({
    subtitle: {
      backgroundColor: colors.secondary,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 50,
      alignItems: 'center',
      width: '50%'
    },
    text: {
      color: 'white',
      fontSize: 30,
    },
  });

  return (
    <View
      style={styles.subtitle}
    >
      <Text style={styles.text}>{pageSubTitle}</Text>
    </View>
  );
}
