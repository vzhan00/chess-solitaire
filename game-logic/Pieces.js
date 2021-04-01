import React from 'react'
import { Image, StyleSheet } from 'react-native'

var Empty = function(name, color) {
    var string = "";
    //0 white, 1 black

    return {
        string: string,
    }
}

// var Pawn = function(props) {
//     var string = "p";
//     //const draw = <div><Image source={ white_pawn }></Image></div>;

//     return {
//         <Image/> 
//     }
// }

var Rook = function(color) {
    var string = "r";

    return {
        string: string,
        color: color
    }
}

var Knight = function() {
    var string = "n";

    return {
        string: string
    }
}

var Bishop = function() {
    var string = "b";

    return {
        string: string
    }
}

var King = function() {
    var string = "k";

    return {
        string: string
    }
}

var Queen = function() {
    var string = "q";

    return {
        string: string
    }
}