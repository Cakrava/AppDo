import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

export default function Pratikum2() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState('false');

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          source={require('./images/b.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Revaldo Oviaza</Text>
      </View>

      <View style={{flex: 1, justifyContent: 'center', padding: 16}}>
        <Text style={{marginBottom: 5}}>Nama Lengkap</Text>
        <TextInput
          value={nama}
          onChangeText={setNama}
          placeholder="Input Nama Anda"
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 8,
            marginBottom: 16,
          }}
        />

        <Text style={{marginBottom: 5}}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Input Email Anda"
          keyboardType="email-address"
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 8,
            marginBottom: 16,
          }}
        />

        <Text style={{marginBottom: 5}}>Password</Text>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'gray',
            marginBottom: 16,
          }}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter Your Password"
            secureTextEntry={!isPasswordVisible}
            style={{flex: 1, padding: 8}}
          />
          <TouchableOpacity
            onPress={() =>
              setPasswordVisible(prevVisibility => !prevVisibility)
            }
            style={{padding: 8}}>
            <Text>{isPasswordVisible ? 'hide' : 'show'}</Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Kirim Data"
          onPress={() => {
            Alert.alert(
              'Terima Kasih',
              `Hallo, ${nama}\n Email: ${email} \n Terima Kasih Telah Mengisi Form`,
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    margin: 10,
  },
});
