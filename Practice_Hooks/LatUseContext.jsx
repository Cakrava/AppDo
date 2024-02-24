import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
const ThemeContext = React.createContext();
function ThemeButton() {
  const theme = useContext(ThemeContext);
  return <Button title="Ubah Tema" onPress={theme.toggleTheme} />;
}
export default function LatUseContext() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };
  return (
    <ThemeContext.Provider value={{isDark: darkTheme, toggleTheme}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: darkTheme ? 'black' : 'white',
        }}>
        <Text style={{color: darkTheme ? 'white' : 'black'}}>
          Tema saat ini: {darkTheme ? 'Gelap' : 'Terang'}
        </Text>
        <ThemeButton />
      </View>
    </ThemeContext.Provider>
  );
}
const styles = StyleSheet.create({});
