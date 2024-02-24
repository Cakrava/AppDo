import {StyleSheet, Text, View} from 'react-native'; 
import React from 'react'; 
export default function LatView1() { 
 return ( 
 <View style={styles.container}> 
 <View style={styles.box1}> 
 <Text style={styles.textBox}>1</Text> 
 </View> 
 <View style={styles.box2}> 
 <Text style={styles.textBox}>2</Text> 
 </View> 
 <View style={styles.box3}> 
 <Text style={styles.textBox}>3</Text> 
 </View> 
 </View> 
 ); 
} 

const styles = StyleSheet.create({ 
    container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'row', 
    }, 
    box1: { 
    width: 80, 
    height: 80, 
    backgroundColor: 'red', 
    margin: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
}, 
box2: { 
width: 80, 
height: 80, 
backgroundColor: 'green', 
margin: 10, 
justifyContent: 'center', 
alignItems: 'center', 
}, 
box3: { 
width: 80, 
height: 80, 
backgroundColor: 'blue', 
margin: 10, 
justifyContent: 'center', 
alignItems: 'center', 
}, 
textBox: { 
color: 'white', 
fontSize: 30, 
fontWeight: 'bold', 
}, 
});   