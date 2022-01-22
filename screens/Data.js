
import React, {useState, useEffect}from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native'
import Colors from "../Colors"
import Footer from '../Components/Footer'

import { 
  onSnapshot, 
  collection, 
} from "firebase/firestore";
import {firestore} from '../Firebase'

const Data = () => {

  const [porchData, setPorchData] = useState([{hours: "Loading...", id: "loading"}]);
  const [nomptonsData, setNomptonsData] = useState([{hours: "Loading...", id: "loading"}]);
  
  useEffect(
    () => onSnapshot(collection(firestore, "Porch"), (snapshot) => 
      setPorchData(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    ),[]); 
  useEffect(
      () => onSnapshot(collection(firestore, "Nomptons"), (snapshot) => 
      setNomptonsData(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))) 
    ),[]); 

    
    
  return (
      <View style = {styles.container}>
          <View  style={styles.scroll}>
            <ScrollView>         
                
                  {porchData.map((porchData) => (
                    <View style ={styles.dynamicView}key={porchData.id}>
                      <View style={styles.centeredText}>
                        <Text style={styles.headerText}>
                        Porch
                        </Text>
                      </View>
                      <Text style={styles.textsmaller}>
                       Date submitted: {porchData.time}
                      </Text>
                      <Text style={styles.text} >
                       Hours: {porchData.hours}
                      </Text>
                      <Text style={styles.text}>
                       Minutes: {porchData.minutes} 
                      </Text>
                    </View>       
                  ))}
                  {nomptonsData.map((nomptonsData) => (
                    <View style ={styles.dynamicView}key={nomptonsData.id}>
                      <View style={styles.centeredText}>
                        <Text style={styles.headerText}>
                        Nomptons
                        </Text>
                      </View>
                      <Text style={styles.textsmaller}>
                       Date submitted: {nomptonsData.time}
                      </Text>
                      
                      <Text style={styles.text} >
                       Hours: {nomptonsData.hours}
                      </Text>
                      <Text style={styles.text}>
                       Minutes: {nomptonsData.minutes}
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
        width: "100%",
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
      centeredText: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary
      },
      headerText: {
          fontSize: 20,
          color: "white"
      },
      text: {
          fontSize: 20,
          color: "white"
      },
      textsmaller: {
          fontSize: 14,
          color: "white"
      }
})
