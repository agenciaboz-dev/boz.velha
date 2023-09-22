import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useColors } from '../../hooks/useColors';
import { Text } from 'react-native-paper';

export default function PageTitle({ pageTitle }) {
  const colors = useColors();

  const styles = StyleSheet.create({
    title: {
      backgroundColor: colors.primary,
      borderRadius: 50,
      alignItems: 'center',
      paddingTop: 5,
      paddingBottom: 5,
      width: "80%"
    },
    text: {
      color: 'white',
      fontSize: 40,
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
