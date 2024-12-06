import React, { useState } from 'react';
import { View, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

const ProfileScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode((previousState) => !previousState);

  const handleLogout = () => {
    router.push('/logIn');
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />


      <View style={[styles.header, isDarkMode ? styles.darkHeader : styles.lightHeader]}>
        <Image
          style={styles.backgroundImage}
          source={require('../../../assets/bg3.gif')}
        />
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={require('../../../assets/Profile.jpg')}
          />
          <View style={styles.textContainer}>
            <Text style={[styles.name, styles.darkText]}>
              Gabriel
            </Text>
            <Text style={[styles.surname, isDarkMode ? styles.darkText : styles.blackText]}>
              Felicitas
            </Text>
            <View style={[styles.statusContainer, styles.statusOffset]}>
              <MaterialCommunityIcons name="check-circle" size={20} color="#00FF00" />
              <Text style={[styles.status, isDarkMode ? styles.darkText : styles.lightText]}>
                Active
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* User Stats */}
      <View style={styles.statsContainer}>
        <Text style={[styles.statText, isDarkMode ? styles.darkText : styles.lightText]}>230K</Text>
        <Text style={[styles.statLabel, isDarkMode ? styles.darkText : styles.lightText]}>Followers</Text>
        <Text style={styles.statSeparator}>|</Text>
        <Text style={[styles.statText, isDarkMode ? styles.darkText : styles.lightText]}>498</Text>
        <Text style={[styles.statLabel, isDarkMode ? styles.darkText : styles.lightText]}>Projects</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.optionsContainer}>
        <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>Profile</Text>
        <ProfileOption title="Manage User" icon="user" isDarkMode={isDarkMode} />
      </View>

      {/* Settings Section */}
      <View style={styles.optionsContainer}>
        <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>Settings</Text>
        <ProfileOption title="Notifications" icon="bell" isDarkMode={isDarkMode} />
        <ProfileOption
          title={isDarkMode ? "Light Mode" : "Dark Mode"}
          icon="moon-waning-crescent"
          isDarkMode={isDarkMode}
          rightComponent={
            <MaterialCommunityIcons
              name={isDarkMode ? "moon-waning-crescent" : "white-balance-sunny"}
              size={24}
              color={isDarkMode ? '#fff' : '#000'}
            />
          }
          onPress={toggleDarkMode}
        />
        <ProfileOption title="Sign Out" icon="sign-out" isDarkMode={isDarkMode} onPress={handleLogout} />
      </View>
    </View>
  );
};

// Profile Option Component
const ProfileOption = ({ title, icon, isDarkMode, rightComponent, onPress }) => (
  <TouchableOpacity
    style={[
      styles.option,
      isDarkMode ? styles.darkOption : styles.lightOption,
    ]}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <View style={styles.leftComponent}>
      {rightComponent || <FontAwesome name={icon} size={24} color={isDarkMode ? 'white' : 'black'} />}
    </View>
    <Text style={[styles.optionText, isDarkMode ? styles.darkText : styles.lightText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

// Styles
const styles = StyleSheet.create({
  // Container
  container: { flex: 1 },
  
  // Backgrounds
  darkBackground: { backgroundColor: '#000' },
  lightBackground: { backgroundColor: '#fff' },

  // Header
  header: { 
    alignItems: 'flex-start', 
    height: 250, 
    overflow: 'hidden', 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30 
  },
  darkHeader: { backgroundColor: '#333' },
  lightHeader: { backgroundColor: 'transparent' },
  backgroundImage: { 
    position: 'absolute', 
    width: '100%', 
    height: '75%', 
    top: -25, 
    resizeMode: 'cover' 
  },

  // Profile Image and Text
  profileContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginHorizontal: 20, 
    marginTop: 90 
  },
  profileImage: { 
    width: 140, 
    height: 140, 
    borderRadius: 70, 
    borderColor: '#fff', 
    borderWidth: 3 
  },
  textContainer: { flex: 1, justifyContent: 'center' },
  name: { fontSize: 26, fontWeight: 'bold', color: 'white' , marginTop: 25},
  surname: { fontSize: 26, fontWeight: 'bold' },

  // Status Section
  statusContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  statusOffset: { marginTop: 10 }, // Moves status down slightly
  status: { fontSize: 18, marginLeft: 5, color: '#00FF00' },

  // Stats Section
  statsContainer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginVertical: 20 
  },
  statText: { fontSize: 24, fontWeight: 'bold', marginHorizontal: 10 },
  statLabel: { marginHorizontal: 5 },
  statSeparator: { color: '#333' },

  // Options Section
  optionsContainer: { 
    marginTop: 20, 
    paddingHorizontal: 10 
  },
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginVertical: 10 
  },

  // Profile Option Styling
  option: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 16, 
    borderRadius: 10, 
    marginVertical: 6, 
    marginHorizontal: 12 
  },
  darkOption: { backgroundColor: '#333' },
  lightOption: { backgroundColor: '#f0f0f0' },
  optionText: { flex: 1, marginLeft: 10 },

  // Text Colors
  darkText: { color: '#fff' },
  lightText: { color: '#000' },

  // Component Layout
  leftComponent: { width: 30, alignItems: 'center' },

  // Black Text for Surname (when light mode is on)
  blackText: { color: '#000' }
});

export default ProfileScreen;
