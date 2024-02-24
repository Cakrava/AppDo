import React, {useState} from 'react'; 
import { 
 StyleSheet, 
 View, 
 TextInput, 
 Text, 
 TouchableOpacity, 
} from 'react-native'; 
export default function LatMaskPassword() { 
 const [password, setPassword] = useState(''); 
 const [isPasswordVisible, setPasswordVisibility] = useState(false); 
 return ( 
 <View style={{flex: 1, justifyContent: 'center', padding: 16}}> 
 <Text>Password:</Text> 
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
 placeholder="Enter your password"
 secureTextEntry={!isPasswordVisible} // Password will be masked if this 
is true
 style={{flex: 1, padding: 8}}
 /> 
 <TouchableOpacity
 onPress={() =>
 setPasswordVisibility(prevVisibility => !prevVisibility) 
 }
 style={{padding: 8}}> 
 <Text>{isPasswordVisible ? 'Hide' : 'Show'}</Text> 
 </TouchableOpacity> 
 </View> 
 </View> 
 ); 
}
const styles = StyleSheet.create({});