import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Data from './DataUts';
import DetailData from './DetailData';
import {StatusBar} from 'react-native';

export default function NavUts() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#707"
        translucent={true}
      />
      <Stack.Navigator initialRouteName="DataUts">
        <Stack.Screen
          name="DataUts"
          component={Data}
          options={{
            headerTitle: 'Data Uts',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#707',
            },
          }}
        />
        <Stack.Screen
          name="DetailUts"
          component={DetailData}
          options={{
            headerTitle: 'Data Uts',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#707',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
