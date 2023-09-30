import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import images from '../../utils/images'

export default function BackButton({ onPress }) {

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Image source={images.close} />
    </TouchableOpacity>
  );
}
