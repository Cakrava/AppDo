import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfilScreen from './ProfilScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function Lat1() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profil" component={ProfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
