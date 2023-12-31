import React from 'react';
import { View } from 'react-native';
import Slot from '../Slot';

export default function Board({ board, updateBoard, player1Symbol }) {
  return (
    <View>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={{ flexDirection: 'row' }}>
            {row.map((slot, colIndex) => (
              <Slot
                key = {colIndex}
                rowIndex = {rowIndex}
                colIndex = {colIndex}
                updateBoard = {updateBoard}
                slot = {slot}
                player1Symbol = {player1Symbol}
              />
            ))}
          </View>
        ))}
      </View>
  );
}