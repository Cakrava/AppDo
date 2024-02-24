import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {apiUrl} from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DataMatakuliah() {
  const [dataMatakuliah, setDataMatakuliah] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [page, setPage] = useState(1);
  const [lastpage, setlastPage] = useState(0);

  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  const fetchDataMatakuliah = async (pageNumber = 1, searchQuery = search) => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `${apiUrl}matakuliah?page=${pageNumber}&search=${searchQuery}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (!response.ok) {
        throw new Error('Respon jaringan ndk OK doh');
      }

      const json = await response.json();
      setPage(pageNumber);
      setlastPage(json.meta.last_page);

      setDataMatakuliah(
        pageNumber === 1 ? json.data : [...dataMatakuliah, ...json.data],
      );
    } catch (error) {
      setError(`ndak bisa ambiak data: ${error}`);
    } finally {
      setLoading(false);
      if (pageNumber === 1) setRefreshing(false);
    }
  };

  const handleSearch = () => {
    setIsSearching(true);
    fetchDataMatakuliah(1, search);
  };

  const clearSearch = () => {
    setIsSearching(false);
    fetchDataMatakuliah(1, '');
    setSearch('');
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchDataMatakuliah(1, search).finally(() => setRefreshing(false));
  };

  useEffect(() => {
    checkToken();
    const unsubscribe = navigation.addListener('focus', () => {
      if (route.params?.dataAdded) {
        checkToken();
      }
    });
    return unsubscribe;
  }, [navigation, route.params?.dataAdded]);

  const checkToken = async () => {
    token = await AsyncStorage.getItem('userToken');
    if (!token) {
      navigation.navigate('login');
    } else {
      fetchDataMatakuliah();
    }
  };

  const renderItemMatakuliah = ({item}) => {
    const showDetailData = () => {
      navigation.navigate('DetailMatakuliah', {
        kode_2020023: item.kode_2020023,
      });
    };

    return (
      <TouchableOpacity style={styles.item} onPress={showDetailData}>
        <Text style={styles.titleKode}>{item.kode_2020023}</Text>
        <Text style={styles.text}>{item.matkul_2020023}</Text>
        <TouchableOpacity style={styles.detailButton} onPress={showDetailData}>
          <Icon name="arrow-redo" size={24} color="#000" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const renderFooter = () => (
    <View style={styles.footer}>
      {loading && <ActivityIndicator size="large" color="#FFFF00" />}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Cari berdasarkan Kode atau Matakuliah"
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={handleSearch}
      />
      {isSearching && (
        <TouchableOpacity onPress={() => clearSearch()} style={styles.button}>
          <Text style={styles.button.Text}>Clear Search</Text>
        </TouchableOpacity>
      )}
      {loading && page === 1 && (
        <ActivityIndicator size="large" color="#0000FF" />
      )}
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={dataMatakuliah}
        renderItem={renderItemMatakuliah}
        keyExtractor={item => item.kode_2020023}
        extraData={loading || error}
        onEndReached={() => {
          if (!loading && page < lastpage) {
            fetchDataMatakuliah(page + 1);
          }
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() =>
          !loading || page === 1 ? null : (
            <ActivityIndicator size="large" color="#860A35" />
          )
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{flexGrow: 1}}
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          navigation.navigate('FormTambah');
        }}>
        <Icon name="add" size={30} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#83A2FF',
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
    backgroundColor: '#CCCCFF',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
  },
  titleKode: {
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
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#007BFF',
    borderRadius: 30,
    elevation: 8,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
  },
});
