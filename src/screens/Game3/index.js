import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Game3({navigation}) {
  const initialBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    checkDraw(); // Check for a draw condition every time the board changes (after each move)
  }, [board]);

  const checkDraw = () => {
    // Check if all slots are filled and there is no winner
    const isDraw = board.every(row => row.every(slot => slot === 'X' || slot === 'O'));
    if (isDraw && !gameOver) {
      setGameOver(true);
      navigation.navigate('Empate');
    }
  };

  const handleSlotPress = (row, col) => {
    // Check if the slot is already filled or if the game is over
    if (board[row][col] === '' && !gameOver) {
      const newBoard = [...board];
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
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
                onPress={() => handleSlotPress(rowIndex, colIndex)}
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
