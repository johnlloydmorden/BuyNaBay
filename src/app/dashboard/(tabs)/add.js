import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const Add = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('');

  const handlePost = () => {
    // Handle the post logic (e.g., storing the project details)
    console.log('Project Posted:', { title, description, rate });
    // Reset fields after posting
    setTitle('');
    setDescription('');
    setRate('');
  };

  const handleSaveDraft = () => {
    // Handle saving the draft logic
    console.log('Project Saved as Draft:', { title, description, rate });
    // Reset fields after saving as draft
    setTitle('');
    setDescription('');
    setRate('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Project Idea</Text>

      <Text style={styles.label}>Project Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter project title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Project Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter project description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>Estimated Rate</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter estimated rate"
        value={rate}
        onChangeText={setRate}
        keyboardType="numeric"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Icon name="check" size={15} color="#fff" />
          <Text style={styles.postText}>Publish</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.draftButton} onPress={handleSaveDraft}>
          <Icon name="save" size={15} color="#fff" />
          <Text style={styles.draftText}>Save as Draft</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  postButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3e7139',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 10, // Add spacing between buttons
  },
  draftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8a8a8a', // Grey color for save as draft button
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  postText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 8,
  },
  draftText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 8,
  },
});

export default Add;
