import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Container */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/BuyNaBay.png')} style={styles.logo} resizeMode="cover" />
      </View>

      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Create an account so you can manage your personal finances</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          label="Username"
          mode="outlined"
          style={styles.input}
          placeholder="Enter Username"
          placeholderTextColor="#6b8f71"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#6b8f71"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="Phone Number"
          mode="outlined"
          style={styles.input}
          placeholder="Enter Phone Number"
          placeholderTextColor="#6b8f71"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="School ID"
          mode="outlined"
          style={styles.input}
          placeholder="Enter School ID Number"
          placeholderTextColor="#6b8f71"
        />
      </View>

      {/* Sign Up Button */}
      <Button mode="contained" onPress={() => console.log('Registering...')} style={styles.signUpButton}>
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

      {/* Social Media Sign Up */}
      <View style={styles.socialSignUp}>
        <Text style={styles.socialText}>Or continue with social account</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity style={styles.socialIcon}>
            <Icon name="apple" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Icon name="google" size={24} color="#000" />
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#1b1b41', // Dark background color to match image style
  },
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFF',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#1b1b41', // Dark background for inputs
    color: '#FFF',
    paddingLeft: 40,
    fontFamily: 'Poppins_400Regular',
  },
  signUpButton: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#FDAD00', // Accent color from the image
    borderRadius: 25,
  },
  signInContainer: {
    marginTop: 15,
  },
  signInText: {
    color: '#FFF',
    fontSize: 14,
  },
  signInLink: {
    fontWeight: 'bold',
    color: '#FDAD00', // Link color
  },
  socialSignUp: {
    marginTop: 20,
    alignItems: 'center',
  },
  socialText: {
    color: '#FFF',
    fontSize: 14,
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
  socialIcon: {
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Register;
