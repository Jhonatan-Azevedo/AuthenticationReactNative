import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MyTextInput from '../components/MyTextInput'
import { color } from '../utils/colors'


export function SignInScreen() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    return (        
        <View style={styles.container__signIn}>
            <Text>Sign In Screen</Text>
            <MyTextInput placeholder='Email' value={email} setValue={setEmail} inputPass={false} nameIcon="email" />
            <MyTextInput placeholder='Passoword' value={pass} setValue={setPass} inputPass={true} nameIcon="lock-closed-outline"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container__signIn: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.first ,
    },

    input: {
        margin: 5,
        padding: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#555",
    }
})