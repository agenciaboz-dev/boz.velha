import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createInitialBoard, handleSlotPress, checkWinner, checkDraw } from '../../utils/gameLogic';
import Board from '../../components/Board';

export default function Game({ route, navigation }) {
  const { player1Symbol, player1Color, player2Color, boardSize } = route.params;
  const parsedBoardSize = parseInt(boardSize);

  const initialBoard = createInitialBoard(parsedBoardSize);

  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState(player1Symbol);
  const [winner, setWinner] = useState(false);

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
      <Board
        board = {board}
        updateBoard = {updateBoard}
        player1Symbol = {player1Symbol}
        player1Color = {player1Color}
        player2Color = {player2Color}
      />
    </View >
  )
}
