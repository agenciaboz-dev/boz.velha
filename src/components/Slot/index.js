import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useColors } from '../../hooks/useColors';

export default function Slot({ rowIndex, colIndex, updateBoard, slot, player1Symbol, player1Color, player2Color }) {
  const colors = useColors();

  return (
    <TouchableOpacity
        style={[
            {
            backgroundColor: colors.primary,
            margin: 5,
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5
            },
        ]}
        onPress={() => updateBoard(rowIndex, colIndex)}
        >
        <Text style={{
            fontSize: 18,
            color: slot === player1Symbol ? player1Color : player2Color
            }}>
            {slot}
        </Text>
        </TouchableOpacity>
  );
}
