// app/register.js
import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.circleContainer}>
          <Image source={require('../assets/AppLogo.png')} style={styles.logo} resizeMode="cover" />
        </View>
      </View>

      <Text style={styles.title}>Create an Account</Text>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#3e7139" style={styles.icon} />
        <TextInput
          label="Full Name"
          mode="outlined"
          style={styles.input}
          placeholderTextColor="#6b8f71"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#3e7139" style={styles.icon} />
        <TextInput
          label="Email"
          mode="outlined"
          style={styles.input}
          placeholderTextColor="#6b8f71"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="key" size={20} color="#3e7139" style={styles.icon} />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#6b8f71"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#3e7139" style={styles.icon} />
        <TextInput
          label="Confirm Password"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#6b8f71"
        />
      </View>

      <Button mode="contained" onPress={() => console.log('Registering...')} style={styles.signUpButton}>
        SIGN UP
      </Button>

      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>
          ALREADY HAVE AN ACCOUNT?{' '}
          <Text style={styles.signInLink} onPress={() => router.back()}>
            Sign In
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3e7139',
    marginBottom: 15,
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: 20,
  },
  icon: {
    position: 'absolute',
    left: 22,
    top: 20,
    zIndex: 1,
  },
  input: {
    backgroundColor: '#ffffff',
    color: '#3e7139',
    paddingLeft: 40,
  },
  signUpButton: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#6b8f71',
  },
  signInContainer: {
    marginTop: 20,
  },
  signInText: {
    fontSize: 14,
    color: '#3e7139',
  },
  signInLink: {
    fontWeight: 'bold',
  },
});

export default Register;
