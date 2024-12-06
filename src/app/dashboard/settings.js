import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import { Image } from 'react-native';

export default function Settings() {
  const navigation = useNavigation(); // Initialize the navigation hook

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="#F2C14E" />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
      <Image
            style={styles.profileImage}
            source={require('../../../assets/Profile.jpg')}
          />
        <Text style={styles.profileName}>Gabriel Felicitas</Text>
        <Text style={styles.profileEmail}>vertigo@gmail.com</Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <Text style={styles.sectionLabel}>Content</Text>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.settingText}>Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.settingText}>Downloads</Text>
      </TouchableOpacity>

      {/* Preferences Section */}
      <Text style={styles.sectionLabel}>Preferences</Text>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.settingText}>Language</Text>
        <Text style={styles.settingValue}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.settingText}>Notifications</Text>
        <Text style={styles.settingValue}>Enabled</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.settingText}>Theme</Text>
        <Text style={styles.settingValue}>Light</Text>
      </TouchableOpacity>
      <View style={styles.settingOption}>
        <Text style={styles.settingText}>Background Play</Text>
        <Switch value={true} />
      </View>
      <View style={styles.settingOption}>
        <Text style={styles.settingText}>Download via WiFi Only</Text>
        <Switch value={false} />
      </View>
      <View style={styles.settingOption}>
        <Text style={styles.settingText}>Autoplay</Text>
        <Switch value={true} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#0D1B2A', // Dark background to match BuyNaBay theme
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6F00', // Accent color for the title
    flex: 1,
    textAlign: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6F00', // Accent color for the profile name
  },
  profileEmail: {
    fontSize: 14,
    color: '#A0A0A0', // Lighter text for the email
    marginBottom: 10,
  },
  editProfileButton: {
    backgroundColor: '#3e7139', // Greenish button color from BuyNaBay theme
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
  },
  editProfileText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3e7139', // Greenish accent color for section labels
    marginVertical: 10,
  },
  settingOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#3e7139', // Greenish bottom border for separation
  },
  settingText: {
    fontSize: 16,
    color: '#FFF', // White text for better contrast
  },
  settingValue: {
    fontSize: 16,
    color: '#A0A0A0', // Lighter color for setting values
  },
});
