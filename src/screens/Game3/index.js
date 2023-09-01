import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Game3() {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const handleSlotPress = (row, col) => {
    // Check if the slot is already filled or if the game is over
    // if (board[row][col] === '' && !gameOver) {
    //   const newBoard = [...board];
    //   newBoard[row][col] = currentPlayer === 'X' ? 'X' : 'O';
    //   setBoard(newBoard);
    //   setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    // }
    if (board[row][col] === '') {
      const newBoard = [...board];
      newBoard[row][col] = 'X' ? 'O' : 'X';
      setBoard(newBoard);
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