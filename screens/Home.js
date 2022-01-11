import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'

import {firestore } from '../Firebase'
import {doc,onSnapshot} from "firebase/firestore"
import Footer from '../Components/Footer'
import Wait from '../Components/WaitTimes'
import Colors from "../Colors"

const Home = () => {
    const navigation  = useNavigation()
  
    return (
      <View style = {styles.container}>
        <ScrollView>
        
          <Wait title ={"Porch"} document = { "Porch/pofevjljX988lklZ1EGC" }/>
        </ScrollView>
        

       <Footer />
      </View>
    )
}

export default Home

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
const data = doc(firestore, "Porch/pofevjljX988lklZ1EGC")
    
    const [time, setTime] = useState(0)

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
*/