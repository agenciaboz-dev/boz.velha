import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Slot({ rowIndex, colIndex, updateBoard, slot, player1Symbol, player1Color, player2Color }) {
  return (
    <TouchableOpacity
        style={[
            {
            backgroundColor: 'lightblue',
            margin: 5,
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
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
