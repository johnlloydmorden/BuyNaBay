// app/recover.js
import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Recover = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.circleContainer}>
          <Image source={require('../assets/AppLogo.png')} style={styles.logo} resizeMode="cover" />
        </View>
      </View>

      <Text style={styles.title}>Recover Password</Text>

      <Text style={styles.instructionText}>
        Enter your email address below, and we'll send you a link to reset your password.
      </Text>

      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#3e7139" style={styles.icon} />
        <TextInput
          label="Email"
          mode="outlined"
          style={styles.input}
          placeholderTextColor="#6b8f71"
        />
      </View>

      <Button mode="contained" onPress={() => {}} style={styles.resetButton}>
        Send Reset Link
      </Button>
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
    marginBottom: 50,
  },
  circleContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
    marginBottom: 20,
  },
  instructionText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#3e7139',
    marginBottom: 30,
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
  resetButton: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#6b8f71',
  },
});

export default Recover;
