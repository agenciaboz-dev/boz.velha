import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { checkDraw, checkWinner, handleSlotPress } from '../../utils/gameLogic';

export default function Game({ navigation }) {
  const initialBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    checkWinner(board, setWinner, navigation);
    if (!winner) {
      checkDraw(board, setWinner, navigation);
    }
  }, [board, winner, navigation]);

  const updateBoard = (row, col) => {
    handleSlotPress(row, col, board, currentPlayer, setBoard, setCurrentPlayer, winner);
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={{ flexDirection: 'row' }}>
            {row.map((slot, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={{
                  borderWidth: 5,
                  height: 100,
                  width: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => updateBoard(rowIndex, colIndex)} // Pass row and col here
              >
                <Text style={{ fontSize: 36 }}>{slot}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}
