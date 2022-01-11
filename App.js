import React, { useEffect } from 'react'
import { LogBox, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Colors from "./Colors"


const Stack = createNativeStackNavigator();




export default function App() {

  

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} 
          options = {{
            title : "Login",
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
              
            },}}/>
      <Stack.Screen name="Profile" component={Profile} 
        options = {{
          title : "Profile",
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            
          },}}/>
        <Stack.Screen name="Home" component={Home}
        options = {{
          title : "Home",
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            
          },}} />
          
      </Stack.Navigator>
      
        
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
