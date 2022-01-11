import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'

import {firestore} from '../Firebase'
import {doc,onSnapshot} from "firebase/firestore"

import Colors from "../Colors"

const Wait = (props) => {
    
    let title = props.title
    let document = props.document

    let data = doc(firestore, document)
    
    const [time, setTime] = useState(0)

    useEffect(() => {
        let isMounted = true;
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
                The Average Wait Time at the {title} is
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
    shadowOffset: { width: 3, height: 4 },
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