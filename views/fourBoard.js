import React, { useState } from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';
import WhiteBishop from './white-bishop'
import { Game } from '../game-logic/Game'

//https://stackoverflow.com/questions/38830568/how-to-show-svg-file-on-react-native
//use this to convert svg to jsx

const Board = (props) => {
	const [board, setBoard] = useState(Game(4));
	var row = [];
	var col = [];

	for (let i = 0; i < board.boardSize; i++) {
		for (let j = 0; j < board.boardSize; j++) {
			if ((i + j) % 2 == 0) {
				row.push(
					<View style={[styles.tile, { backgroundColor: "#deb887" }]} />
				);
			} else {
				row.push(
					<View style={[styles.tile, { backgroundColor: "#8b4513" }]} />
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
		<Board />
	</View>
);

const styles = StyleSheet.create({
	tile: {
		width: 50,
		height: 50,
	}
})