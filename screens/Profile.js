import {useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Colors from "../Colors"
import Footer from '../Components/Footer'
import { auth } from '../Firebase'

const Profile = () => {

    const navigation  = useNavigation()

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.navigate("Login")
            })
    }
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.buttonOutline}
                >
                    <Text style={styles.buttonOutlineText}>
                        Sign Out
                    </Text>
                </TouchableOpacity>
                
                
            <Footer></Footer>
                
        </View>
        
    )
}

export default Profile

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.dark
      },
      buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
      },
      button: {
        backgroundColor: '#D75A5A',
        width: "100%",
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonOutline: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        width: "80%",
        marginTop: 5, 
        borderWidth: 2,
        padding: 15,
        borderRadius: 10,
      },
      
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 15
      },
      text: {
          fontSize: 30,
          color: "white"
      }
})
