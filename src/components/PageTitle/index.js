import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useColors } from '../../hooks/useColors';

export default function PageTitle({ pageTitle }) {
  const colors = useColors();

  const styles = StyleSheet.create({
    title: {
      backgroundColor: colors.primary,
      paddingRight: 50,
      paddingBottom: 5,
      paddingLeft: 50,
      borderRadius: 50,
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontSize: 32,
    },
  });

  return (
    <View
      style={styles.title}
    >
      <Text style={styles.text}>{pageTitle}</Text>
    </View>
  );
}
