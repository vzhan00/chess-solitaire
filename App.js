import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import Home from './views/Home';
import { NativeRouter, Switch, Route } from 'react-router-native'
import fourBoard from './views/fourBoard';
import Game from './game-logic/Game';

export default function App() {
  let game = new Game(4);
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/fourBoard" component={fourBoard} />
        </Switch>
        <StatusBar style="auto" />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
