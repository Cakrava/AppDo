import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Card, Avatar} from 'react-native-elements';
import {apiUrl, apiImage} from '../config';
import defaultAvatar from '../img/dosen.jpeg';
import ActionButton from './ActionButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailDosen = ({route}) => {
  const {nidn_2020023} = route.params;
  const [dosen, setDosen] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const goToPageFormUpload = () => {
    navigation.navigate('FormUpload', {
      nidn_2020023: nidn_2020023,
      foto_2020023: dosen.foto_thumb_2020023,
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const fetchData = async () => {
        token = await AsyncStorage.getItem('userToken');
        try {
          const response = await fetch(`${apiUrl}dosen/${nidn_2020023}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const json = await response.json();
          setDosen(json);
        } catch (error) {
          setError('Tidak dapat memuat data');
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    });
    return unsubscribe;
  }, [navigation, nidn_2020023]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <View style={styles.container}>
      {dosen && (
        <ScrollView>
          <Card>
            <Avatar
              size="xlarge"
              rounded
              source={
                dosen.foto_2020023
                  ? {uri: `${apiImage}${dosen.foto_thumb_2020023}`}
                  : defaultAvatar
              }
              containerStyle={styles.avatarContainer}
              onPress={goToPageFormUpload}
            />
            <Card.Title style={styles.title}>{dosen.nidn_2020023}</Card.Title>
            <Card.Divider />
            <Text style={styles.detail}>Nama:</Text>
            <Text style={styles.detailData}>{dosen.nama_lengkap_2020023}</Text>
            <Text style={styles.detail}>Jenkel:</Text>
            <Text style={styles.detailData}>
              {dosen.jenkel_2020023 == 'L' ? 'Laki-Laki' : 'Perempuan'}
            </Text>
            <Text style={styles.detail}>Alamat:</Text>
            <Text style={styles.detailData}>{dosen.alamat_2020023}</Text>
            <Text style={styles.detail}>Tempat/Tgl.Lahir:</Text>
            <Text style={styles.detailData}>
              {dosen.tempat_lahir_2020023} / {dosen.tanggal_lahir_2020023}
            </Text>
            <Text style={styles.detail}>Telp/Hp:</Text>
            <Text style={styles.detailData}>{dosen.notelp_2020023}</Text>
          </Card>
        </ScrollView>
      )}
      <ActionButton nidn={dosen.nidn_2020023} />
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
    color: '#00FFFF',
    fontWeight: 'bold',
    marginTop: 10,
  },
  detailData: {
    fontSize: 18,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#00FFFF',
    color: 'black',
    fontWeight: 'bold',
  },
});
export default DetailDosen;
