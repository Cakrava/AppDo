import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

const DetailUts = ({route}) => {
  const {kode_barcode} = route.params;
  const [product_321, setUts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://novinaldi.jayanusa.ac.id/api/product_321/${kode_barcode}`,
        );
        const json = await response.json();
        setUts(json);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [kode_barcode]);

  if (loading || !product_321) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Detail Uts</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detail}>Kode: {product_321.kode_barcode}</Text>
        <Text style={styles.detail}>
          Nama Barang: {product_321.nama_barang}
        </Text>
        <Text style={styles.detail}>Harga Jual: {product_321.harga_jual}</Text>
        <Text style={styles.detail}>Stok: {product_321.persediaan_stok}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#83A',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  detailsContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
    color: '#fff',
  },
  loader: {
    marginTop: 50,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default DetailUts;
