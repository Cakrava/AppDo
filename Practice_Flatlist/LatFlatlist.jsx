import {FlatList, StyleSheet, Text, View, RefreshControl} from 'react-native';
import React, {useState} from 'react';
import dataMhs from './DataMhs.json'; //Import data json yang telah dibuat

export default function LatFlatlist() {
  const [refreshing, setRefreshing] = useState(false); // State untuk Refresh control
  const [data, setData] = useState(dataMhs); // State untuk data

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Simulasi fetch data baru
    setTimeout(() => {
      const newData = [...data, {nim: '555', nama: 'valdo'}];
      setData(newData);
      setRefreshing(false);
    }, 2000);
  }, [data]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.nim}</Text>
            <Text style={styles.titleNama}>{item.nama}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#190482',
    padding: 10,
    paddingLeft: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderTopStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFDD',
  },
  titleNama: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C2D9FF',
  },
});
