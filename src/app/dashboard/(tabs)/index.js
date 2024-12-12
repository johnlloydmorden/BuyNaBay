import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const categories = [
  { id: '1', label: 'Textbook', image: require('../../../../products/10.png') },
  { id: '2', label: 'Electronics', image: require('../../../../products/11.png') },
  { id: '3', label: 'Clothes', image: require('../../../../products/12.png') },
  { id: '4', label: 'Accessories', image: require('../../../../products/13.png') },
  { id: '5', label: 'Shoes', image: require('../../../../products/14.png') },
];

export default function Home() {
  const navigation = useNavigation(); // Initialize navigation
  const scrollRef = useRef(null); // Reference to ScrollView
  const [currentIndex, setCurrentIndex] = useState(0); // Current banner index
  const [searchVisible, setSearchVisible] = useState(false); // Toggle search bar visibility
  const [searchText, setSearchText] = useState(""); // Search input text

  // Automatic scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length); // Increment index cyclically
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        x: currentIndex * 300, // Scroll to the corresponding banner index
        animated: true,
      });
    }
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Drawer Icon */}
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <FontAwesome name="bars" size={24} color="black" style={styles.drawerIcon} />
        </TouchableOpacity>

        {/* Logo and Text */}
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/OfficialBuyNaBay.png')} style={styles.logoImage} />
          {searchVisible ? (
            <TextInput
              style={styles.searchBar}
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Search..."
              autoFocus
            />
          ) : (
            <Text style={styles.logoText}>BuyNaBay</Text>
          )}
        </View>

        <View style={styles.headerIcons}>
          {/* Search Icon */}
          <TouchableOpacity onPress={() => setSearchVisible(!searchVisible)}>
            <FontAwesome name="search" size={24} color="#FDAD00" />
          </TouchableOpacity>
          {/* Notification Icon */}
          <TouchableOpacity onPress={() => console.log('Notification pressed')}>
            <Ionicons name="notifications" size={24} color="black" style={styles.notificationIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollContent}>
        {/* Categories */}
        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
          renderItem={({ item }) => (
            <View style={styles.category}>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryLabel}>{item.label}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
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
    zIndex: 10, // Ensure it stays above other content
    borderBottomWidth: 0,
    borderBottomColor: 'black',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logoImage: {
    width: 30, // Same size as the search icon
    height: 30,
    marginRight: 8, // Spacing between the logo and text
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  drawerIcon: { marginRight: 16 },
  logo: { fontSize: 24, fontWeight: 'bold', flex: 1, textAlign: 'center', marginRight: 100 },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    flex: 1,
    marginRight: 10,
  },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  notificationIcon: { marginLeft: 16 },

  categoriesContainer: { paddingHorizontal: 16, marginVertical: 16, marginTop: 85 },
  category: { alignItems: 'center', marginRight: 16 },
  categoryImage: { width: 64, height: 64, borderRadius: 32 },
  categoryLabel: { marginTop: 8, fontSize: 12 },
});
