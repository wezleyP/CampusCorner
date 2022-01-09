import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Colors from "../Colors"

const Home = () => {

    const navigation  = useNavigation()

    return (
        <View>
            <Text>Home</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate("Profile")}
                style={styles.buttonOutline}
                >
                    <Text style={styles.buttonOutlineText}>
                        Profile
                    </Text>
                </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
      },
      button: {
        backgroundColor: '#D75A5A',
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
})
