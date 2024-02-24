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
import defaultAvatar from '../img/matkul.jpeg';
import {useNavigation} from '@react-navigation/native';
import ActionButton from './ActionButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailMatakuliah = ({route}) => {
  const {kode_2020023} = route.params;
  const [matakuliah, setMatakuliah] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const goToPageFormUpload = () => {
    navigation.navigate('FormUpload', {
      kode_2020023: kode_2020023,
      foto_2020023: matakuliah.foto_thumb_2020023,
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const fetchData = async () => {
        token = await AsyncStorage.getItem('userToken');
        try {
          const response = await fetch(`${apiUrl}matakuliah/${kode_2020023}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const json = await response.json();
          setMatakuliah(json);
        } catch (error) {
          setError('Tidak dapat memuat data');
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    });
    return unsubscribe;
  }, [navigation, kode_2020023]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <View style={styles.container}>
      {matakuliah && (
        <ScrollView>
          <Card>
            <Avatar
              size="xlarge"
              rounded
              source={
                matakuliah.foto_2020023
                  ? {uri: `${apiImage}${matakuliah.foto_thumb_2020023}`}
                  : defaultAvatar
              }
              containerStyle={styles.avatarContainer}
              onPress={goToPageFormUpload}
            />
            <Card.Title style={styles.title}>
              {matakuliah.kode_2020023}
            </Card.Title>
            <Card.Divider />
            <Text style={styles.detail}>Nama Matakuliah:</Text>
            <Text style={styles.detailData}>{matakuliah.matkul_2020023}</Text>
            <Text style={styles.detail}>SKS:</Text>
            <Text style={styles.detailData}>{matakuliah.sks_2020023}</Text>
          </Card>
        </ScrollView>
      )}
      <ActionButton kode={matakuliah.kode_2020023} />
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
    color: '#9999FF',
    fontWeight: 'bold',
    marginTop: 10,
  },
  detailData: {
    fontSize: 18,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#9999FF',
    color: 'black',
    fontWeight: 'bold',
  },
});
export default DetailMatakuliah;
