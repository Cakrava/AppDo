import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'maroon',
        justifyContent: 'center',
      }}>
      <Text>Ini Adalah Halaman Home</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          borderRadius: 10,
          elevation: 5,
          width: 100,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}
        onPress={() => navigation.navigate('Second')}>
        <Text style={{color: 'white'}}>Takan Den</Text>
      </TouchableOpacity>
    </View>
  );
}

function SecondScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'violet',
        justifyContent: 'center',
      }}>
      <Text>Ini Adalah Halaman Kaduo</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          borderRadius: 10,
          elevation: 5,
          width: 100,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{color: 'white'}}>Baliak Liak</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function PageHome() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({});
