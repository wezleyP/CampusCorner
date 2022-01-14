import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'

import {firestore} from '../Firebase'
import {doc,onSnapshot,collection} from "firebase/firestore"

import Colors from "../Colors"

const Wait = () => {
    
  // front end rendering no logic

  const [porchVar, setPorchVar] = useState([{hours: "Loading...", id: doc.id}])
  
  let porch = doc(firestore, "Averages/rWIghnvyYMOHMNsEXtlp")
  //let nomptons = doc(firestore, "PorchAvg/hgj8GAUqHSLRlxeOIbZD")

  useEffect(
    () => onSnapshot(collection(firestore, "Porch"), (snapshot) => 
      setPorchData(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    ),[]); 
  useEffect(() => {
        
     
    
        

    function listenToDocument() {
      onSnapshot(porch, (docSnapshot) => {
        if (docSnapshot.exists()) {
          const docData = docSnapshot.data();
          setPorchVar(docData)
        }
       });
    }

    listenToDocument()
  }, [])

  return (
    
  <View>
      <View style={styles.mainWaitTimeView}>
        
            <Text style={styles.headerText}>
              Porch
            </Text>
            <Text style = {styles.waitText}>
                Hours: {porchVar.porchAvgHours}
            </Text>
            
            <Text style = {styles.waitText}>
                Minutes: {porchVar.porchAvgMinutes}
            </Text>
        
      </View>

      <View style={styles.waitTimeView}>
        
         <Text style={styles.headerText}>
            Nomptons 
        </Text>
            <Text style = {styles.waitText}>
            Hours: {porchVar.nomptonsAvgHours}
            </Text>
            
            <Text style = {styles.waitText}>
                Minutes: {porchVar.nomptonsAvgMinutes}
            </Text>
       
      </View>
      <View style={styles.waitTimeView}>
        
            <Text style={styles.headerText}>
              Porch
            </Text>
            <Text style = {styles.waitText}>
                Hours: {porchVar.porchAvgHours}
            </Text>
            
            <Text style = {styles.waitText}>
                Minutes: {porchVar.porchAvgMinutes}
            </Text>
        
      </View>
  </View>
  )
}


export default Wait

const styles = StyleSheet.create({
  mainWaitTimeView: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: Colors.lighterDark,
    borderRadius: 10,
    width: "96%",
    padding: 4,
    marginLeft: 6,
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
    width: "96%",
    padding: 4,
    marginLeft: 6,
    shadowColor: Colors.primary,
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 1,
    elevation: 5,
    shadowOpacity: 0.8,
    marginTop: 20
  },
    waitText: {
     fontWeight: '700',
     fontSize: 20,
     color: "white",
    },
    headerText: {
     fontWeight: '700',
     fontSize: 30,
     color: "white",
    },
    space: {
     width: 10
    }
})


/*

*/