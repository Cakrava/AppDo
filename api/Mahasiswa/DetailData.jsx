import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Card, Avatar} from 'react-native-elements';
import {apiUrl} from '../config';
import defaultAvatar from '../img/empty.png';
import ActionButton from './ActionButton';
import {useNavigation} from '@react-navigation/native';
import {apiImage} from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailMahasiswa = ({route}) => {
  const {nim_2020023} = route.params;
  const [mahasiswa, setMahasiswa] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const goToPageFormUpload = () => {
    navigation.navigate('FormUpload', {
      nim_2020023: nim_2020023,
      foto_2020023: mahasiswa.foto_thumb_2020023,
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const fetchData = async () => {
        token = await AsyncStorage.getItem('userToken');
        try {
          const response = await fetch(`${apiUrl}mahasiswa/${nim_2020023}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const json = await response.json();
          setMahasiswa(json);
        } catch (error) {
          setError('Tidak dapat memuat data');
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    });
    return unsubscribe;
  }, [navigation, nim_2020023]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      {mahasiswa && (
        <ScrollView>
          <Card>
            <Avatar
              size="xlarge"
              rounded
              source={
                mahasiswa.foto_2020023
                  ? {uri: `${apiImage}${mahasiswa.foto_thumb_2020023}`}
                  : defaultAvatar
              }
              containerStyle={styles.avatarContainer}
              onPress={goToPageFormUpload}
            />
            <Card.Title style={styles.title}>
              {mahasiswa.nim_2020023}
            </Card.Title>
            <Card.Divider />
            <Text style={styles.detail}>Nama:</Text>
            <Text style={styles.detailData}>
              {mahasiswa.nama_lengkap_2020023}
            </Text>
            <Text style={styles.detail}>Jenkel:</Text>
            <Text style={styles.detailData}>
              {mahasiswa.jenis_kelamin_2020023 == 'L'
                ? 'Laki-Laki'
                : 'Perempuan'}
            </Text>
            <Text style={styles.detail}>Tanggal/Tgl.Lahir:</Text>
            <Text style={styles.detailData}>
              {mahasiswa.tmp_lahir_2020023} / {mahasiswa.tgl_lahir_2020023}
            </Text>
            <Text style={styles.detail}>Alamat:</Text>
            <Text style={styles.detailData}>{mahasiswa.alamat_2020023}</Text>
            <Text style={styles.detail}>Telp/Hp:</Text>
            <Text style={styles.detailData}>{mahasiswa.notelp_2020023}</Text>
          </Card>
        </ScrollView>
      )}
      <ActionButton nim={mahasiswa.nim_2020023} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  avatarContainer: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  detail: {
    fontSize: 14,
    marginBottom: 5,
    color: '#FF00ff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  detailData: {
    fontSize: 18,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#FF00ff',
    color: 'black',
    fontWeight: 'bold',
  },
});
export default DetailMahasiswa;
