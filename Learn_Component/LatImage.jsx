import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
export default function LatImage() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1698046365922-d526e5d34555?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
        }}
        style={styles.image}
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
    borderRadius: 10,
    margin: 10,
  },
});
