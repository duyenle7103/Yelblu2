/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { Image, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const Login = (props: {
  identity: string;
  password: string;
  remember: boolean;
  setIdentity: (text: string) => void;
  setPassword: (text: string) => void;
  setRemember: (val: boolean) => void;
  onLogin: () => void;
  onNavigateToRegister: () => void;
  onNavigateToForgotPassword: () => void;
}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/icon.png')} style={styles.logo} />
      <Text style={styles.title}>YELBLU APP</Text>
      <Text style={styles.subtitle}>Every meal becomes so delightful!</Text>

      <Text style={styles.label}>Login</Text>
      <TextInput style={styles.input} placeholder="Username or Email" value={props.identity} onChangeText={props.setIdentity} />
      <TextInput style={styles.input} placeholder="Password" value={props.password} secureTextEntry onChangeText={props.setPassword} />

      <View style={styles.row}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Switch value={props.remember} onValueChange={props.setRemember} />
          <Text style={{ marginLeft: 8 }}>Remember me</Text>
        </View>
        <TouchableOpacity onPress={props.onNavigateToForgotPassword}>
          <Text style={styles.link}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Not have an account? <Text style={styles.link} onPress={props.onNavigateToRegister}>Signup</Text>
      </Text>
    </View>
  );
}

// Style shared for all 3 screens
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#f89f59' },
  logo: { width: 80, height: 80, marginTop: 60, marginBottom: 10 },
  title: { fontSize: 20, fontWeight: 'bold' },
  subtitle: { fontSize: 14, marginBottom: 20 },
  label: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: { width: '100%', backgroundColor: 'white', padding: 12, borderRadius: 10, marginVertical: 6 },
  button: { backgroundColor: '#0047AB', padding: 15, borderRadius: 10, marginTop: 15, width: '100%', alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' },
  footerText: { marginTop: 20 },
  link: { color: 'blue' },
  row: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 10 },
});
