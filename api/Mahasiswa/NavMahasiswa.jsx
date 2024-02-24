import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Data from './DataMahasiswa';
import DetailData from './DetailData';
import {StatusBar} from 'react-native';
import FormTambah from './FormTambah';
import FormEdit from './FormEdit';
import FormUploadMahasiswa from './FormUploadMahasiswa';

export default function NavMahasiswa() {
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
      <Stack.Navigator initialRouteName="DataMahasiswa">
        <Stack.Screen
          name="DataMahasiswa"
          component={Data}
          options={{
            headerTitle: 'Data Mahasiswa',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#7071E8',
            },
          }}
        />
        <Stack.Screen
          name="DetailMahasiswa"
          component={DetailData}
          options={{
            headerTitle: 'Data Mahasiswa',
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
            headerTitle: 'Tambah Mahasiswa',
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
            headerTitle: 'Edit Mahasiswa',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#7071E8',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="FormUpload"
          component={FormUploadMahasiswa}
          options={{
            headerTitle: 'Upload Foto Mahasiswa',
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
