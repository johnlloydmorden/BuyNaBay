import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Settings() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Tools and Resources Section */}
      <Text style={styles.sectionLabel}>Tools and Resources</Text>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="cogs" size={18} color="#3e7139" style={styles.icon} />
        <Text style={styles.settingText}>Account Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="key" size={18} color="#3e7139" style={styles.icon} />
        <Text style={styles.settingText}>Privacy Checkup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="home" size={18} color="#3e7139" style={styles.icon} />
        <Text style={styles.settingText}>Supervision</Text>
      </TouchableOpacity>

      {/* Preferences Section */}
      <Text style={styles.sectionLabel}>Preferences</Text>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="moon-o" size={18} color="#6b8f71" style={styles.icon} />
        <Text style={styles.settingText}>Darkmode</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="bell" size={18} color="#6b8f71" style={styles.icon} />
        <Text style={styles.settingText}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="language" size={18} color="#6b8f71" style={styles.icon} />
        <Text style={styles.settingText}>Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="universal-access" size={18} color="#6b8f71" style={styles.icon} />
        <Text style={styles.settingText}>Accessibility</Text>
      </TouchableOpacity>

      {/* Legal Policies Section */}
      <Text style={styles.sectionLabel}>Legal Policies</Text>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="file" size={18} color="#3e7139" style={styles.icon} />
        <Text style={styles.settingText}>Terms of Service</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3e7139',
    marginVertical: 10,
  },
  settingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  icon: {
    marginRight: 10,
  },
});
