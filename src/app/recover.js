import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'; // MaterialIcons for standard icons
import { useRouter } from 'expo-router';

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

const Recover = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Icon name="chevron-left" size={24} color="#FDAD00" />
        </TouchableOpacity>
      </View>

      {/* Centered Content */}
      <View style={styles.centeredContent}>
        {/* Logo */}
        <Image source={require('../assets/BuyNaBay.png')} style={styles.logo} resizeMode="contain" />
        {/* BuyNaBay Title */}
        <Text style={styles.buyNaBayTitle}>BuyNaBay</Text>
        {/* Page Title */}
        <Text style={styles.title}>Recover Password</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Enter your registered email address, and we'll send you a link to reset your password.
        </Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            label="Email Address"
            mode="outlined"
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#FFF"
            underlineColor="#FDAD00"
            activeOutlineColor="#FDAD00"
            left={<TextInput.Icon name="email" color="#FDAD00" size={20} />} // Adjusted icon size and color
          />
        </View>

        {/* Recover Button */}
        <Button mode="contained" onPress={() => console.log('Recovering...')} style={styles.recoverButton}>
          Send Recovery Email
        </Button>

        {/* Sign In Option */}
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>
            Remembered your password?{' '}
            <Text style={styles.signInLink} onPress={() => router.push('/logIn')}>
              Sign In
            </Text>
          </Text>
        </View>
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
    zIndex: 1,
  },
  backButton: {
    padding: 5,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50, // Adjusted to account for header
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  buyNaBayTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FDAD00',
    fontFamily: 'Poppins',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Poppins',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#B0B0B0',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Poppins',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#1b1b41',
    color: '#FFF',
    fontFamily: 'Poppins_400Regular',
  },
  recoverButton: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#FDAD00',
    borderRadius: 25,
    marginTop: 20,
  },
  signInContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  signInText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Poppins',
  },
  signInLink: {
    fontWeight: 'bold',
    color: '#FDAD00',
  },
});

export default Recover;
