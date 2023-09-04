import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createInitialBoard, handleSlotPress, checkWinner, checkDraw } from '../../utils/gameLogic';

export default function Game({ navigation }) {
  const boardSize = 5;
  const initialBoard = createInitialBoard(boardSize);

  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [winner, setWinner] = useState(false);
  const [cellStyles, setCellStyles] = useState(initialCellStyles);

  const initialCellStyles = Array(boardSize)
    .fill([])
    .map(() => Array(boardSize).fill({}));

  const updatedStyles = Array(boardSize)
    .fill([])
    .map(() => Array(boardSize).fill({}));

  useEffect(() => {
    checkWinner(board, setWinner, navigation, boardSize);
    if (!winner) {
      checkDraw(board, navigation);
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
                style={[
                  {
                    borderWidth: 2,
                    height: 50,
                    width: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  cellStyles[rowIndex][colIndex], // Apply the styles here
                ]}
                onPress={() => updateBoard(rowIndex, colIndex)}
              >
                <Text style={{ fontSize: 18 }}>{slot}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}

      </View>
    </View >
  )
}
