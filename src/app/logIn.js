import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

const LogInPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (username && password) {
      router.push({
        pathname: 'dashboard',
        params: { username }, // Pass username as a query param
      });
    } else {
      alert('Please enter your username and password');
    }
  };

  // Load the Poppins font
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null; // Optionally show a loading screen while fonts are loading
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/BuyNaBay.png')} style={styles.logo} />
        <Text style={styles.logoText}>BuyNaBay</Text>
      </View>

      {/* Sign In text below the header */}
      <Text style={styles.signInText}>Sign In</Text>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#1B1B41" style={styles.icon} />
        <TextInput
          label="Username"
          mode="outlined"
          style={styles.input}
          placeholderTextColor="#6b8f71"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="key" size={20} color="#1B1B41" style={styles.icon} />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#6b8f71"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Text
        style={styles.forgotPasswordText}
        onPress={() => router.push('recover')}
      >
        Forgot Password?
      </Text>

      <Button mode="contained" onPress={handleSignIn} style={styles.signInButton}>
        Login
      </Button>

      <Text style={styles.signUpText}>
        DON’T HAVE AN ACCOUNT?{' '}
        <Text style={styles.signUpLink} onPress={() => router.push('register')}>
          Sign up
        </Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1b1b41', // Updated background color
  },
  header: {
    flexDirection: 'row', // Row layout for logo and text
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 35, // Adjusted size for better alignment
    height: 35,
    resizeMode: 'contain',
    marginRight: 10, // Space between logo and text
  },
  logoText: {
    fontSize: 20,
    color: '#FFF', // White color for logo text
    fontFamily: 'Poppins_600SemiBold', // Apply Poppins font
  },
  signInText: {
    fontSize: 50,
    color: '#FFF',
    fontFamily: 'Poppins_400Regular', // Apply Poppins font
    marginBottom: 20,
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
    fontFamily: 'Poppins_400Regular', // Apply Poppins font to input fields
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    color: '#ffffff', // Adjusted to be visible on the dark background
    marginBottom: 20,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins_400Regular', // Apply Poppins font
  },
  signInButton: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#FDAD00',
  },
  signUpText: {
    marginTop: 20,
    fontSize: 14,
    color: '#ffffff', // Adjusted to be visible on the dark background
    fontFamily: 'Poppins_400Regular', // Apply Poppins font
  },
  signUpLink: {
    fontWeight: 'bold',
  },
});

export default LogInPage;
