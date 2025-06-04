import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function RegisterScreen({ navigation }: any) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/icon.png')} style={styles.logo} />
      <Text style={styles.title}>YELBLU APP</Text>
      <Text style={styles.subtitle}>Mỗi bữa ăn trở nên thật nhẹ nhàng!</Text>

      <Text style={styles.label}>Đăng ký</Text>
      <Text style={styles.note}>Điền các thông tin để đăng ký tài khoản</Text>

      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Đăng ký</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Bạn có tài khoản rồi? <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Đăng nhập</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#f89f59' },
  logo: { width: 80, height: 80, marginTop: 60, marginBottom: 10 },
  title: { fontSize: 20, fontWeight: 'bold' },
  subtitle: { fontSize: 14, marginBottom: 20 },
  label: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  note: { marginBottom: 10 },
  input: { width: '100%', backgroundColor: 'white', padding: 12, borderRadius: 10, marginVertical: 6 },
  button: { backgroundColor: '#0047AB', padding: 15, borderRadius: 10, marginTop: 15, width: '100%', alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' },
  footerText: { marginTop: 20 },
  link: { color: 'blue' },
});
