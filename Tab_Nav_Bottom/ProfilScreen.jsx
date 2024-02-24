import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const ProfilScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{padding: 10}}></View>
      <View style={styles.headerContainer}>
        <Image
          source={require('../Learn_Component/images/b.jpg')} // Ganti dengan URL gambar profil Kalian
          style={styles.profileImage}
        />
        <Text style={styles.name}>Valdo</Text>
        <Text style={styles.bio}>@valdo_izy</Text>
        <Text style={styles.bio}>Gamer & Mechanic</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Postingan</Text>
          <Text style={styles.infoValue}>120</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Pengikut</Text>
          <Text style={styles.infoValue}>300k</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Mengikuti</Text>
          <Text style={styles.infoValue}>150</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 15,
          marginRight: 15,
          justifyContent: 'space-around',
        }}>
        <Image
          source={require('../Learn_Component/images/a.jpg')} // Ganti dengan URL gambar profil Kalian
          style={styles.galeri}
        />
        <Image
          source={require('../Learn_Component/images/b.jpg')} // Ganti dengan URL gambar profil Kalian
          style={styles.galeri}
        />
        <Image
          source={require('../Learn_Component/images/a.jpg')} // Ganti dengan URL gambar profil Kalian
          style={styles.galeri}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 15,
          marginRight: 15,
          justifyContent: 'space-around',
        }}>
        <Image
          source={require('../Learn_Component/images/b.jpg')} // Ganti dengan URL gambar profil Kalian
          style={styles.galeri}
        />
        <Image
          source={require('../Learn_Component/images/a.jpg')} // Ganti dengan URL gambar profil Kalian
          style={styles.galeri}
        />
        <Image
          source={require('../Learn_Component/images/b.jpg')} // Ganti dengan URL gambar profil Kalian
          style={styles.galeri}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7',
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f7f7',
    borderBottomColor: '#fff2',
    borderBottomWidth: 1,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 10,
    marginTop: 20,
    borderColor: '#f7f7',
  },
  galeri: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#f7f7',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  bio: {
    marginTop: 5,
    fontSize: 16,
    color: '#333',
  },
  infoContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#f7f7',
  },
  infoSection: {
    alignItems: 'center',
  },
  infoTitle: {
    color: 'gray',
    fontSize: 16,
  },
  infoValue: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ProfilScreen;
