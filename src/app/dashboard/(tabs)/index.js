import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, RefreshControl, TouchableOpacity, TextInput } from 'react-native';
import { createClient } from '@supabase/supabase-js';
import { FontAwesome, Ionicons } from '@expo/vector-icons'; // Ensure you have these icons
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

// Initialize Supabase client
const supabaseUrl = 'https://ktezclohitsiegzhhhgo.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0ZXpjbG9oaXRzaWVnemhoaGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwMjkxNDIsImV4cCI6MjA0ODYwNTE0Mn0.iAMC6qmEzBO-ybtLj9lQLxkrWMddippN6vsGYfmMAjQ'; // Replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ItemList() {
  const navigation = useNavigation(); // Use the navigation hook
  const [items, setItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [likedItems, setLikedItems] = useState({}); // Track liked items

  // Fetch items from Supabase
  const fetchItems = async (category) => {
    let query = supabase.from('items').select('*');
    if (category) {
      query = query.eq('category', category); // Filter by category if specified
    }
    const { data, error } = await query;
    if (error) {
      console.error('Error fetching items:', error);
    } else {
      setItems(data);
    }
  };

  // Refresh function
  const onRefresh = async () => {
    setRefreshing(true); // Show loading indicator
    await fetchItems(selectedCategory);
    setRefreshing(false); // Hide loading indicator
  };

  useEffect(() => {
    fetchItems(selectedCategory); // Initial fetch for all items or filtered by category
  }, [selectedCategory]);

  // Toggle like status
  const toggleLike = (itemId) => {
    setLikedItems((prev) => {
      const isLiked = !prev[itemId];
      return { ...prev, [itemId]: isLiked };
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Drawer Icon */}
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.iconButton}>
          <FontAwesome name="bars" size={24} color="black" />
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
          <TouchableOpacity onPress={() => setSearchVisible(!searchVisible)} style={styles.iconButton}>
            <FontAwesome name="search" size={24} color="#FDAD00" />
          </TouchableOpacity>
          {/* Notification Icon */}
          <TouchableOpacity onPress={() => console.log('Notification pressed')} style={styles.iconButton}>
            <Ionicons name="notifications" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Category Row */}
      <View style={styles.categoryRow}>
        {[{ name: 'Books', image: require('../../../../products/10.png') },
          { name: 'Shoes', image: require('../../../../products/11.png') },
          { name: 'Clothes', image: require('../../../../products/12.png') },
          { name: 'Foods', image: require('../../../../products/13.png') }]
          .map(category => (
            <TouchableOpacity
              key={category.name}
              onPress={() => setSelectedCategory(category.name)} // Set selected category on press
              style={styles.categoryButton}
            >
              <Image source={category.image} style={styles.categoryImage} />
              <Text style={[styles.categoryText, selectedCategory === category.name && styles.activeCategoryText]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
      </View>

      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.itemname}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemPrice}>
              {new Intl.NumberFormat('en-PH', {
                style: 'currency',
                currency: 'PHP',
              }).format(item.price)}
            </Text>
            <Text style={styles.itemCategory}>Category: {item.category}</Text>
            <Text style={styles.itemAddress}>Address: {item.address}</Text>
            <Image
              source={{ uri: item.image || 'https://example.com/placeholder.png' }}
              style={styles.itemImage}
            />
            {/* Personal Post Icons */}
            <View style={styles.iconsContainer}>
              <TouchableOpacity onPress={() => toggleLike(item.id)} style={styles.icon}>
                <FontAwesome
                  name={likedItems[item.id] ? 'heart' : 'heart-o'}
                  size={24}
                  color={likedItems[item.id] ? 'red' : 'black'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Message pressed')} style={styles.icon}>
                <FontAwesome name="comments-o" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Cart pressed')} style={styles.icon}>
                <Ionicons name="cart-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFECB3', // Light creamy background
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
  iconButton: {
    marginRight: 16,
  },
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
  itemContainer: {
    marginTop: 15,
    marginBottom: 15, // Improved spacing below each item
    padding: 15,
    backgroundColor: '#FFF', // White background for item containers
    borderRadius: 5,
    borderWidth: 1, // Subtle border for item containers
    borderColor: '#FF6F00', // Accent border color
    shadowColor: '#000', // Add shadow for elevation
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: '#555', // Lighter text for descriptions
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6F00', // Accent price color
  },
  itemCategory: {
    fontSize: 14,
    color: '#666', // Slightly darker text for category
    marginBottom: 5,
  },
  itemAddress: {
    fontSize: 14,
    color: '#666', // Darker text for address
    marginBottom: 5,
  },
  itemImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  icon: {
    marginRight: 20, // Adjust spacing for icons
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    marginBottom: 20,
  },
  categoryButton: {
    marginTop: 45,
    alignItems: 'center',
    width: 70,
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 12,
  },
  activeCategoryText: {
    fontWeight: 'bold',
    color: '#FF6F00', // Accent color for selected category
  },
});
