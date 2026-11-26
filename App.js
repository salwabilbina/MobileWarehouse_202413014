import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';

// ====== DATA IDENTITAS ======
const NAMA = 'Salwa Bilbina';
const NIM = '202413014';
const PRODI = 'Sistem Informasi';
const PERUSAHAAN = 'Management System';
const BARANG_AKTIF = 280;
// ============================

export default function App() {
  const handlePress = () => {
    Alert.alert(
      'Mobile Warehouse',
      'Selamat datang, ' + NAMA + '!\nNIM: ' + NIM
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📦</Text>

      <Text style={styles.title}>
        Mobile Warehouse
      </Text>

      <Text style={styles.company}>
        {PERUSAHAAN}
      </Text>

      <View style={styles.statBox}>
        <Text style={styles.statNumber}>{BARANG_AKTIF}</Text>
        <Text style={styles.statLabel}>Barang Aktif</Text>
      </View>

      <View style={styles.identityBox}>
        <Text style={styles.identityText}>Nama : {NAMA}</Text>
        <Text style={styles.identityText}>NIM : {NIM}</Text>
        <Text style={styles.identityText}>Prodi : {PRODI}</Text>
        <Text style={styles.identityText}>Perusahaan : {PERUSAHAAN}</Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>
          Mulai Aplikasi
        </Text>
      </Pressable>

      <Text style={styles.footer}>
        Modul 1 — Project Initialization
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf6ec',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  icon: {
    fontSize: 64,
    marginBottom: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#5c4632',
    textAlign: 'center',
  },

  company: {
    fontSize: 17,
    fontWeight: '600',
    color: '#9c6b43',
    marginTop: 4,
  },

  statBox: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 16,
    backgroundColor: '#f3e3cf',
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 32,
    fontWeight: '800',
    color: '#9c6b43',
  },

  statLabel: {
    fontSize: 13,
    color: '#5c4632',
  },

  identityBox: {
    width: '100%',
    marginTop: 20,
    marginBottom: 24,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#fffaf2',
    borderWidth: 1,
    borderColor: '#ead9c3',
  },

  identityText: {
    fontSize: 14,
    color: '#6b5440',
    marginBottom: 4,
  },

  button: {
    width: '100%',
    height: 52,
    borderRadius: 16,
    backgroundColor: '#9c6b43',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fffaf2',
    fontSize: 15,
    fontWeight: '800',
  },

  footer: {
    marginTop: 24,
    fontSize: 12,
    color: '#a8957f',
  },
});