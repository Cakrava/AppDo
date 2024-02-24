import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Data() {
  const [dataMahasiswa, setDataMahasiswa] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  //fungsi memanggil api
  const fetchDataMahasiswa = async () => {
    setLoading(true); //mulai loading
    setError(''); //reset error state

    try {
      const response = await fetch('http://192.168.130.82:8000/api/mahasiswa');
      if (!response.ok) {
        throw new Error('Respon jaringan ndk OK doh');
      }

      const json = await response.json();
      setDataMahasiswa(json.data);
    } catch (error) {
      setError('ndak bisa ambiak data : ${error}');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataMahasiswa();
  }, []);

  const renderItemMahasiswa = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.nama_lengkap_2020023}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#FFFF00" />}
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={dataMahasiswa}
        renderItem={renderItemMahasiswa}
        keyExtractor={item => item.nim_2020023}
        extraData={loading || error}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },

  item: {
    backgroundColor: '#83A2FF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
});
