import {StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native'; 
import React, {useState} from 'react'; 
export default function LatTextInput_1() { 
 const [nama, setNama] = useState(''); 
 const [email, setEmail] = useState(''); 
 return ( 
 <View style={{flex: 1, justifyContent: 'center', padding: 16}}> 
 <Text>Nama Anda:</Text> 
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
 <Text>Email:</Text> 
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
 <Button
 title="Kirim"
 onPress={() => { 
 Alert.alert(`Nama Anda: ${nama}\n Email: ${email}`); 
 }}
 /> 
 </View> 
 ); 
} 
const styles = StyleSheet.create({});