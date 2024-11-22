import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing MaterialIcons

const Inbox = () => {
  // List of people and their notification message
  const notifications = [
    { id: '1', name: 'Gabriel Felicitas', message: 'Gabriel, gusto kaayo ko nga magtinabangay ta sa BuyNaBay project. Naa kay panahon?' },
    { id: '2', name: 'John Lloyd Morden', message: 'John Lloyd, ganahan ko nga mag-apil sa BuyNaBay project. Unsaon nato pag-start?' },
    { id: '3', name: 'Emmanuel Redoble', message: 'Emmanuel, lami kaayo ang BuyNaBay project. Naa ka’y oras para mag-uban ta?' },
    { id: '4', name: 'Allyn Kyle Cambaya', message: 'Allyn Kyle, interesado ko nga magtrabaho sa BuyNaBay project. Pwede ba ta maghisgot?' },
    { id: '5', name: 'John Kenneth Pang-an', message: 'John Kenneth, excited ko mag-apil sa BuyNaBay project. Karon ba ang imong schedule?' },
    { id: '6', name: 'Evegen Dela Cruz', message: 'Evegen, nagandam ko para sa BuyNaBay project. Asa ta magsugod?' },
    { id: '7', name: 'Alaiza Rose Olores', message: 'Alaiza Rose, andam ko nga mag-apil sa BuyNaBay project. Unsa may next step nato?' },
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
            <Text style={styles.name}>{item.name}</Text>
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
    backgroundColor: '#f5f5f5',
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
    color: '#000',
    textAlign: 'center',
    flex: 1, // Make title take up available space between icons
  },
  notificationCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#3e7139',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6b8f71',
  },
  message: {
    fontSize: 16,
    color: '#7a7a7a',
    marginTop: 5,
  },
});

export default Inbox;
