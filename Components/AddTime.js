import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native'

import {firestore} from '../Firebase'
import {doc,onSnapshot} from "firebase/firestore"
import RNPickerSelect from 'react-native-picker-select';

import Colors from "../Colors"

const Add = (props) => {

    

    const [dropDown, setDropDown] = useState('Place')
    const [textMinutes, setTextMinutes] = useState('')
    const [textHours, setTextHours] = useState('')

        const data = collection(firestore, "waitTime")

            async function addNewDoc() {
            const newDoc = await addDoc(data, {
            
            }); }

//console.log(textHours, textMinutes, dropDown)



    return (
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
              placeholder='1'
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
              placeholder='15'
              maxLength={2}
              textAlign={'center'}
              onChangeText={(textMinutes) => setTextMinutes(textMinutes)}
            />
          <View style={styles.dropDown}>
           <RNPickerSelect
           style={{backgroundColor: 'black', alignItems: 'center',justifyContent: 'center'}}
              onValueChange={(value) => setDropDown(value)}
              items={[
                { label: 'Porch', value: 'porch' },
                { label: 'Nomptons', value: 'nomptons' },
            ]}
           >
             <Text style = {{fontSize: 20, color: Colors.lighterDark}}>
               Select your Location...
             </Text>
           </RNPickerSelect>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
            style={styles.button}
            onPress={addNewDoc()}
            >
              <Text style={styles.buttonText} >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          </View>
    )}

export default Add

const styles = StyleSheet.create({
    formView: {
        alignItems: 'center',
         justifyContent: 'center',
         width: "95%",
         backgroundColor: Colors.lighterDark,
         padding: 10,
         borderRadius: 4,
         marginTop: 10,
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
            
})


/*

*/