import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default ({ history }) => (
  <View>
    <Text style={{ fontSize: 50, textAlign: "center" }}>Home</Text>
    <TouchableOpacity style={{ borderRadius: 5, width: 400, backgroundColor: "#4287f5", height: 50, alignItems: "center", margin: 5}} onPress={() => history.push("/fourBoard")}>
      <Text style={{ color: "white", fontSize: 30 }}>Play</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ borderRadius: 5, width: 400, backgroundColor: "#4287f5", height: 50, alignItems: "center", margin: 5}} onPress={() => history.push("/fourBoard")}>
      <Text style={{ color: "white", fontSize: 30 }}>Puzzle Rush</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ borderRadius: 5, width: 400, backgroundColor: "#4287f5", height: 50, alignItems: "center", margin: 5}} onPress={() => history.push("/fourBoard")}>
      <Text style={{ color: "white", fontSize: 30 }}>Settings</Text>
    </TouchableOpacity>
  </View>
);