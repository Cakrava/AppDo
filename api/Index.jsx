import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import DataMahasiswa from './Mahasiswa/NavMahasiswa';
import DataMatakuliah from './Matakuliah/NavMatakuliah';
import DataDosen from './Dosen/NavDosen';
import DataUser from './DataUser';
import NavJadwal from './Jadwal/NavJadwal';

const Tab = createBottomTabNavigator();
export default function Index(props) {
  const {setUserToken} = props;
  return (
    //<NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Mahasiswa') {
            iconName = focused ? 'logo-snapchat' : 'logo-snapchat';
          } else if (route.name === 'Matakuliah') {
            iconName = focused ? 'logo-buffer' : 'logo-buffer';
          } else if (route.name === 'Dosen') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'UserAccount') {
            iconName = focused ? 'person-add' : 'person-add-outline';
          } else if (route.name === 'Jadwal') {
            iconName = focused ? 'time' : 'time-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {backgroundColor: '#F5F', borderColor: '#F5F'},
      })}>
      <Tab.Screen
        name="Mahasiswa"
        component={DataMahasiswa}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Matakuliah"
        component={DataMatakuliah}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Dosen"
        component={DataDosen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Jadwal"
        component={NavJadwal}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="UserAccount"
        options={{headerShown: false, title: 'User'}}>
        {props => <DataUser {...props} setUserToken={setUserToken} />}
      </Tab.Screen>
    </Tab.Navigator>
    //</NavigationContainer>
  );
}
