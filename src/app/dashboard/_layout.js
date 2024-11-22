import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { View, Image, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

export default function DrawerLayout() {
  const router = useRouter();
  const year = new Date().getFullYear();  
  const { top, bottom } = useSafeAreaInsets();

  // Handle logout action
  const handleLogout = async () => {
    router.replace('/');
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => (
        <View style={{ flex: 1 }}>
          <DrawerContentScrollView
            {...props}
            scrollEnabled={true}
            contentContainerStyle={{ paddingTop: top }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 50 + top,
                paddingBottom: 20
              }}
            >
              {/* Avatar container */}
              <View style={styles.avatarContainer}>
                <Image source={require('../../assets/AppLogo.png')} style={styles.avatar} />
              </View>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Logout"
              icon={() => (
                <Icon name='sign-out' color='#6b8f71' size={25} /> // Inlined icon size and color for logout
              )}
              labelStyle={{ fontSize: 18 }} // Inlined font size for label
              onPress={handleLogout}
            />
          </DrawerContentScrollView>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 20 + bottom
            }}
          >
            <Text>
            © {year} JB Dynamics. All rights reserved.
            </Text>
          </View> 
        </View>
      )}>
        <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the URL from the root
          options={{
            drawerLabel: 'Home',
            title: 'JB Dynamics',
            drawerIcon: () => (
              <Icon name='home' size={25} color='#6b8f71' /> // Inlined icon size and color for Home
            ),
            drawerLabelStyle: { fontSize: 18 }, // Inlined font size for label
          }}
        />
        <Drawer.Screen
          name="settings" // This is the name of the page and must match the URL from the root
          options={{
            drawerLabel: 'Settings',
            title: 'Settings',
            drawerIcon: () => (
              <Icon name='cogs' size={25} color='#3e7139' /> // Inlined icon size and color for Settings
            ),
            drawerLabelStyle: { fontSize: 18 }, // Inlined font size for label
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

// Avatar styling similar to the one in the LogInPage
const styles = StyleSheet.create({
  avatarContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
