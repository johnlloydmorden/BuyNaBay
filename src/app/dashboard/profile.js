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
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer} style={styles.drawerIcon}>
          <Icon name="bars" size={24} color="#1B1B41" />
        </TouchableOpacity>
        <Text style={styles.logo}>Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image source={require('../../assets/joevel.jpeg')} style={styles.profileImage} />

        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Joevel Berana</Text>
          <Icon name="check-circle" size={18} color="#FDAD00" style={styles.verifiedIcon} />
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
  container: {
    flex: 1,
    backgroundColor: '#1B1B41', // Dark blue background
  },
  header: {
    position: 'absolute', // Fix header on top
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    zIndex: 10,
    borderBottomWidth: 0,
    borderBottomColor: 'black',
  },
  drawerIcon: {
    marginRight: 16,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 200,
    color: '#1B1B41', // Vibrant yellow color
  },
  scrollViewContainer: {
    alignItems: 'center',
    paddingTop: 80, // Adjust padding to avoid overlap with header
    paddingBottom: 20,
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
