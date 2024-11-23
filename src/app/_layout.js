import React from 'react';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const RootLayout = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            animation: 'none', // Optional: Disable animations
          }}
        >
          {/* Intro screen - FIRST screen */}
          <Stack.Screen
            name="intro"   // Ensure this is the first screen
            options={{
              headerShown: false, // No header for the intro page
            }}
          />
          
          {/* Login screen - SECOND screen */}
          <Stack.Screen
            name="index"    // Login screen (index.js)
            options={{
              headerShown: false, // Hide header for the login page
            }}
          />
          
          <Stack.Screen
            name="logIn"   // Ensure this is the first screen
            options={{
              headerShown: false, // No header for the intro page
            }}
          />

          {/* Other screens */}
          <Stack.Screen
            name="register"
            options={{
              title: 'Registration',
            }}
          />
          <Stack.Screen
            name="recover"
            options={{
              title: 'Forgot Password?',
            }}
          />
          <Stack.Screen
            name="dashboard"
            options={{
              title: 'Dashboard',
              headerShown: false, // Hide header for the dashboard
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default RootLayout;
