const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

one.addEventListener("click", function() {
    console.log("one");
});
two.addEventListener("click", function() {
    console.log("two");
});
three.addEventListener("click", function() {
    console.log("three");
});
four.addEventListener("click", function() {
    console.log("four");
});
five.addEventListener("click", function() {
    console.log("five");
});
six.addEventListener("click", function() {
    console.log("six");
});
seven.addEventListener("click", function() {
    console.log("seven");
});
eight.addEventListener("click", function() {
    console.log("eight");
});
nine.addEventListener("click", function() {
    console.log("nine");
});


const board = (function () {
    const board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]];
    const clear = () => board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]];

    return { board, clear };
})();

const gameLogic = (function () {
    displayBoard();
    let score1 = 0;
    let score2 = 0;
    let rounds = prompt("Enter number of rounds:");
    while (rounds > 0) {
        roundLogic();
        board.clear();
        rounds -= 1;
    }
})();

function roundLogic () {
        let pos = prompt('Player 1, Enter position, EX:"1,2"')
        let input1 = pos.split(",")[0]
        let input2 = pos.split(",")[1]
        while (checkValid(input1,input2) == false) {
            pos = prompt('Player 1, Enter position, EX:"1,2"')
            input1 = pos.split(",")[0]
            input2 = pos.split(",")[1]
        }
        board.board[input1][input2] = "X"
        displayBoard();
        if (checkWinner() == false) {
        }else {
            end = true;
            gameLogic.score1 += 1;
            console.log("player 1 won")
            console.log(board.board)
            return
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
        displayBoard();
        if (checkWinner() == false) {
            roundLogic()
        }else {
            end = true;
            gameLogic.score2 += 1;
            console.log("player 2 won")
            console.log(board.board)
            return
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

function displayBoard () {
    if (checkValid(0,0)) {
        one.innerHTML = "-";
    } else {
        one.innerHTML = board.board[0][0];
    }
    if (checkValid(0,1)) {
        two.innerHTML = "-";
    }else {
        two.innerHTML = board.board[0][1];
    }
    if (checkValid(0,2)) {
        three.innerHTML = "-";
    }else {
        three.innerHTML = board.board[0][2];
    }
    if (checkValid(1,0)) {
        four.innerHTML = "-";
    }else {
        four.innerHTML = board.board[1][0];
    }
    if (checkValid(1,1)) {
        five.innerHTML = "-";
    }else {
        five.innerHTML = board.board[1][1];
    }
    if (checkValid(1,2)) {
        six.innerHTML = "-";
    }else {
        six.innerHTML = board.board[1][2];
    }
    if (checkValid(2,0)) {
        seven.innerHTML = "-";
    }else {
        seven.innerHTML = board.board[2][0];
    }
    if (checkValid(2,1)) {
        eight.innerHTML = "-";
    }else {
        eight.innerHTML = board.board[2][1];
    }
    if (checkValid(2,2)) {
        nine.innerHTML = "-";
    }else {
        nine.innerHTML = board.board[2][2];
    }
}

