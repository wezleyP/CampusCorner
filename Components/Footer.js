import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Colors from "../Colors"

const Footer = () => {

    const navigation  = useNavigation()

    return (
        
        <View style = {styles.footer}>
        
            <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.buttonOutline}
            >
                <Text style = {styles.text}>
                 Home
                </Text>
            </TouchableOpacity>
         
             <Text style={styles.line} />

            <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={styles.buttonOutline}
            >
                <Text style = {styles.text}>
                 Profile
                </Text>
            </TouchableOpacity>
         
        </View>
        
    )
}

export default Footer;

const styles = StyleSheet.create({
    
    text: {
        fontSize: 18,
        alignItems: 'center',
        color: 'white'
    },
    buttonOutline: {

        padding: 10,
        paddingHorizontal: 50
      },
      footer : {
        position: 'absolute',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        bottom: 0,
        width: "100%",
        height: "8%",
        backgroundColor: Colors.lighterDark
    },
    line: {
        backgroundColor: Colors.dark,
        width: 1,
        height: "85%"
    }

})

