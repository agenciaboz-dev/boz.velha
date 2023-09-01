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
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    checkWinner(); // Check for a winner every time the board changes (after each move)
    if (!winner) {
      checkDraw(); // Check for a draw if there was no winner 
    }
  }, [board, winner]);

  const checkWinner = () => {
    // Check rows, columns, and diagonals for a winner
    for (let i = 0; i < 3; i++) {
      // Check rows
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
        setWinner(true);
        navigation.navigate(`Winner_${board[i][0]}`);
        return;
      }
      // Check columns
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
        setWinner(true);
        navigation.navigate(`Winner_${board[0][i]}`);
        return;
      }
    }
    // Check diagonals
    if (
      (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') ||
      (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '')
    ) {
      setWinner(true);
      navigation.navigate(`Winner_${board[1][1]}`);
    }
  };

  const checkDraw = () => {
    // Check if all slots are filled and there was no winner
    const isDraw = (board.every(row => row.every(slot => slot === 'X' || slot === 'O')) && !winner );
    if (isDraw) {
      navigation.navigate('Draw');
    }
  };

  const handleSlotPress = (row, col) => {
    // Check if the slot is already filled or if there is a winner
    if (board[row][col] === '' && !winner) {
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
