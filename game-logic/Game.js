import * as Pieces from './Pieces.js'

export const Game = function(boardSize) {
	//[row, column]
	let board = [];

	//fill board
	for (let i = 0; i < boardSize; i++) {
		//initialize row
		let row = [];
		for (let j = 0; j < boardSize; j++) {
			row.push(Pieces.Empty());
			//row.push("");
		}

		//console.log(i)
		//console.log(row)

		board.push(row);
	}

	// gets the piece at a pos
	let getPiece = (i, j) => {
		return board[i][j].piece;
	}

	// moves a piece
	let move = (i, j, pieceI, pieceJ) => {
		let piece = getPiece(pieceI, pieceJ);

		// checks if the movement is valid and if there's a piece that can be eaten
		// remove second predicate if testing it can move anywhere
		if (piece.moveValid(pieceI, pieceJ, i, j) && getPiece(i, j).piece !== "") {
			board[i][j] = piece;
			board[pieceI][pieceJ] = Pieces.Empty();
		}
	}

	//console.log(board)

	return {
		//board: board,
		boardSize: boardSize,
		getPiece: getPiece,
		move: move
	}
}



