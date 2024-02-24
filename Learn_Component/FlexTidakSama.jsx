import {StyleSheet, Text, View} from 'react-native'; 
import React from 'react'; 
export default function LatFlex() { 
 return ( 
 <View style={{flex: 1}}> 
 <View style={{flex: 2, backgroundColor: 'yellow'}} /> 
 <View style={{flex: 1, backgroundColor: 'red'}} /> 
 </View> 
 ); 
} 
const styles = StyleSheet.create({});