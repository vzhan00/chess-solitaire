class Game {
  constructor(boardSize) {
    this.boardSize = boardSize;
    this.board = [Math.pow(this.boardSize, 2)];
  }

}

export default Game;