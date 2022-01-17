import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import {firestore} from '../Firebase'
import {
  onSnapshot, 
  collection, 
  doc, 
   } from "firebase/firestore"

import Colors from "../Colors"



const Wait = () => {

  const [porchVar, setPorchVar] = useState([{hours: "Loading...", id: doc.id}])
  const [porchDataWait, setPorchDataWait] = useState([{hours: "Loading...", id: "loading"}]);
  const [nomptonsDataWait, setNomptonsDataWait] = useState([{hours: "Loading...", id: "loading"}]);
  
  let avgs = doc(firestore, "Averages/rWIghnvyYMOHMNsEXtlp")
  
  useEffect(() => { 

    onSnapshot(collection(firestore, "Nomptons"), (snapshot) => (
      setNomptonsDataWait(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))))
      );
    onSnapshot(collection(firestore, "Porch"), (snapshot) => (
      setPorchDataWait(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))))
      );
      
      

    function listenToDocument() {
      onSnapshot(avgs, (docSnapshot) => {
        if (docSnapshot.exists()) {
          const docData = docSnapshot.data();
          setPorchVar(docData)
          
        }
       });
    }
    
   //takes average and updates doc
   
    listenToDocument()
  }, [])

  useEffect(() => {
    async function average() {
       const grades = await nomptonsDataWait.map((nomptonsDataWait) => {
       return (nomptonsDataWait.minutes)
     })  
  
       function getAvg(grades) {
         const total = grades.reduce((acc, c) => acc + c, 0);
         return total / grades.length
       }
  
       const average = getAvg(grades);
       console.log(average)
    }
     average()
  }, [])
  

  return (
  <View style = {styles.container}>

      <View style={styles.mainWaitTimeView}>
            <Text style={styles.waitTimeHeaderText}>
              Porch
            </Text>
            <Text style={styles.waitText}>
              Wait Time
            </Text>
            <Text style = {styles.waitText}>
                Hours: {porchVar.porchAvgHours}
            </Text>
            <Text style = {styles.waitText}>
                Minutes: {porchVar.porchAvgMinutes}
            </Text>
      </View>

      <View style={styles.waitTimeView}>
        <Text style={styles.waitTimeHeaderText}>
          Nomptons
        </Text>
            <Text style={styles.waitText}>
              Wait Time
            </Text>
            <Text style = {styles.waitText}>
                Hours: {porchVar.nomptonsAvgHours}
            </Text>
            <Text style = {styles.waitText}>
                Minutes: {porchVar.nomptonsAvgMinutes}
            </Text>
      </View>
      <View style={styles.waitTimeView}>
        <Text style={styles.waitTimeHeaderText}>
          Nomptons
        </Text>
            <Text style={styles.waitText}>
              Wait Time
            </Text>
            <Text style = {styles.waitText}>
                Hours: {porchVar.nomptonsAvgHours}
            </Text>
            <Text style = {styles.waitText}>
                Minutes: {porchVar.nomptonsAvgMinutes}
            </Text>
      </View>
  </View>
  )
}


export default Wait

const styles = StyleSheet.create({

  container: {
    alignItems: "center",
    justifyContent: 'center',
  },
  mainWaitTimeView: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: Colors.lighterDark,
    borderRadius: 10,
    width: "92%",
    padding: 4,
    marginTop: 5,
    shadowColor: Colors.primary,
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 1,
    elevation: 5,
    shadowOpacity: 0.8,
  },
  waitTimeView: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: Colors.lighterDark,
    borderRadius: 10,
    width: "92%",
    padding: 4,
    marginTop:10,
    shadowColor: Colors.primary,
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 1,
    elevation: 5,
    shadowOpacity: 0.8,
  },
  waitTimeTextView: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: Colors.lighterDark,
    borderRadius: 10,
    width: "92%",
    padding: 4,
    marginLeft: 6,
    shadowColor: Colors.primary,
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 1,
    elevation: 5,
    shadowOpacity: 0.8
  },
  waitTimeHeaderText: {
    color: "white",
    fontSize: 30,
  },
    waitText: {
     fontWeight: '700',
     fontSize: 17,
     color: "white",
    },
    
})