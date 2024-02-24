import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
export default function LatCalculator() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');
  const calculate = () => {
    let n1 = parseFloat(number1);
    let n2 = parseFloat(number2);
    let res = 0;
    switch (operation) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        res = n1 / n2;
        break;
    }
    setResult(res);
  };
  return (
    <View style={{padding: 20}}>
      <TextInput
        placeholder="Angka Pertama"
        keyboardType="numeric"
        value={number1}
        onChangeText={text => setNumber1(text)}
      />
      <TextInput
        placeholder="Angka Kedua"
        keyboardType="numeric"
        value={number2}
        onChangeText={text => setNumber2(text)}
      />
      <Picker
        selectedValue={operation}
        onValueChange={itemValue => setOperation(itemValue)}>
        <Picker.Item label="Penambahan" value="+" />
        <Picker.Item label="Pengurangan" value="-" />
        <Picker.Item label="Perkalian" value="*" />
        <Picker.Item label="Pembagian" value="/" />
      </Picker>
      <Button title="Hitung" onPress={calculate} />
      <Text>Hasil: {result}</Text>
    </View>
  );
}
const styles = StyleSheet.create({});
