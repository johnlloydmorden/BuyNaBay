import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView, Animated, TextInput } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const categories = [
  { id: '1', label: 'Textbook', image: require('../../../../products/10.png') },
  { id: '2', label: 'Electronics', image: require('../../../../products/11.png') },
  { id: '3', label: 'Clothes', image: require('../../../../products/12.png') },
  { id: '4', label: 'Accessories', image: require('../../../../products/13.png') },
  { id: '5', label: 'Shoes', image: require('../../../../products/14.png') },
];

const recommended = [
  { id: '1', name: 'Uniform', image: require('../../../../products/15.png') },
  { id: '2', name: 'Headshet', image: require('../../../../products/16.png') },
  { id: '3', name: 'McBook Lenovo', image: require('../../../../products/17.png') },
  { id: '4', name: 'Works of Bonifacio', image: require('../../../../products/18.png') },
  { id: '5', name: 'Blue Short Hair', image: require('../../../../products/19.png') },
  { id: '6', name: 'Weather Jacket', image: require('../../../../products/20.png') },
  { id: '7', name: 'Idiot Watch', image: require('../../../../products/21.png') },
  { id: '8', name: 'Rubberband Shoes', image: require('../../../../products/22.png') },
  { id: '9', name: 'Black Nina', image: require('../../../../products/23.png') },
  { id: '10', name: 'EA Necklace', image: require('../../../../products/24.png') },
  { id: '11', name: 'Baggy Tayo', image: require('../../../../products/25.png') },
  { id: '12', name: 'Wireless Umbrella', image: require('../../../../products/26.png') },
];

export default function Home() {
  const navigation = useNavigation(); // Initialize navigation
  const scrollRef = useRef(null); // Reference to ScrollView
  const [currentIndex, setCurrentIndex] = useState(0); // Current banner index
  const [searchVisible, setSearchVisible] = useState(false); // Toggle search bar visibility
  const [searchText, setSearchText] = useState(""); // Search input text

  const banners = [
    { text: 'Study Essentials', subtitle: 'Boost your productivity with the best study tools', image: require('../../../../products/27.png') },
    { text: 'Tech Gadgets', subtitle: 'Innovative gadgets for your academic and personal life', image: require('../../../../products/28.png') },
    { text: 'Cool Hoodies', subtitle: 'Stay cozy and stylish with our trendy hoodies', image: require('../../../../products/29.png') },
    { text: 'Headphones & Earbuds', subtitle: 'Enhance your listening experience with premium sound quality', image: require('../../../../products/30.png') },
    { text: 'Jewelry & Watches', subtitle: 'Add a touch of elegance to your look', image: require('../../../../products/31.png') },
  ];

  // Automatic scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length); // Increment index cyclically
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

  const featuredSellers = [
    { id: '1', name: 'Linlin', image: require('../../../../assets/seller1.jpeg') },
    { id: '2', name: 'Ebjin', image: require('../../../../assets/seller6.png') },
    { id: '3', name: 'Bonito', image: require('../../../../assets/seller3.png') },
    { id: '4', name: 'Momords', image: require('../../../../assets/seller4.png') },
    { id: '5', name: 'Azurra', image: require('../../../../assets/seller5.png') },
  ];

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

        {/* Banner Layers */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.bannerContainer}
          ref={scrollRef} // Attach ref to ScrollView
        >
          {banners.map((banner, index) => (
            <View key={index} style={styles.banner}>
              <Text style={styles.bannerText}>{banner.text}</Text>
              <Text style={styles.bannerSubtitle}>{banner.subtitle}</Text>
              <Image source={banner.image} style={styles.bannerImage} />
            </View>
          ))}
        </ScrollView>

        {/* Recommended Section */}
        <Text style={styles.sectionTitle}>Recommended</Text>
        <View style={styles.recommendedContainer}>
          {recommended.map((item) => (
            <View key={item.id} style={styles.product}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <TouchableOpacity style={styles.heartIcon}>
                <Ionicons name="cart-outline" size={20} color="#1B1B41" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Featured Seller Section */}
        <Text style={styles.sectionTitle}>Featured Seller</Text>
        <FlatList
          data={featuredSellers}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredSellerContainer}
          renderItem={({ item }) => (
            <View style={styles.category}>
              <Image source={item.image} style={styles.featuredSellerImage} />
              <Text style={styles.featuredSellerLabel}>{item.name}</Text>
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
  
  featuredSellerContainer: { paddingHorizontal: 16, marginVertical: 16},
  featuredSeller: { alignItems: 'center', marginRight: 16 },
  featuredSellerImage: { width: 64, height: 64, borderRadius: 32 },
  featuredSellerLabel: { marginTop: 8, fontSize: 12 },

  bannerContainer: { marginVertical: 16 },
  banner: {
    backgroundColor: '#FFECB3',
    borderRadius: 12,
    marginHorizontal: 8,
    padding: 16,
    alignItems: 'center',
    width: 300, // Width matches scroll offset
  },
  bannerText: { fontSize: 24, fontWeight: 'bold', color: '#FF6F00' },
  bannerSubtitle: { fontSize: 14, color: '#666', marginTop: 8 },
  bannerImage: { width: '100%', height: 120, resizeMode: 'contain', marginTop: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', paddingHorizontal: 16, marginTop: 24 },
  recommendedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
    justifyContent: 'space-between', // Ensure items wrap and fill space
  },
  product: {
    width: '30%', // Reduced to fit 3 items per row
    marginVertical: 8, // Space between items vertically
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 8,
    borderWidth: 1,        // Set border width
    borderColor: '#1B1B41',  // Set border color to black
  },  
  productImage: {
    width: 60, // Reduced size of product image
    height: 60, // Reduced height
    resizeMode: 'contain',
  },
  productName: { fontSize: 12, marginTop: 8, textAlign: 'center' }, // Adjusted font size
  heartIcon: {
    position: 'absolute',
    top: 7, // Adjusted top position
    right: 6, // Adjusted right position
    width: 18, // Reduced size of heart icon
    height: 18, // Reduced size of heart icon
  },
});
