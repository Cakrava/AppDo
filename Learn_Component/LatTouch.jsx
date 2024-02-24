import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'; 
import React from 'react'; 
export default function LatTouch() { 
 return ( 
 <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
 <TouchableOpacity
 onPress={() => { 
 alert('TouchableOpacity Pressed!'); 
 }}
 activeOpacity={0.7}> 
 <View style={{backgroundColor: 'blue', padding: 10, borderRadius: 5}}> 
 <Text style={{color: 'white'}}>Tap Me</Text> 
 </View> 
 </TouchableOpacity> 
 </View> 
 ); 
} 
const styles = StyleSheet.create({});