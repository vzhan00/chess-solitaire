import React, { useState } from 'react';
import { Image, Button, StyleSheet, Text, View, Touchable, TouchableOpacity } from 'react-native';
import { WhiteBishop } from './white-bishop'
import { Game } from '../game-logic/Game'
import { Empty } from '../game-logic/Pieces'

//https://stackoverflow.com/questions/38830568/how-to-show-svg-file-on-react-native
//use this to convert svg to jsx

const Piece = (props) => {

}

const Board = (props) => {
	const [game, setGame] = useState(Game(props.boardSize));
	const [select, setSelect] = useState(0);
	var row = [];
	var col = [];

	const _handlePress = (pos) => {
		//console.log(pos)
		//positions
		let i = pos[0];
		let j = pos[1];

		//console.log(game.getPiece(0, 1))

		let piece = game.getPiece(i, j);

		//selects if piece was pressed
		if (select === 0 && piece !== "") {
			setSelect([i, j]);
			console.log(select);
		}

		//acts if piece was selected previously
		if (select !== 0) {
			if (piece !== "") {
				game.move(i, j, select[0], select[1]);
			}
			setSelect(0);
			//console.log(select);
		}
	}

	//builds the board to render
	for (let i = 0; i < props.boardSize; i++) {
		for (let j = 0; j < props.boardSize; j++) {
			if ((i + j) % 2 === 0) {
				row.push(
					<View >
						<TouchableOpacity style={[styles.tile, { backgroundColor: "#deb887" }]} onPress={_handlePress.bind(_handlePress, [i, j])}>
						</TouchableOpacity>
					</View>
				);
			} else {
				row.push(
					<View>
						<TouchableOpacity style={[styles.tile, { backgroundColor: "#8b4513" }]} onPress={_handlePress.bind(_handlePress, [i, j])}>
						</TouchableOpacity>
					</View>
				);
			}

		}

		col.push(row);
	}

	return (
		col.map(row => {
			return row.map(tile => {
				return tile;
			})
		})
	);
}

export default ({ history }) => (
	<View>
		<Text>fourBoard</Text>
		<Button title="yoyoyo" onPress={() => history.push("/")} />
		<WhiteBishop />
		<Board boardSize={4} />
	</View>
);

const styles = StyleSheet.create({
	tile: {
		width: 50,
		height: 50,
	}
})