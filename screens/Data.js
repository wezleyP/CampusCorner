
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

    const [dataStrings, setdataStrings] = useState([{hours: "Loading...", id: "loading"}]);
    
    useEffect(
      () => onSnapshot(collection(firestore, "test"), (snapshot) => 
        setdataStrings(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
      ),[]); 


    return (
        <View style = {styles.container}>
            <View  style={styles.scroll}>
              <ScrollView>
                
                  
                    {dataStrings.map((dataStrings) => (
                      <View style ={styles.dynamicView}key={dataStrings.id}>
                        <Text style={styles.textsmaller}>
                         Date submitted: {dataStrings.time}
                        </Text>
                        <Text style={styles.text} >
                         Hours: {dataStrings.hours}
                        </Text>
                        <Text style={styles.text}>
                         Minutes: {dataStrings.minutes}
                        </Text>
                        
                      </View>
                      
                    ))}
                  
                
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
      dynamicView:{
        backgroundColor: Colors.dark,
        marginTop: 5,
        padding: 3,
        borderRadius: 5
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
      },
      textsmaller: {
          fontSize: 11,
          color: "white"
      }
})
