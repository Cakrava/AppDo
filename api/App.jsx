import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Import Screen
import LoginScreen from './Login';
import Index from './Index';
import NavMahasiswa from './Mahasiswa/NavMahasiswa';
import Navdosen from './Dosen/NavDosen';
import NavMatkul from './Matakuliah/NavMatakuliah';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    // Periksa Token Saat Aplikasi dimuat
    const checkTokenUser = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      setUserToken(userToken);
    };

    checkTokenUser();
  }, []);
  const handleSetUserToken = token => {
    setUserToken(token);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userToken == null ? (
          <Stack.Screen name="Login" options={{headerShown: false}}>
            {props => (
              <LoginScreen {...props} setUserToken={handleSetUserToken} />
            )}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Index" options={{headerShown: false}}>
              {props => <Index {...props} setUserToken={setUserToken} />}
            </Stack.Screen>

            <Stack.Screen
              name="Mahasiswa"
              component={NavMahasiswa}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Dosen"
              component={Navdosen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Matkul"
              component={NavMatkul}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="UserAccount"
              options={{headerShown: false, title: 'User'}}>
              {props => (
                <DataUser {...props} setUserToken={handleSetUserToken} />
              )}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
