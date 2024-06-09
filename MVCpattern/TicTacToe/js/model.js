export default class Model {
    constructor() {
      this.currentPlayer = "X";
      this.winner = null;
      this.board = ["", "", "", "", "", "", "", "", ""];
      this.xScore = 0;
      this.oScore = 0;
    }
  
    makeMove(i) {
      if (this.board[i]) return;
  
      this.board[i] = this.currentPlayer;
  
      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
      } else {
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      }
    }
  
    checkWinner(player) {
      const winningRows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      const isWinner = winningRows.some((row) =>
        row.every((i) => this.board[i] === player)
      );
      return isWinner;
    }
  
    checkBoardIsFull() {
      let isFull = this.board.every((item) => item !== "");
      return isFull;
    }
  
    updateScore() {
      if (this.winner === "X") {
        this.xScore++;
      } else if (this.winner === "O") {
        this.oScore++;
      } else {
        this.xScore = 0;
        this.oScore = 0;
      }
    }
  
    resetGame() {
      this.board = ["", "", "", "", "", "", "", "", ""];
      this.currentPlayer = "X";
      this.winner = null;
    }
  }