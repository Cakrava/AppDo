import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Data from '../Matakuliah/DataMatakuliah';
import DetailData from './DataDetail';
import {StatusBar} from 'react-native';
import FormTambah from './FormTambah';
import FormEdit from './FormEdit';
import FormUploadMatakuliah from './FormUploadMatakuliah';

export default function NavMatakuliah() {
  const Stack = createNativeStackNavigator();

  return (
    //<NavigationContainer independent={true}>
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#7071E8"
        translucent={true}
      />
      <Stack.Navigator initialRouteName="DataMatakuliah">
        <Stack.Screen
          name="DataMatakuliah"
          component={Data}
          options={{
            headerTitle: 'Data Matakuliah',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#7071E8',
            },
          }}
        />
        <Stack.Screen
          name="DetailMatakuliah"
          component={DetailData}
          options={{
            headerTitle: 'Data Matakuliah',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#7071E8',
            },
          }}
        />
        <Stack.Screen
          name="FormTambah"
          component={FormTambah}
          options={{
            headerTitle: 'Tambah Matakuliah',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#7071E8',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="FormEdit"
          component={FormEdit}
          options={{
            headerTitle: 'Edit Matakuliah',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#7071E8',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="FormUpload"
          component={FormUploadMatakuliah}
          options={{
            headerTitle: 'Update Foto Matakuliah',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#7071E8',
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </>
    //</NavigationContainer>
  );
}
