import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default ({ history }) => (
  <View>
    <Text>fourBoard</Text>
    <Button title="yoyoyo" onPress={() => history.push("/")}/>
  </View>
);