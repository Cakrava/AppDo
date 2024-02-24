import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./img/a.jpeg')}
          style={styles.profilePicture}
        />
        <Text style={styles.username}>Revaldo Oviaza</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.aboutText}>
          Perkenalkan nama saya Revaldo oviaza. Saya berumur 27 tahun.
          Saya berasal dari kota Pariaman. Sekarang saya tinggal di Rawang, Mata Aia.
          Saya berkuliah di STMIK-AMIK Jayanusa. Saya mengambil Prodi Sistem Komputer. 
        </Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FF99FF',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  body: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  aboutText: {
    fontSize: 16,
    marginBottom: 16,
    color: 'black',
  },
  editProfileButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  editProfileButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;