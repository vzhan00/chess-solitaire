import React from 'react'
import { Image, StyleSheet } from 'react-native'

//Allows us to change what a piece is in the future and add more
//1 white, 0 black

//piece field is to avoid needing to use instanceof and allows us to describe

export const Empty = () => {
    return {
        piece: "",
    }
}

// Thought about using a piece abstraction, but every piece has their own behavior
// Decided to make it so you can add whatever piece you want
// no longer need a switch case, organized by behavior

// moveValid is used in Game.js 

export const Pawn = (color) => {
    //this function is used in Game.js
    const moveValid = (pieceI, pieceJ, i, j) => {
        return j - pieceJ == 1 && Math.abs(pieceI - i) === 1;
    }

    return {
        string: "p",
        color: color
    }
}

export const Rook = (color) => {
    return {
        string: "r",
        color: color
    }
}

export const Knight = (color) => {
    return {
        string: "n",
        color: color
    }
}

export const Bishop = (color) => {
    return {
        string: "b",
        color: color
    }
}

export const King = (color) => {
    return {
        string: "k",
        color: color
    }
}

export const Queen = (color) => {
    return {
        string: "q",
        color: color
    }
}