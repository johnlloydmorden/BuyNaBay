import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity, Alert } from 'react-native';
import { TextInput, Button, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase
const SUPABASE_URL = 'https://ktezclohitsiegzhhhgo.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0ZXpjbG9oaXRzaWVnemhoaGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwMjkxNDIsImV4cCI6MjA0ODYwNTE0Mn0.iAMC6qmEzBO-ybtLj9lQLxkrWMddippN6vsGYfmMAjQ';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#FFF',
    primary: '#FFF',
    background: '#1b1b41',
    surface: '#1b1b41',
    placeholder: '#B0B0B0',
  },
  fonts: {
    regular: { fontFamily: 'Poppins_400Regular' },
    medium: { fontFamily: 'Poppins_500Medium' },
    light: { fontFamily: 'Poppins_300Light' },
    thin: { fontFamily: 'Poppins_100Thin' },
  },
};

const Register = () => {
  const router = useRouter();

  // State variables for user inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [schoolId, setSchoolId] = useState('');

  // Validate inputs
  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password || !phoneNumber || !schoolId) {
      Alert.alert('Validation Error', 'All fields are required.');
      return false;
    }
    if (!emailRegex.test(email.trim())) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Validation Error', 'Password must be at least 6 characters.');
      return false;
    }
    return true;
  };

  // Handle user registration
  const handleSignUp = async () => {
    const trimmedEmail = email.trim();
    if (!validateInputs()) return;

    try {
      // Create user in Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: trimmedEmail,
        password,
      });

      if (authError) {
        throw authError;
      }

      // Insert additional data into the users table
      const { error: insertError } = await supabase
        .from('users')
        .insert([
          {
            email: trimmedEmail,
            password, // Store hashed password if applicable
            phone_number: phoneNumber.trim(),
            school_id: schoolId.trim(),
          },
        ]);

      if (insertError) {
        throw insertError;
      }

      Alert.alert('Success', 'Account created successfully!');
      router.push('/logIn'); // Navigate to login page
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Icon name="chevron-left" size={30} color="#FDAD00" />
        </TouchableOpacity>

        <View style={styles.headerContent}>
          <Image source={require('../assets/BuyNaBay.png')} style={styles.headerLogo} resizeMode="contain" />
          <Text style={styles.headerTitle}>BuyNaBay</Text>
        </View>
      </View>

      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Create an account to get started</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          label="Email"
          mode="flat"
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor="#FFF"
          value={email}
          onChangeText={setEmail}
          theme={{ colors: { placeholder: '#FFF', primary: '#FDAD00' } }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="Password"
          secureTextEntry
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#FFF"
          value={password}
          onChangeText={setPassword}
          theme={{ colors: { placeholder: '#FFF', primary: '#FDAD00' } }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="Phone Number"
          style={styles.input}
          placeholder="Enter Phone Number"
          placeholderTextColor="#FFF"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          theme={{ colors: { placeholder: '#FFF', primary: '#FDAD00' } }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="School ID"
          style={styles.input}
          placeholder="Enter School ID Number"
          placeholderTextColor="#FFF"
          value={schoolId}
          onChangeText={setSchoolId}
          theme={{ colors: { placeholder: '#FFF', primary: '#FDAD00' } }}
        />
      </View>

      {/* Sign Up Button */}
      <Button mode="contained" onPress={handleSignUp} style={styles.signUpButton}>
        Create an Account
      </Button>

      {/* Sign In Text */}
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>
          Already have an account?{' '}
          <Text style={styles.signInLink} onPress={() => router.push('/logIn')}>
            Sign In
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // General container styles
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#1b1b41', 
    paddingHorizontal: 20,
  },

  // Header styles
  header: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    margin: 20,
  },
  backButton: { 
    marginRight: 10 
  },
  headerContent: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-end', 
    flex: 1 
  },
  headerLogo: { 
    width: 40, 
    height: 40 
  },
  headerTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#FFF', 
    marginLeft: 10 
  },

  // Title and subtitle styles
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#FFF', 
    textAlign: 'center', 
    marginBottom: 10 
  },
  subtitle: { 
    fontSize: 14, 
    color: '#B0B0B0', 
    textAlign: 'center', 
    marginBottom: 30 
  },

  // Input styles
  inputContainer: { 
    width: '100%', 
    marginBottom: 15 
  },
  input: { 
    backgroundColor: '#1b1b41', 
    color: '#FFF' 
  },

  // Button styles
  signUpButton: { 
    width: '100%', 
    paddingVertical: 12, 
    backgroundColor: '#FDAD00', 
    borderRadius: 25, 
    marginTop: 20 
  },

  // Sign-in styles
  signInContainer: { 
    marginTop: 15, 
    alignItems: 'center' 
  },
  signInText: { 
    color: '#FFF', 
    fontSize: 14 
  },
  signInLink: { 
    fontWeight: 'bold', 
    color: '#FDAD00' 
  },
});

export default Register;
