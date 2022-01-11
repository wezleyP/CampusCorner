import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native'

import Footer from '../Components/Footer'
import Wait from '../Components/WaitTimes'
import Colors from "../Colors"

import RNPickerSelect from 'react-native-picker-select';

const Home = () => {
    const navigation  = useNavigation()
  
    return (
      <View style = {styles.container}>
        <View style={styles.formView}>
          <Text style={styles.text}>
            Want a chance to win free gift cards?
          </Text>
          <Text style={styles.text}>
            Submit your Wait Time at a bar below!
          </Text>
            <TextInput
              style={styles.input}
              placeholder='Hours'
            />

            <TextInput
              style={styles.input}
              placeholder='Minutes'
            />
          <View style={styles.dropDown}>
           <RNPickerSelect
           style={{backgroundColor: 'black'}}
              onValueChange={(value) => console.log(value)}
              items={[
                { label: 'Porch', value: 'porch' },
                { label: 'Nomptons', value: 'nomptons' },
                
            ]}
           />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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

  formView: {
   width: "100%",
   backgroundColor: Colors.lighterDark,
   alignItems: 'center',
   justifyContent: 'center'
  },
  text: {
    fontSize: 15,
  },
  input: {
    backgroundColor: Colors.primary,
    width: "75%",
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 5,
    fontSize: 20,
    borderRadius: 5
  },
  dropDown: {
    backgroundColor: Colors.primary,
    width: "75%",
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 5,
    fontSize: 20,
    borderRadius: 5
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