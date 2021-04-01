import * as Pieces from './Pieces.js'

export const Game = function(boardSize) {
	//[row, column]
	var board = [];

	//fill board
	for (var i = 0; i < boardSize; i++) {
		//initialize row
		let row = [];
		for (var j = 0; j < boardSize; j++) {
			row.push(Pieces.Empty);
		}

		board.push(row);
	}

	return {
		board: board,
		boardSize: boardSize
	}
}


