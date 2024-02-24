import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FormInput from './FormInput';
import {StatusBar} from 'react-native';
import DataJadwal from './DataJadwal';

export default function NavJadwal() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#7071e8"
        translucent={true}
      />
      <Stack.Navigator initialRouteName="DataJadwal">
        <Stack.Screen
          name="FormInput"
          component={FormInput}
          options={{
            headerTitle: 'Input Jadwal',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#7071e8',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="DataJadwal"
          component={DataJadwal}
          options={{
            headerTitle: 'Data Jadwal',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#7071e8',
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </>
  );
}
