import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useReducer} from 'react';
const initialState = {count: 0};
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}
export default function LatUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Count: {state.count}</Text>
      <Button title="Tambah" onPress={() => dispatch({type: 'increment'})} />
      <Button title="Kurangi" onPress={() => dispatch({type: 'decrement'})} />
    </View>
  );
}
const styles = StyleSheet.create({});
