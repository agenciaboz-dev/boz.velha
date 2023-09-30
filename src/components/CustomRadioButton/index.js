import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import images from '../../utils/images';

const CustomRadioButton = ({ selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}
        style={{
            
        }}
        >
        <Image source={images.radio_input}
            style={{
                height: 30,
                width: 30,
                resizeMode: "contain",
            }}
        />
        {selected &&
            <Image source={images.check}
                style={{
                    position: "absolute",
                    height: 40,
                    width: 40,
                    resizeMode: "contain",
                    top: -15
                }}
            />
        }
    </TouchableOpacity>
  );
};

export default CustomRadioButton;
