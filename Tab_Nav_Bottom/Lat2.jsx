import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import Home from './Home';
import ListContact from './ListContact';
import Chatx from './Chatx';
import Albumx from './Albumx';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function Lat2() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 12},
          tabBarStyle: {backgroundColor: '#FF66ff'},
        }}>
        <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{title: 'Beranda',
            }}
          />
        <Tab.Screen 
            name="ListContact" 
            component={ListContact} 
            options={{title: 'Data Kontak',
            }}
          />
          <Tab.Screen 
            name="Chatx" 
            component={Chatx} 
            options={{title: 'Chat',
            }}
          />
          <Tab.Screen 
            name="Albumx" 
            component={Albumx} 
            options={{title: 'Album',
            }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
