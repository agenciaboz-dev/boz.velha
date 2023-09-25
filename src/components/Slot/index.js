import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { useColors } from '../../hooks/useColors';

export default function Slot({ rowIndex, colIndex, updateBoard, slot, player1Symbol }) {
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
      {/* <Image source={player1Symbol == 'O' ? images.circle : images.x }
        style={{
          height: 30,
          width: 30,
          resizeMode: "contain",
      }}
      /> */}
      <Text style={{
          fontSize: 18,
          }}>
          {slot}
      </Text>
    </TouchableOpacity>
  );
}
