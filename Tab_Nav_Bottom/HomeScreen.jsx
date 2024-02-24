import {View, Text} from 'react-native';
import React from 'react';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFBF5',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#7743DB',
          textShadowColor: 'red',
          textShadowRadius: 3,
        }}>
        Ini Halaman Home Screen
      </Text>
    </View>
  );
}
