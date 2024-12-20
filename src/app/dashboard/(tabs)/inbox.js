import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Inbox() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const notifications = [
    { id: '1', name: 'Allyn Kyle Cambaya', username: 'allyn_cambaya', message: 'I really want us to work together on the BuyNaBay project. Do you have time?', image: require('../../../../assets/seller1.jpeg') },
    { id: '2', name: 'Joevel Berana', username: 'joevel_berana', message: 'I want to join the BuyNaBay project. How do we start?', image: require('../../../../assets/seller2.png') },
    { id: '3', name: 'Emmanuel Redoble', username: 'emmanuel_redoble', message: 'Emmanuel, the BuyNaBay project is really interesting. Do you have time to join me?', image: require('../../../../assets/seller3.png') },
    { id: '4', name: 'John Lloyd Morden', username: 'john_lloyd', message: 'I’m interested in working on the BuyNaBay project. Can we discuss it?', image: require('../../../../assets/seller4.png') },
    { id: '5', name: 'Alaiza Rose Olores', username: 'alaiza_olores', message: 'I’m excited to join the BuyNaBay project. What’s your schedule like now?', image: require('../../../../assets/seller5.png') },
    { id: '6', name: 'Evegen Dela Cruz', username: 'evegen_dela_cruz', message: 'I’m preparing for the BuyNaBay project. Where do we start?', image: require('../../../../assets/seller6.png') },
    { id: '7', name: 'John Kenneth Pang-an', username: 'john_kenneth', message: 'Kenneth, andam naba ka maka palit sa imong paborito nga baligya? Visit our store now!', image: require('../../../../assets/seller7.png') },
  ];

  const filteredNotifications = notifications.filter(notification =>
    notification.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePress = (item) => {
    setSelectedMessage(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedMessage(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.username}>Lloyd_Nedrom</Text>
        <View style={styles.iconContainer}>
          <Icon name="create" size={30} color="#000" style={styles.icon} />
          <Icon name="camera-alt" size={30} color="#000" style={styles.icon} />
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesSection}>
        {notifications.map((notification) => (
          <TouchableOpacity 
            key={notification.id} 
            style={styles.storyContainer} 
            onPress={() => handlePress(notification)}
          >
            <Image source={notification.image} style={styles.storyImage} />
            <Text style={styles.storyCaption}>{notification.username}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.tabSelector}>
        <Text style={[styles.tabText, styles.activeTab]}>Messages</Text>
        <Text style={styles.tabText}>Channels</Text>
        <Text style={styles.tabText}>Requests</Text>
      </View>

      <TextInput
        placeholder="Search messages..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchBar}
      />

      <FlatList
        data={filteredNotifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.notificationCard} onPress={() => handlePress(item)}>
            <TouchableOpacity onPress={() => handlePress(item)}>
              <Image source={item.image} style={styles.profileImage} />
            </TouchableOpacity>
            <View style={styles.messageContainer}>
              <TouchableOpacity onPress={() => handlePress(item)}>
                <Text style={styles.name}>{item.name}</Text>
              </TouchableOpacity>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Modal animationType="slide" transparent={false} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.topSection}>
            <TouchableOpacity onPress={closeModal}>
              <Icon name="arrow-back" size={30} color="#000" />
            </TouchableOpacity>
            <Text style={styles.modalUsername}>{selectedMessage?.username}</Text>
            <Icon name="info-outline" size={30} color="#000" />
          </View>

          {selectedMessage && (
            <>
              <View style={styles.profileHeader}>
                <Image source={selectedMessage.image} style={styles.expandedProfileImage} />
                <View style={styles.profileInfo}>
                  <Text style={styles.expandedName}>{selectedMessage.name}</Text>
                  <Text style={styles.expandedUsername}>{selectedMessage.username}</Text>
                </View>
              </View>

              <View style={styles.messageArea}>
                <View style={styles.bubbleContainer}>
                  <Image source={selectedMessage.image} style={styles.bubbleProfileImage} />
                  <View style={styles.bubble}>
                    <Text>{selectedMessage.message}</Text>
                  </View>
                </View>
                <Text style={styles.timestamp}>4:27 PM</Text>
              </View>

              <View style={styles.footer}>
                <Icon name="photo-camera" size={30} color="#000" />
                <TextInput placeholder="Message..." style={styles.input} />
                <Icon name="mic" size={30} color="#000" />
              </View>
            </>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 15 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 },
  username: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', flexGrow: 1 },
  iconContainer: { flexDirection: 'row' },
  icon: { marginLeft: 15 },
  storiesSection: { marginTop: 0 },
  storyContainer: { alignItems: 'center', marginRight: 10 },
  storyImage: { width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: '#FFFFFF' },
  storyCaption: { marginTop: 5, fontSize: 15, fontWeight: 'bold', marginBottom: 15 },
  tabSelector: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  tabText: { fontSize: 18, fontWeight: 'bold', padding: 10 },
  activeTab: { borderBottomWidth: 2, borderBottomColor: '#000' },
  searchBar: { height: 40, borderWidth: 1, borderRadius: 20, paddingHorizontal: 10 },
  notificationCard: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  profileImage: { width: 50, height: 50, borderRadius: 25 },
  messageContainer: { marginLeft: 10 },
  name: { fontSize: 16, fontWeight: 'bold' },
  message: { fontSize: 14, color: '#888' },
  modalContainer: { flex: 1, backgroundColor: '#FFFFFF', padding: 20 },
  topSection: { flexDirection: 'row', justifyContent: 'space-between' },
  modalUsername: { fontSize: 18, fontWeight: 'bold' },
  profileHeader: { flexDirection: 'row', marginTop: 20 },
  expandedProfileImage: { width: 60, height: 60, borderRadius: 30 },
  profileInfo: { marginLeft: 10 },
  expandedName: { fontSize: 18, fontWeight: 'bold' },
  expandedUsername: { fontSize: 16, color: '#888' },
  messageArea: { marginTop: 60, flex: 1, justifyContent: 'flex-start' },
  bubbleContainer: { flexDirection: 'row', marginBottom: 20, alignItems: 'center' },
  bubbleProfileImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  bubble: { backgroundColor: '#E0E0E0', padding: 15, borderRadius: 15, maxWidth: '70%', alignSelf: 'flex-start' },
  timestamp: { fontSize: 12, color: '#888', marginTop: 5, marginLeft: 50 },
  footer: { flexDirection: 'row', alignItems: 'center', padding: 10, borderTopWidth: 1, borderTopColor: '#E0E0E0' },
  input: { flex: 1, borderWidth: 1, borderRadius: 20, paddingHorizontal: 15, height: 40 },
});
