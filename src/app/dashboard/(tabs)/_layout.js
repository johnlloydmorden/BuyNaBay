import React from 'react';
import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6b8f71', // Active tab icon and label color
        tabBarInactiveTintColor: '#000', // Inactive tab icon and label color
        tabBarActiveBackgroundColor: '#e0f2f1', // Active background color for tab
        tabBarInactiveBackgroundColor: '#ffffff', // Inactive background color for tab
        tabBarLabelStyle: {
          fontSize: 12, // Adjusted font size for better readability
        },
        tabBarStyle: {
          marginBottom: 5,
          borderRadius: 10,
          height: 60, // Adjust height for comfort
          backgroundColor: '#3e7139', // Set the tab container color here
          borderTopWidth: 2, // Add border outline
          borderColor: '#6b8f71', // Border color
        },
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={20} color={focused ? '#6b8f71' : '#000'} />
          ),
        }}
      />
      <Tabs.Screen
        name="project"
        options={{
          title: 'Projects',
          tabBarIcon: ({ focused }) => (
            <Icon name="folder" size={20} color={focused ? '#6b8f71' : '#000'} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <Icon name="plus" size={30} color={focused ? '#6b8f71' : '#000'} />
          ),
          tabBarLabel: '', // Hide label for the add button
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: 'Inbox',
          tabBarIcon: ({ focused }) => (
            <Icon name={focused ? 'envelope' : 'envelope-o'} size={20} color={focused ? '#6b8f71' : '#000'} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Icon name={focused ? 'user' : 'user-o'} size={20} color={focused ? '#6b8f71' : '#000'} />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
