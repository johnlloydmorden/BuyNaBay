import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image source={require('../../../assets/joevel.jpeg')} style={styles.profileImage} />

        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Joevel Berana</Text>
          <Icon name="check-circle" size={18} color="#4CAF50" style={styles.verifiedIcon} />
        </View>

        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
          <Icon name="edit" size={16} color="#fff" style={styles.editProfileIcon} />
        </TouchableOpacity>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>45</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>20</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>50</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </View>
        </View>

        {/* Divider line below the statsContainer */}
        <View style={styles.divider} />

        {/* Skill Bar Section */}
        <View style={styles.skillsContainer}>
          <Text style={styles.skillsTitle}>Programming Skills</Text>
          
          {/* Skill Bars */}
          <View style={styles.skillBarContainer}>
            <Text style={styles.skillLabel}>JavaScript</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: '80%' }]} />
            </View>
          </View>

          <View style={styles.skillBarContainer}>
            <Text style={styles.skillLabel}>React Native</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: '70%' }]} />
            </View>
          </View>

          <View style={styles.skillBarContainer}>
            <Text style={styles.skillLabel}>Node.js</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: '60%' }]} />
            </View>
          </View>
        </View>

        {/* Edit Programming Skills Button */}
        <TouchableOpacity style={styles.editSkillsButton}>
          <Text style={styles.editSkillsText}>Edit Programming Skills</Text>
          <Icon name="edit" size={16} color="#fff" style={styles.editSkillsIcon} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#3e7139',
    marginTop: 10,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  verifiedIcon: {
    marginLeft: 6,
  },
  editProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3e7139',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 15,
  },
  editProfileText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },
  editProfileIcon: {
    marginLeft: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-around',
    width: '90%',
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: 'gray',
  },
  divider: {
    width: '90%',
    height: 2,
    backgroundColor: '#ddd',
    marginTop: 15,
  },
  skillsContainer: {
    width: '90%',
    marginTop: 20,
  },
  skillsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  skillBarContainer: {
    marginVertical: 8,
  },
  skillLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBar: {
    width: '100%',
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginTop: 5,
  },
  progress: {
    height: '100%',
    backgroundColor: '#3e7139',
    borderRadius: 5,
  },
  editSkillsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3e7139',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 20,
  },
  editSkillsText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },
  editSkillsIcon: {
    marginLeft: 5,
  },
});

export default Profile;
