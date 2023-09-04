export function createInitialBoard(size) {
    const initialBoard = [];
    for (let i = 0; i < size; i++) {
        initialBoard.push(Array(size).fill(''));
    }
    return initialBoard;
}

export function handleSlotPress(row, col, board, currentPlayer, setBoard, setCurrentPlayer, winner) {
    // Check if the slot is already filled or if there is a winner
    if (board[row][col] === '' && !winner) {
        const newBoard = [...board];
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
}

export function checkWinner(board, setWinner, navigation, size) {
    // Check rows
    for (let i = 0; i < size; i++) {
        for (let j = 0; j <= size - 3; j++) {
            const symbol = board[i][j];
            if (symbol !== '') {
                let isWinningSequence = true;
                for (let k = 1; k < 3; k++) {
                    if (board[i][j + k] !== symbol) {
                        isWinningSequence = false;
                        break;
                    }
                }
                if (isWinningSequence) {
                    setWinner(true);
                    navigation.navigate(`Winner_${symbol}`);
                    return;
                }
            }
        }
    }

    // Check columns
    for (let i = 0; i < size; i++) {
        for (let j = 0; j <= size - 3; j++) {
            const symbol = board[j][i];
            if (symbol !== '') {
                let isWinningSequence = true;
                for (let k = 1; k < 3; k++) {
                    if (board[j + k][i] !== symbol) {
                        isWinningSequence = false;
                        break;
                    }
                }
                if (isWinningSequence) {
                    setWinner(true);
                    navigation.navigate(`Winner_${symbol}`);
                    return;
                }
            }
        }
    }

    // Check main diagonal
    for (let i = 0; i <= size - 3; i++) {
        for (let j = 0; j <= size - 3; j++) {
            const symbol = board[i][j];
            if (symbol !== '') {
                let isWinningSequence = true;
                for (let k = 1; k < 3; k++) {
                    if (board[i + k][j + k] !== symbol) {
                        isWinningSequence = false;
                        break;
                    }
                }
                if (isWinningSequence) {
                    setWinner(true);
                    navigation.navigate(`Winner_${symbol}`);
                    return;
                }
            }
        }
    }

    // Check secondary diagonal
    for (let i = 0; i <= size - 3; i++) {
        for (let j = size - 1; j >= 2; j--) {
            const symbol = board[i][j];
            if (symbol !== '') {
                let isWinningSequence = true;
                for (let k = 1; k < 3; k++) {
                    if (board[i + k][j - k] !== symbol) {
                        isWinningSequence = false;
                        break;
                    }
                }
                if (isWinningSequence) {
                    setWinner(true);
                    navigation.navigate(`Winner_${symbol}`);
                    return;
                }
            }
        }
    }
}

export function checkDraw(board, navigation) {
    // Check if all slots are filled and there was no winner
    const isDraw = board.every(row => row.every(slot => slot === 'X' || slot === 'O'));
    if (isDraw) {
        navigation.navigate('Draw');
    }
}
