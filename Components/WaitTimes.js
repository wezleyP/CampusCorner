import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'

import {firestore} from '../Firebase'
import {doc,onSnapshot} from "firebase/firestore"

import Colors from "../Colors"

const Wait = (props) => {
    
    let title = props.title

    let porch =  doc(firestore, "Porch/hgj8GAUqHSLRlxeOIbZD")
    let Nomptons =  doc(firestore, "nomptons/qVC1vGsRHUp7uvTib8X6")

    let data = doc(firestore, "Porch/hgj8GAUqHSLRlxeOIbZD")
    
    const [time, setTime] = useState("")



    useEffect(() => {
        
      function listenToDocument() {
        onSnapshot(data, (docSnapshot) => {
          if (docSnapshot.exists()) {
            const docData = docSnapshot.data();
            setTime(docData)
          }
         });
      }

      listenToDocument()
    }, [])

    return (
        <View style={styles.waitTimeView}>
          <Text style={styles.waitTimeHeaderText}>
            {title}
          </Text>
          <View style={styles.waitTimeTextView}>
              <Text style={styles.text}>
                The Average Wait Time at {title} is
              </Text>
              <Text style = {styles.text}>
                  Hours: {time.Hours}
              </Text>
              <Text style = {styles.space}/>
              <Text style = {styles.text}>
                  Minutes: {time.Minutes}
              </Text>
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
    text: {
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