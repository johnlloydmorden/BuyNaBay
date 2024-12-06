import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AddPhotoFeature = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null); // State to store the selected image

  // Function to handle photo selection
  const pickImage = async () => {
    // Request permission to access media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted) {
      // Launch the image picker if permission is granted
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri); // Set the image URI to state
      }
    } else {
      alert('Permission to access the media library is required!');
    }
  };

  const handleAddItem = () => {
    // Logic to handle item addition (e.g., send data to a server)
    console.log({
      itemName,
      description,
      price,
      category,
      address,
      image, // Include the image URI in the submission
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Add Photo</Text>

      {/* Add Photo Button */}
      <View style={styles.imageContainer}>
        <Button title="Pick an Image" onPress={pickImage} color="#FF6F00" />
        {image && (
          <Image source={{ uri: image }} style={styles.imagePreview} />
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Item Name</Text>
        <TextInput
          style={styles.input}
          value={itemName}
          onChangeText={setItemName}
          placeholder="Enter item name"
          placeholderTextColor="#A0A0A0"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter item description"
          placeholderTextColor="#A0A0A0"
          multiline
          numberOfLines={4}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Price</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          placeholder="Enter item price"
          placeholderTextColor="#A0A0A0"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Category</Text>
        <TextInput
          style={styles.input}
          value={category}
          onChangeText={setCategory}
          placeholder="Enter item category"
          placeholderTextColor="#A0A0A0"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          placeholder="Enter item location"
          placeholderTextColor="#A0A0A0"
        />
      </View>

      <Button title="Add Item" onPress={handleAddItem} color="#FF6F00" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#0D1B2A', // Background color aligning with the theme
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6F00', // Accent color for headings
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
    borderColor: '#FF6F00',
    borderWidth: 2,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    color: '#A0A0A0',
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#1F2A3D', // Slightly darker background for input fields
    color: '#FFFFFF', // Text color for the input fields
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
});

export default AddPhotoFeature;
