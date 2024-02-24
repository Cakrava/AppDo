import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import React, {useState} from 'react';

export default function LatSegi() {
  const [alas, setAlas] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [luas, setLuas] = useState('');

  const hitungLuas = () => {
    const a = parseFloat(alas);
    const t = parseFloat(tinggi);

    const hasilLuas = 0.5 * a * t;
    setLuas(`Luas: ${hasilLuas}`);
  };

  return (
    <View style={{padding: 20}}>
      <TextInput
        placeholder="Alas"
        keyboardType="numeric"
        value={alas}
        onChangeText={text => setAlas(text)}
      />
      <TextInput
        placeholder="Tinggi"
        keyboardType="numeric"
        value={tinggi}
        onChangeText={text => setTinggi(text)}
      />
      <Button title="Hitung Luas Segitiga" onPress={hitungLuas} />
      <Text>{luas}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
