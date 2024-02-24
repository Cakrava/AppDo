import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Data from '../Dosen/DataDosen';
import DetailData from './DataDetail';
import {StatusBar} from 'react-native';
import FormTambah from './FormTambah';
import FormEdit from './FormEdit';
import FormUploadDosen from './FormUploadDosen';

export default function NavDosen() {
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
      <Stack.Navigator initialRouteName="DataDosen">
        <Stack.Screen
          name="DataDosen"
          component={Data}
          options={{
            headerTitle: 'Data Dosen',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#7071E8',
            },
          }}
        />
        <Stack.Screen
          name="DetailDosen"
          component={DetailData}
          options={{
            headerTitle: 'Data Dosen',
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
            headerTitle: 'Tambah Dosen',
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
            headerTitle: 'Edit Dosen',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#7071E8',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="FormUpload"
          component={FormUploadDosen}
          options={{
            headerTitle: 'Upload Foto Dosen',
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
