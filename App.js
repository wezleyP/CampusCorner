import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from './screens/Home';
import Data from './screens/Data';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Colors from "./Colors"

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  
  
  return (
    <NavigationContainer>
      <Drawer.Navigator
         screenOptions = {{
          drawerActiveBackgroundColor: Colors.primary,
          drawerInactiveBackgroundColor: Colors.dark,
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerStyle : {
            backgroundColor: Colors.lighterDark,
          }    
        }}
      >
      <Drawer.Screen name="Home" component={Home}
      options = {{
        title : "Campus Corner Lines",
        headerStyle: {
          backgroundColor: Colors.lighterDark,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
          
        },}} />
      <Drawer.Screen name="Login" component={Login} 
          options = {{
            title : "Login",
            headerStyle: {
              backgroundColor: Colors.lighterDark,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
              
            },}}/>
      
      <Drawer.Screen name="Profile" component={Profile} 
        options = {{
          title : "Profile",
          headerStyle: {
            backgroundColor: Colors.lighterDark,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            
          },}}/>
        
          <Drawer.Screen name="Data" component={Data} 
          options = {{
            title : "Recent Submissions",
            headerStyle: {
              backgroundColor: Colors.lighterDark
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
              
            },}}/>
          
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
