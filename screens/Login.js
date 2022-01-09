import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity,  } from 'react-native'
import {auth} from '../Firebase'
import {
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword} 
    from "firebase/auth";


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Profile")
            }
        })

        return unsubscribe
    }, [])

   const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }
   const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
   }

    return (
        <KeyboardAvoidingView
        style = {styles.container}
        behavior = "padding"
        >
            <View style = {styles.inputContainer}>
                <TextInput 
                placeholder="email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
                
                />
                <TextInput 
                placeholder="password"
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={handleLogin}
                style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={handleSignUp}
                style={styles.buttonOutline}
                >
                    <Text style={styles.buttonOutlineText}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        backgroundColor: "white",
        width: '80%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        fontSize: 18
      },
      inputContainer: {
          width: '80%',
      },
      buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
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
        width: "100%",
        marginTop: 5, 
        borderColor: '#D75A5A',
        borderWidth: 2,
        padding: 15,
        borderRadius: 10,
      },
      buttonOutlineText: {
        color: '#D75A5A',
        fontWeight: '700',
        fontSize: 15
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 15
      },
})
