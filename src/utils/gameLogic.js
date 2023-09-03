export function handleSlotPress(row, col, board, currentPlayer, setBoard, setCurrentPlayer, winner) {
    // Check if the slot is already filled or if there is a winner
    if (board[row][col] === '' && !winner) {
        const newBoard = [...board];
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
}

export function checkWinner(board, setWinner, navigation) {
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
}

export function checkDraw(board, setWinner, navigation) {
    // Check if all slots are filled and there was no winner
    const isDraw = board.every(row => row.every(slot => slot === 'X' || slot === 'O'));
    if (isDraw) {
        navigation.navigate('Draw');
    }
}
