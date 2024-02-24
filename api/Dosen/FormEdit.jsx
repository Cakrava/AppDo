import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Alert,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {apiUrl} from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FormEdit({route}) {
  const {nidn} = route.params;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [namaLengkap, setNamaLengkap] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('L,P');
  const [tempatLahir, setTempatLahir] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState(new Date());
  const [alamat, setAlamat] = useState('');
  const [noTelp, setNoTelp] = useState('');
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const navigation = useNavigation();
  const [validationErrors, setValidationErrors] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || tanggalLahir;
    setDatePickerVisible(Platform.OS === 'ios');
    setTanggalLahir(currentDate);
  };

  const formatDate = date => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      token = await AsyncStorage.getItem('userToken');
      try {
        const response = await fetch(`${apiUrl}dosen/${nidn}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const json = await response.json();
        setNamaLengkap(json.nama_lengkap_2020023);
        setJenisKelamin(json.jenkel_2020023);
        setAlamat(json.alamat_2020023);
        setTempatLahir(json.tempat_lahir_2020023);
        setTanggalLahir(new Date(json.tanggal_lahir_2020023));
        setNoTelp(json.notelp_2020023);
      } catch (error) {
        setError('Tidak dapat memuat data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [nidn]);
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
      nama_lengkap_2020023: namaLengkap,
      jenkel_2020023: jenisKelamin,
      alamat_2020023: alamat,
      tempat_lahir_2020023: tempatLahir,
      tanggal_lahir_2020023: tanggalLahir.toISOString().split('T')[0],
      notelp_2020023: noTelp,
      _method: 'PUT',
    };

    fetch(`${apiUrl}dosen/${nidn}`, {
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
        Alert.alert('Success', 'Data dosen berhasil di Update', [
          {
            text: 'ok',
            onPress: () =>
              navigation.navigate('DetailDosen', {nidn_2020023: nidn}),
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
        placeholder="NIDN"
        value={nidn}
        disabled={true}
        placeholderTextColor="#ccc"
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        leftIcon={<Icon name="user-circle" size={24} color="#00FFFF" />}
        errorMessage={validationErrors.nidn_2020023}
      />

      <Input
        placeholder="Nama Lengkap"
        value={namaLengkap}
        onChangeText={setNamaLengkap}
        placeholderTextColor="#ccc"
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        leftIcon={<Icon name="user" size={24} color="#00FFFF" />}
        errorMessage={validationErrors.nama_lengkap_2020023}
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={jenisKelamin}
          onValueChange={(itemValue, itemIndex) => setJenisKelamin(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Pilih Jenis Kelamin" value="" />
          <Picker.Item label="Laki-laki" value="L" />
          <Picker.Item label="Perempuan" value="P" />
        </Picker>
      </View>

      <Input
        placeholder="Alamat"
        value={alamat}
        onChangeText={setAlamat}
        leftIcon={<Icon name="map-marker-alt" size={24} color="#00FFFF" />}
        placeholderTextColor="#ccc"
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        errorMessage={validationErrors.alamat_2020023}
      />

      <Input
        placeholder="Tempat Lahir"
        value={tempatLahir}
        onChangeText={setTempatLahir}
        leftIcon={<Icon name="home" size={24} color="#00FFFF" />}
        placeholderTextColor="#ccc"
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        errorMessage={validationErrors.tempat_lahir_2020023}
      />

      <View style={styles.dateContainer}>
        <Button
          title=" Date"
          onPress={() => setDatePickerVisible(true)}
          icon={<Icon name="calendar" size={15} color="white" />}
          buttonStyle={styles.dateButton}
        />
        {datePickerVisible && (
          <DateTimePicker
            value={tanggalLahir}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
        <Text style={styles.dateDisplay}>
          Tanggal Lahir: {formatDate(tanggalLahir)}
        </Text>
      </View>

      <Input
        placeholder="Nomor Telpon"
        value={noTelp}
        onChangeText={setNoTelp}
        leftIcon={<Icon name="phone" size={24} color="#00FFFF" />}
        placeholderTextColor="#ccc"
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        errorMessage={validationErrors.notelp_2020023}
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
    borderColor: '#00FFFF',
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
    borderColor: '#00FFFF',
    backgroundColor: '#00FFFF',
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#00FFFF',
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
    backgroundColor: '#00FFFF',
    borderRadius: 10,
  },
  dateDisplay: {
    fontSize: 16,
    marginTop: 10,
    color: 'black',
  },
});
