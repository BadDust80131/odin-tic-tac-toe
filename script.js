const board = (function () {
    const board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]];
    return { board };
})();

const gameLogic = (function () {
    let score1 = 0;
    let score2 = 0;
    let rounds = prompt("Enter number of rounds:");
    while (rounds > 0) {
        roundLogic();
        rounds -= 1;
    }
})();

function roundLogic () {
    let end = false
    while (!end) {
        let pos = prompt('Player 1, Enter position, EX:"1,2"')
        let input1 = pos.split(",")[0]
        let input2 = pos.split(",")[1]
        while (checkValid(input1,input2) == false) {
            pos = prompt('Player 1, Enter position, EX:"1,2"')
            input1 = pos.split(",")[0]
            input2 = pos.split(",")[1]
        }
        board.board[input1][input2] = "X"

        if (checkWinner() == false) {
            
        }else {
            end = true;
            gameLogic.score1 += 1;
            console.log("player 1 won")
            console.log(board.board)
            break
        }

        pos = prompt('Player 2, Enter position, EX:"1,2"')
        input1 = pos.split(",")[0]
        input2 = pos.split(",")[1]
        while (checkValid(input1,input2) == false) {
            pos = prompt('Player 2, Enter position, EX:"1,2"')
            input1 = pos.split(",")[0]
            input2 = pos.split(",")[1]
        }
        board.board[input1][input2] = "O"
        if (checkWinner() == false) {
            continue
        }else {
            end = true;
            gameLogic.score2 += 1;
            console.log("player 2 won")
            console.log(board.board)
            break
        }
    }
}

function checkValid (input1,input2) {
    if (input1 > 2 || input2 > 2) {
        return false
    }
    return board.board[input1][input2] == 0
}

function checkWinner() {
    // Check rows and columns for a winner
    for (let i = 0; i < 3; i++) {
      if (board.board[i][0] && board.board[i][0] === board.board[i][1] && board.board[i][1] === board.board[i][2]) {
        return board.board[i][0];
      }
      if (board.board[0][i] && board.board[0][i] === board.board[1][i] && board.board[1][i] === board.board[2][i]) {
        return board.board[0][i];
      }
    }
  
    // Check diagonals for a winner
    if (board.board[0][0] && board.board[0][0] === board.board[1][1] && board.board[1][1] === board.board[2][2]) {
      return board[0][0];
    }
    if (board.board[0][2] && board.board[0][2] === board.board[1][1] && board.board[1][1] === board.board[2][0]) {
      return board.board[0][2];
    }
  
    // If no winner, return null
    return false;
  }