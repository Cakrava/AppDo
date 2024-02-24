import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import dataKontak from './DataContact.json';

export default function ListContact() {
  const images = {
    a: require('./img/a.jpeg'),
    d: require('./img/d.jpeg'),
    b: require('./img/b.jpeg'),
    c: require('./img/c.jpeg'),
    e: require('./img/e.jpeg'),
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>List Data Contact</Text>
      <FlatList
        data={dataKontak}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Image
              source={images[item.img.split('.')[0]]}
              style={styles.circle}
            />
            <View style={styles.textContainer}>
              <Text style={styles.number}>{item.nohp}</Text>
              <Text style={styles.name}>{item.nama}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <Image source={require('./img/x.webp')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0099',
    padding: 10,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff99ff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    elevation: 3,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'transparent',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    marginVertical: 50,
    marginHorizontal: 90,
  },
});
