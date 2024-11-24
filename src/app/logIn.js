import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';  // Import useRouter
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#FFF', // Set the global text color to white
    primary: '#FFF', // Primary button and accent color
    background: '#1b1b41', // Background color
    surface: '#1b1b41', // Card/Surface background color
    placeholder: '#B0B0B0', // Placeholder color
  },
  fonts: {
    regular: { fontFamily: 'Poppins_400Regular' },
    medium: { fontFamily: 'Poppins_500Medium' },
    light: { fontFamily: 'Poppins_300Light' },
    thin: { fontFamily: 'Poppins_100Thin' },
  },
};


const LogInPage = () => {
  const router = useRouter(); // Initialize router
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    if (username && password) {
      router.push({
        pathname: 'dashboard',
        params: { username },
      });
    } else {
      alert('Please enter your username and password');
    }
  };

  const handleBackArrowPress = () => {
    router.push('/intro'); // Navigate to the intro page when the back arrow is clicked
  };

  const handleForgotPasswordPress = () => {
    router.push('/recover'); // Navigate to the recover page when the forgot password container is clicked
  };

  const handleSignUpPress = () => {
    router.push('/register'); // Navigate to the register page when the signup text is clicked
  };

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackArrowPress} style={styles.backArrow}>
          <Icon name="chevron-left" size={20} color="#FDAD00" />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/BuyNaBay.png')} style={styles.logo} />
          <Text style={styles.logoText}>BuyNaBay</Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.signInText}>Sign In</Text>
        <Text style={styles.welcomeText}>
          Welcome to BuyNaBay! You can continue to manage your finances.
        </Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            label="Email Address"
            mode="flat"
            style={styles.input}
            placeholderTextColor="#FFF" // Set placeholder color to white
            underlineColor="#FDAD00"
            selectionColor="#FDAD00"
            value={username}
            onChangeText={setUsername}
            textColor='#FFF'
            theme={{
              colors: {
                placeholder: '#FFF', // Set placeholder color to white
                primary: '#FDAD00',
              },
            }}
          />

          <View style={styles.verifyIcon}>
            <Icon name="check-circle" size={20} color="blue" />
          </View>
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            label="Password"
            mode="flat"
            secureTextEntry={!showPassword}
            style={styles.input}
            placeholderTextColor="#FFF" // Set placeholder color to white
            underlineColor="#FDAD00"
            selectionColor="#FDAD00"
            value={password}
            onChangeText={setPassword}
            textColor='#FFF'
            theme={{
              colors: {
                text: '#FFF', // Set text color to white
                placeholder: '#FFF', // Set placeholder color to white
                primary: '#FDAD00',
              },
            }}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity onPress={handleForgotPasswordPress} style={styles.forgotPasswordContainer}>
          <View style={styles.forgotPasswordWrapper}>
            <Icon name="lock" size={16} color="#FFF" />
            <Text style={styles.forgotPasswordText}>Forgot your password?</Text>

            {/* Arrows with different opacity */}
            <View style={styles.arrowContainer}>
              <Icon name="chevron-right" size={16} color="rgba(255, 255, 255, 0.2)" />
              <Icon name="chevron-right" size={16} color="rgba(255, 255, 255, 0.5)" />
              <Icon name="chevron-right" size={16} color="rgba(255, 255, 255, 0.8)" />
            </View>
          </View>
        </TouchableOpacity>

        {/* Sign In Button */}
        <Button
          mode="contained"
          onPress={handleSignIn}
          style={styles.signInButton}
          labelStyle={styles.signInButtonText}
        >
          Sign In
        </Button>

        {/* Signup Prompt */}
        <TouchableOpacity onPress={handleSignUpPress} style={styles.signupTextContainer}>
          <Text style={styles.signupText}>Doesn't have an account? <Text style={styles.signupLink}>Signup</Text></Text>
        </TouchableOpacity>
      </View>

      {/* Quick Login */}
      <View style={styles.quickLoginContainer}>
        <Text style={styles.quickLoginText}>
          Enable <Text style={{ fontWeight: 'bold' }}>Face Lock</Text> or{' '}
          <Text style={{ fontWeight: 'bold' }}>Touch Lock</Text>
        </Text>
        <Text style={styles.quickLoginSubText}>for quick sign in</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b41',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backArrow: {
    alignSelf: 'flex-start',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  logoText: {
    fontSize: 20,
    color: '#FFF',
    fontFamily: 'Poppins_600SemiBold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  signInText: {
    fontSize: 30,
    color: '#FFF',
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 14,
    color: '#FFF',
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1b1b41',
    fontFamily: 'Poppins_400Regular',
    color: '#FFF', // Set text color to white
  },
  verifyIcon: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  forgotPasswordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '100%',
    padding: 15,
    borderRadius: 10,
  },
  forgotPasswordText: {
    color: '#FFF',
    fontFamily: 'Poppins_400Regular',
    marginHorizontal: 10,
    flex: 1,
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  signupTextContainer: {
    marginTop: 1,
    alignItems: 'center',
    
  },
  signupText: {
    color: '#FFF',
    fontFamily: 'Poppins_400Regular',
  },
  signupLink: {
    color: '#FDAD00',
    fontWeight: 'bold',
  },
  signInButton: {
    backgroundColor: '#FDAD00',
    borderRadius: 25,
    paddingVertical: 10,
    marginBottom: 30,
  },
  signInButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
  quickLoginContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  quickLoginText: {
    fontSize: 14,
    color: '#FFF',
    fontFamily: 'Poppins_400Regular',
  },
  quickLoginSubText: {
    fontSize: 14,
    color: '#FFF',
    fontFamily: 'Poppins_400Regular',
  },
});

export default LogInPage;
