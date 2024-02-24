import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function DataUts() {
  const [dataUts, setDataUts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const fetchDataUts = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        'https://novinaldi.jayanusa.ac.id/api/product_321',
      ); //masukkan link sesuai denan url
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setDataUts(json.data);
    } catch (error) {
      setError(`Tidak bisa mengambil data :${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataUts();
  }, []);

  const renderItemUts = ({item}) => {
    const showDetailData = () => {
      navigation.navigate('DetailUts', {kode_barcode: item.kode_barcode});
    };

    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.kode_barcode}</Text>
        <Text style={styles.title}>{item.nama_barang}</Text>
        <TouchableOpacity style={styles.detailButton} onPress={showDetailData}>
          <Icon name="arrow-redo" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={dataUts}
        renderItem={renderItemUts}
        keyExtractor={item => item.kode_barcode}
        extraData={loading || error}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#83A',
  },
  searchInput: {
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 25,
    fontSize: 16,
    marginBottom: 10,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
  },
  titleNim: {
    fontSize: 22,
    color: '#333333',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
    color: '#555555',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  detailButton: {
    position: 'absolute',
    right: 10,
    top: 20,
    padding: 10,
  },
  title: {
    fontSize: 18,
    color: '#fff',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
});
