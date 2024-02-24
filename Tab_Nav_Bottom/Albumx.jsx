import React from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Albumx = () => {
  const navigation = useNavigation();

  const images = [
    { id: '1', source: require('./img/a.jpeg') },
    { id: '2', source: require('./img/b.jpeg') },
    { id: '3', source: require('./img/c.jpeg') },
    { id: '4', source: require('./img/d.jpeg') },
    { id: '5', source: require('./img/e.jpeg') },
    // Tambahkan gambar-gambar lain sesuai kebutuhan
  ];

  const renderImage = ({ item }) => (
    <TouchableOpacity style={styles.imageContainer} onPress={() => handleImagePress(item)}>
      <Image source={item.source} style={styles.image} />
    </TouchableOpacity>
  );

  const handleImagePress = (item) => {
    // Tambahkan logika atau navigasi yang sesuai saat gambar ditekan
    console.log(`Image ${item.id} pressed`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        renderItem={renderImage}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff99ff',
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
});

export default Albumx;