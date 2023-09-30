import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { useColors } from '../../hooks/useColors';
import images from '../../utils/images';

export default function ChoiceSlot({ symbol }) {
  const colors = useColors();

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: colors.primary,
          marginTop: 10,
          marginRight: 40,
          marginBottom: 10,
          marginLeft: 40,
          height: 70,
          width: 70,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20
        },
      ]}
      // onPress={() => updateBoard(rowIndex, colIndex)}
    >
      <Image source={ symbol == "X" ? images.x : images.circle }
        style={{
          height: 30,
          width: 30,
          resizeMode: "contain",
      }}
      />
    </TouchableOpacity>
  );
}
