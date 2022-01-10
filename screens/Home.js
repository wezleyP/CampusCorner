import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import { auth,firestore } from '../Firebase'
import {collection,doc,getDocs } from "firebase/firestore"
import Footer from '../Components/Footer'

import Colors from "../Colors"


const Home = () => {
    const navigation  = useNavigation()
    
    const [time, setTime] = useState([]);

    

    

    return (
        <View style = {styles.container}>
            <Text style = {styles.headerText}>~Data~</Text>

            <View>
              <Text style = {styles.headerText}>
                {}
              </Text>
            </View>

                <Footer />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
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
        backgroundColor: Colors.primary,
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
      headerText: {
        fontWeight: '700',
        fontSize: 22
      }
})


/*
const [users, setUsers] = useState([]);
      const userCollectionRef = collection(db, "users")

      useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            setUsers(data.docs.map((doc) => ({...doc.data() , id:doc.id})))

            console.log("working")
        }

        getUsers()
      }, [])


      {users.map ((user) => {
                  return (
                    <Text>
                      {""} 
                      <Text key ={user.id}>
                        name: {user.name}
                      </Text>
                      
                    </Text>
                  )
                })}
*/