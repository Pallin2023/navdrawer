import { FontAwesome } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'skyblue',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'Presentación',
            drawerIcon:({color})=>(<FontAwesome name='home' size={30} color={'blue'}></FontAwesome>)
          }}
        />
          <Drawer.Screen
          name="settings" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Settings',
            title: 'Cualidades',
            drawerIcon:({color})=>(<FontAwesome name='truck' size={30} color={'red'}></FontAwesome>)
          }}
        />
             <Drawer.Screen
          name="dashboard" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Dashboard',
            title: 'Contactos',
            drawerIcon:({color})=>(<FontAwesome name='envelope' size={30} color={'orange'}></FontAwesome>)
          }}
        />

         <Drawer.Screen
          name="crud" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Crud',
            title: 'Crud',
            drawerIcon:({color})=>(<FontAwesome name='pencil' size={30} color={'orange'}></FontAwesome>)
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
