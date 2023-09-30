import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';
import { createInitialBoard, handleSlotPress, checkWinner, checkDraw } from '../../utils/gameLogic';
import Board from '../../components/Board';
import { useColors } from '../../hooks/useColors';
import PageTitle from '../../components/PageTitle';
import images from '../../utils/images';
import BackButton from '../../components/BackButton';

export default function Game({ route, navigation }) {
  const colors = useColors();

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
          height: "100%",
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Image source={images.boz_logo}
          style={{
            width: 130,
            resizeMode: "contain",
          }}
        />
        <PageTitle pageTitle={`Vez do jogador ${currentPlayer}`} />
        <View
          style={{
            alignItems: "center",
            backgroundColor: colors.background,
            borderRadius: 50,
            padding: 50,
            paddingBottom: 0,
            width: "90%"
          }}
        >
          <Board
            board = {board}
            updateBoard = {updateBoard}
            player1Symbol = {player1Symbol}
            player1Color = {player1Color}
            player2Color = {player2Color}
          />
          <Image source={images.bozzer_writing}
            style={{
              height: 150,
              width: 250,
              resizeMode: "cover",
              marginTop: "auto",
            }}
          />
        </View>

        <BackButton buttonText={'Sair'} onPress={() => { navigation.navigate('Start')}} />

      </View >
  )
}
