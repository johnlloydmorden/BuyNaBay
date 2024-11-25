import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing MaterialIcons

const Inbox = () => {
  const notifications = [
    { id: '1', name: 'Allyn Kyle Cambaya', message: 'I really want us to work together on the BuyNaBay project. Do you have time?', image: require('../../../../assets/seller1.jpeg') },
    { id: '2', name: 'Joevel Berana', message: 'I want to join the BuyNaBay project. How do we start?', image: require('../../../../assets/seller2.png') },
    { id: '3', name: 'Emmanuel Redoble', message: 'Emmanuel, the BuyNaBay project is really interesting. Do you have time to join me?', image: require('../../../../assets/seller3.png') },
    { id: '4', name: 'John Lloyd Morden', message: 'I’m interested in working on the BuyNaBay project. Can we discuss it?', image: require('../../../../assets/seller4.png') },
    { id: '5', name: 'Alaiza Rose Olores', message: 'I’m excited to join the BuyNaBay project. What’s your schedule like now?', image: require('../../../../assets/seller5.png') },
    { id: '6', name: 'Evegen Dela Cruz', message: 'I’m preparing for the BuyNaBay project. Where do we start?', image: require('../../../../assets/seller6.png') },
    { id: '7', name: 'John Kenneth Pang-an', message: 'Kenneth, andam naba ka maka palit sa imong paborito nga baligya? Visit our store now!', image: require('../../../../assets/seller7.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Messages</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="search" size={30} color="#3e7139" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <View style={styles.headerCard}>
              <Image source={item.image} style={styles.profileImage} />
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <Text style={styles.message}>{item.message}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1B2A', // Dark background to match theme
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align icons and title
    marginBottom: 20,
  },
  iconContainer: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 45,
    color: '#FFFFFF', // White title text for contrast
    textAlign: 'center',
    flex: 1, // Make title take up available space between icons
  },
  notificationCard: {
    backgroundColor: '#1F2A3D', // Dark background for notification cards
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#3e7139', // Greenish left border for emphasis
  },
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // Circular image
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF6F00', // Accent color for names
  },
  message: {
    fontSize: 16,
    color: '#A0A0A0', // Lighter text for message content
    marginTop: 5,
  },
});

export default Inbox;
