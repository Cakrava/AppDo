import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Alert,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {apiUrl} from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FormEdit({route}) {
  const {kode} = route.params;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [matkul, setMatkul] = useState('');
  const [sks, setSks] = useState('');

  const navigation = useNavigation();
  const [validationErrors, setValidationErrors] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      token = await AsyncStorage.getItem('userToken');
      try {
        const response = await fetch(`${apiUrl}matakuliah/${kode}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const json = await response.json();
        setMatkul(json.matkul_2020023);
        setSks(json.sks_2020023);
      } catch (error) {
        setError('Tidak dapat memuat data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [kode]);
  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  const submitForm = async () => {
    token = await AsyncStorage.getItem('userToken');
    setIsSaving(true);
    setValidationErrors({});
    const formData = {
      matkul_2020023: matkul,
      sks_2020023: sks,
      _method: 'PUT',
    };

    fetch(`${apiUrl}matakuliah/${kode}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then(async response => {
        const data = await response.json();
        if (!response.ok) {
          setIsSaving(false);
          //jika ada kesalahan validasi,akan masuk ke sini
          if (response.status === 422) {
            //Handle validation errors
            let errors = {};
            Object.keys(data.errors).forEach(key => {
              errors[key] = data.errors[key][0]; //Ambil hanya pesan pertama untuk setiap field
            });
            setValidationErrors(errors);
          } else {
            //JIKA ada jenis error lain,throw error untuk menangkap di catch block
            throw new Error(
              data.message || 'Terjadi kesalahan saat meng-Update data.',
            );
          }
          //jangan lupa untuk return disini untuk menghentikan eksekusi lebih lanjut
          return;
        }
        setIsSaving(false);
        //jika tidak ada error,maka tampilkan pesan sukse
        Alert.alert('Success', 'Data matakuliah berhasil di Update', [
          {
            text: 'ok',
            onPress: () =>
              navigation.navigate('DetailMatakuliah', {kode_2020023: kode}),
          },
        ]);
      })
      .catch(error => {
        //handle failure
        setIsSaving(false);
        Alert.alert('Error', error.toString());
      });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Input
        placeholder="Kode"
        value={kode}
        disabled={true}
        placeholderTextColor="#ccc"
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        leftIcon={<Icon name="user-circle" size={24} color="#9999FF" />}
        errorMessage={validationErrors.kode_2020023}
      />

      <Input
        placeholder="Nama Matakuliah"
        value={matkul}
        onChangeText={setMatkul}
        leftIcon={<Icon name="book" size={24} color="#9999FF" />}
        placeholderTextColor="#ccc"
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        errorMessage={validationErrors.matkul_2020023}
      />

      <Input
        placeholder="Jumlah SKS"
        value={sks}
        onChangeText={setSks}
        leftIcon={<Icon name="bookmark" size={24} color="#9999FF" />}
        placeholderTextColor="#ccc"
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        errorMessage={validationErrors.sks_2020023}
        keyboardType="number-pad"
      />

      <Button
        title="Simpan Data"
        onPress={submitForm}
        buttonStyle={styles.submitButton}
        titleStyle={styles.submitTitle}
        loading={isSaving}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 30,
  },
  container: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  inputContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#9999FF',
    backgroundColor: '#fff',
    paddingLeft: 10,
  },
  inputText: {
    color: '#000',
  },
  pickerContainer: {
    marginBottom: 20,
    borderWidth: 1,
    marginHorizontal: 10,
    borderColor: '#9999FF',
    backgroundColor: '#9999FF',
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#9999FF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 10,
  },
  submitTitle: {
    color: '#fff', //warna text tombol
  },
  dateContainer: {
    marginBottom: 20,
    marginHorizontal: 10,
  },
  dateButton: {
    backgroundColor: '# ',
    borderRadius: 10,
  },
  dateDisplay: {
    fontSize: 16,
    marginTop: 10,
    color: 'black',
  },
});
