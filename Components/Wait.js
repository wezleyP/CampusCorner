import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'

import {firestore} from '../Firebase'
import {doc,onSnapshot,collection} from "firebase/firestore"

import Colors from "../Colors"

const Wait = () => {
    
  
  
  const [porchVar, setPorchVar] = useState([{hours: "Loading...", id: doc.id}])
  
  let porch = doc(firestore, "Averages/rWIghnvyYMOHMNsEXtlp")
  //let nomptons = doc(firestore, "PorchAvg/hgj8GAUqHSLRlxeOIbZD")
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
      <View style={styles.waitTimeView}>
        
        <View style={styles.waitTimeTextView}>
            <Text style={styles.waitTimeHeaderText}>
              Porch
            </Text>
            <Text style={styles.waitText}>
              Wait Time
            </Text>
            <Text style = {styles.waitText}>
                Hours: {porchVar.porchAvgHours}
            </Text>
            <Text style = {styles.space}/>
            <Text style = {styles.waitText}>
                Minutes: {porchVar.porchAvgMinutes}
            </Text>
        </View>
      </View>
      <View style={styles.waitTimeView}>
        <Text style={styles.waitTimeHeaderText}>
          Nomptons
        </Text>
        <View style={styles.waitTimeTextView}>
            <Text style={styles.waitText}>
              The Average Wait Time at the Porch is
            </Text>
            <Text style = {styles.waitText}>
                Hours: {porchVar.nomptonsAvgHours}
            </Text>
            <Text style = {styles.space}/>
            <Text style = {styles.waitText}>
                Minutes: {porchVar.nomptonsAvgMinutes}
            </Text>
        </View>
      </View>
  </View>
  )
}


export default Wait

const styles = StyleSheet.create({

  waitTimeHeaderText: {
    color: "white",
    fontSize: 40,
  },
  waitTimeView: {
    alignItems: "center",
    justifyContent: 'center',
    flexWrap: "wrap",
  },
  waitTimeTextView: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: Colors.lighterDark,
    borderRadius: 10,
    width: "98%",
    padding: 4,
    marginLeft: 6,
    shadowColor: Colors.primary,
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 1,
    elevation: 5,
    shadowOpacity: 0.8
  },waitTimeHeaderText: {
    color: "white",
    fontSize: 40,
  },
    waitText: {
     fontWeight: '700',
     fontSize: 20,
     color: "white",
    },
    space: {
     width: 10
    }
})


/*

*/