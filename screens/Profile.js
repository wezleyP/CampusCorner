import {useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
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
            <Text>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.buttonOutline}
                >
                    <Text style={styles.buttonOutlineText}>
                        Sign Out
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.push("Home")}
                style={styles.buttonOutline}
                >
                    <Text style={styles.buttonOutlineText}>
                        Home
                    </Text>
                </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        backgroundColor: 'white',
        width: "80%",
        marginTop: 5, 
        borderColor: '#D75A5A',
        borderWidth: 2,
        padding: 15,
        borderRadius: 10,
      },
      
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 15
      },
})
