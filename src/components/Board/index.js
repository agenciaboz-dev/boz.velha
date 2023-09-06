import React from 'react';
import { View } from 'react-native';
import Slot from '../Slot';

export default function Board({ board, player1Symbol, navigation, boardSize, onSlotPress }) {
  return (
    <View>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={{ flexDirection: 'row' }}>
            {row.map((slot, colIndex) => (
              <Slot
              board={board}
              player1Symbol={player1Symbol}
              navigation={navigation}
              boardSize={parsedBoardSize}
              />
            ))}
          </View>
        ))}
      </View>
  );
}