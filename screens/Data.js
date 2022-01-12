
import React, {useState, useEffect}from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native'
import Colors from "../Colors"
import Footer from '../Components/Footer'

import { 
  getDoc, 
  getFirestore, 
  onSnapshot, 
  setDoc, 
  collection, 
  doc, 
  addDoc,
  query, 
  getDocs,
  serverTimestamp
} from "firebase/firestore";
import {firestore} from '../Firebase'
import { auth } from '../Firebase'

const Data = () => {

    const [testingText, setTestingText] = useState('');
  

 async function ReadDocuments () {
  const q = query(collection(firestore, "test"))
  const waitTimes = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    waitTimes.push(doc.data())
  });
  setTestingText(JSON.stringify(waitTimes))
 }
 


    return (
        <View style = {styles.container}>
            <View  style={styles.scroll}>
              <ScrollView>
                <TouchableOpacity onPress = {() => ReadDocuments()}style={styles.button}>
                  <Text style={styles.text}>
                    Button
                  </Text>
                </TouchableOpacity>
                  <Text style={styles.text}>
                    ~ {testingText} ~
                  </Text>
                
              </ScrollView>
            </View>
                
                
            <Footer></Footer>
                
        </View>
        
    )
}

export default Data

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.dark
      },
      scroll: {
        backgroundColor: Colors.lighterDark,
        width: "90%",
        height: "85%",
        bottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
         shadowColor: Colors.primary,
         shadowOffset: { width: 2, height: 3 },
         shadowRadius: 1,
         elevation: 5,
         shadowOpacity: 0.8
      },
      button: {
        backgroundColor: Colors.primary,
        width: "100%",
        padding: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
      },
      text: {
          fontSize: 20,
          color: "white"
      }
})
