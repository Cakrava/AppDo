import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
export default function LatImage() {
  return (
    <View style={styles.container}>
      <Image source={require('./images/a.jpg')} style={styles.image} />
      <Image
        source={require('./images/b.jpg')}
        style={styles.image}
        resizeMode="contain" //kalian bisa rubah menjadi `cover`,`strecth`,`center`,`repeat`
      />
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
