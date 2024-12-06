import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Text style={styles.username}>Gabriel</Text>
          <View style={styles.headerIcons}>
            <Ionicons name="search" size={24} color="white" style={styles.icon} />
            <Ionicons name="notifications" size={24} color="white" style={styles.icon} />
          </View>
        </View>

        {/* Main Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <View style={styles.actionButton}>
            <FontAwesome name="star" size={24} color="navy" />
            <Text style={styles.buttonText}>To rate</Text>
          </View>
          <View style={styles.actionButton}>
            <FontAwesome name="shopping-cart" size={24} color="navy" />
            <Text style={styles.buttonText}>My Purchases</Text>
          </View>
          <View style={styles.actionButton}>
            <FontAwesome name="heart" size={24} color="navy" />
            <Text style={styles.buttonText}>My Favorites</Text>
          </View>
          <View style={styles.actionButton}>
            <FontAwesome name="shop" size={24} color="navy" />
            <Text style={styles.buttonText}>Start Selling</Text>
          </View>
        </View>

        {/* Featured Sellers Section */}
        <View style={styles.featuredSellersSection}>
          <Text style={styles.featuredSellersText}>Featured Sellers:</Text>
          <View style={styles.sellersContainer}>
            <View style={styles.seller}>
              <Image source={require('../../../../assets/Profile.jpg')} style={styles.sellerImage} />
            </View>
            <View style={styles.seller}>
              <Image source={require('../../../../assets/seller2.png')} style={styles.sellerImage} />
            </View>
            <View style={styles.seller}>
              <Image source={require('../../../../assets/seller3.png')} style={styles.sellerImage} />
            </View>
            <View style={styles.seller}>
              <FontAwesome name="ellipsis-h" size={24} color="white" />
            </View>
          </View>
        </View>

        {/* Categories Section */}
        <View style={styles.categoriesSection}>
          <Text style={styles.categoriesTitle}>Explore Categories:</Text>
          <View style={styles.categoriesContainer}>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Clothing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Books</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Home Goods</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Promotions Section */}
        <View style={styles.promotionsSection}>
          <Text style={styles.promotionsText}>Special Offers Just for You!</Text>
          <TouchableOpacity style={styles.promotionBanner}>
            <Text style={styles.promotionText}>Get 20% off on your first purchase</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1B2A', // Dark background color
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 50, // Added to make sure content doesn't overlap footer
  },

  // Profile Header
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F2C14E',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },


  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  actionButton: {
    alignItems: 'center',
    backgroundColor: '#F2C14E',
    borderRadius: 10,
    width: 70,
    height: 70,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0D1B2A',
  },

  // Featured Sellers Section
  featuredSellersSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  featuredSellersText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F2C14E',
    marginBottom: 10,
  },
  sellersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seller: {
    borderRadius: 50,
    width: 50,
    height: 50,
    overflow: 'hidden',
    backgroundColor: '#F2C14E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sellerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },

  // Categories Section
  categoriesSection: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  categoriesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F2C14E',
    marginBottom: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  categoryButton: {
    backgroundColor: '#F2C14E',
    borderRadius: 10,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0D1B2A',
  },

  // Promotions Section
  promotionsSection: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  promotionsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F2C14E',
    marginBottom: 10,
  },
  promotionBanner: {
    backgroundColor: '#F2C14E',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  promotionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D1B2A',
  },

  // Footer Navigation
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0D1B2A',
    height: 60,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
