import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import { 
  getDoc, 
  
  collection, 
  doc, 
  addDoc,
  
} from "firebase/firestore";
import {firestore} from '../Firebase'

import Footer from '../Components/Footer'
import Wait from '../Components/Wait'

import Colors from "../Colors"

import RNPickerSelect from 'react-native-picker-select';

const Home = () => {

  
  
  
  //form
  const [dropDown, setDropDown] = useState('Select an area...')
  const [textMinutes, setTextMinutes] = useState('')
  const [textHours, setTextHours] = useState('')
  const date = new Date();
  
  
  const data = collection(firestore, dropDown)
  const navigation = useNavigation()

  const submitForm = () => {
    if (isNaN(parseFloat(textHours) || parseFloat(textMinutes)) || dropDown == 'Select an area...') {
      alert("Hey ")
    } else {
      async function addNewDoc() {
        const newDoc = await addDoc(data, {
          hours: parseFloat(textHours),
          minutes: parseFloat(textMinutes),
          time: date.toString().slice(0, 24)
          }); 
        }
        addNewDoc()
        alert("Thank You!")
    } //if
  }//addNewDoc()
// scroll view
// include the title of wiat times and take out the average sentence
    return (
      <View style = {styles.container}>
        <TouchableOpacity  onPress={() => navigation.navigate('Data')}>
            <Text style = {styles.topButton}>
              Want to see the latest submissions? 
              Click Here!
            </Text>
          </TouchableOpacity>

          <ScrollView style= {styles.scroll}>
            <Wait/>
          </ScrollView>

        <View style={styles.formView}>
          <Text style={styles.text}>
            Want a chance to win free gift cards?
          </Text>
          <Text style={styles.text}>
            Submit your Wait Time at a bar below!
          </Text>
          <Text style={styles.smallText}>
            Hours
          </Text>
            <TextInput
              value={textHours}
              style={styles.input}
              placeholder=''
              maxLength={1}
              textAlign={'center'}
              onChangeText={(textHours) => setTextHours(textHours)}
            />
            <Text style={styles.smallText}>
             Minutes
            </Text>
            <TextInput
              value={textMinutes}
              style={styles.input}
              placeholder=''
              maxLength={2}
              textAlign={'center'}
              onChangeText={(textMinutes) => setTextMinutes(textMinutes)}
            />
          <View style={styles.dropDown}>
           <RNPickerSelect
           style={{backgroundColor: 'black', alignItems: 'center',justifyContent: 'center'}}
              onValueChange={
                (value) => {
                  if (value != null) {
                    setDropDown(value)
                  }
                }
              }
              items={[
                { label: 'Porch', value: 'Porch' },
                { label: 'Nomptons', value: 'Nomptons' },
            ]}
           >
             <Text style = {{fontSize: 20, color: Colors.lighterDark}}>
               {dropDown}
             </Text>
           </RNPickerSelect>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => submitForm()}
            >
              <Text style={styles.buttonText} >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          </View>

        
        

       <Footer />
      </View>
    )
}

export default Home






/*
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
*/














const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topButton: {
    fontSize: 15, 
    color: Colors.dark, 
    marginTop: 8, 
    backgroundColor: Colors.primary, 
    borderRadius: 10, 
    padding: 5
  },
  //form
  formView: {
    alignItems: 'center',
     justifyContent: 'center',
     width: "95%",
     backgroundColor: Colors.lighterDark,
     padding: 10,
     borderRadius: 4,
     marginTop: 8,
      shadowColor: Colors.primary,
      shadowOffset: { width: 2, height: 3 },
      shadowRadius: 1,
      elevation: 5,
      shadowOpacity: 0.8
    },
    text: {
        fontWeight: '700',
        fontSize: 18,
        color: "white",
      },
        smallText: {
            fontSize: 15,
            color: "white"
        },
    input: {
      backgroundColor: Colors.primary,
      width: "75%",
      alignItems: 'center',
      justifyContent: 'center',
      
      padding: 5,
      fontSize: 20,
      borderRadius: 5
    },
    dropDown: {
      backgroundColor: Colors.primary,
      width: "75%",
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 14,
      padding: 5,
      fontSize: 25,
      borderRadius: 5
    },
        buttonContainer: {
          width: '60%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 13
        },
        button: {
          backgroundColor: Colors.primary,
          width: "100%",
          padding: 10,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        },
        buttonOutline: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          width: "80%",
          
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

//Wait 
scroll: {
 height: 100
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