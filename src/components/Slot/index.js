import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useColors } from '../../hooks/useColors';
import images from '../../utils/images';

export default function Slot({ rowIndex, colIndex, updateBoard, slot, player1Symbol }) {
  const colors = useColors();

  let slotImage;
  if (slot === 'X') {
    slotImage = images.x;
  } else if (slot === 'O') {
    slotImage = images.circle;
  } else {
    slotImage = null;
  }

  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.primary,
        margin: 5,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
      }}
      onPress={() => updateBoard(rowIndex, colIndex)}
    >
      {slotImage && <Image source={slotImage} style={{ height: 30, width: 30, resizeMode: 'contain' }} />}
    </TouchableOpacity>
  );
}
