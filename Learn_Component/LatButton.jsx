import {StyleSheet, Button, View, Alert} from 'react-native'; 
import React from 'react'; 
export default function LatButton() { 
 return ( 
 <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
 <Button
 title="Tombol Saya"
 onPress={() => { 
 Alert.alert('Pesan', 'Anda Menekan Tombol Ini !'); 
 }}
 /> 
 </View> 
 ); 
} 
const styles = StyleSheet.create({});