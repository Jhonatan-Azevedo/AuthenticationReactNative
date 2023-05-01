import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import MyTextInput from '../components/MyTextInput'
import { color } from '../utils/colors'
import FontAwesome5Brands from "react-native-vector-icons/FontAwesome5"


export function SignInScreen() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    return (        
        <View style={styles.container__signIn}>
            <Image source={require('./../assets/grocery-shopping-amico.png')} style={styles.image} />
            <View style={styles.view__input}>
                <MyTextInput placeholder='Email' value={email} setValue={setEmail} inputPass={false} nameIcon="email" />
                <MyTextInput placeholder='Passoword' value={pass} setValue={setPass} inputPass={true} nameIcon="lock-closed-outline" />

                <TouchableOpacity style={styles.btnSend__signIn}>
                    <Text style={styles.textBtnSend__signIn}>Entrar</Text>
                </TouchableOpacity>
                <View style={styles.viewDiv__signIn}>
                    <View style={styles.lineDiv__signIn}></View>
                    <Text style={styles.textLineDiv__signIn}>OU</Text>
                    <View style={styles.lineDiv__signIn}></View>
                </View>

                <Text style={{textAlign: 'center', marginBottom: 10}}>Entrar com</Text>
                <View style={styles.viewBtnIcons__signIn}>
                    <TouchableOpacity style={styles.btnIconSend__signIn}>
                        <FontAwesome5Brands name="google" size={24} color={color.third} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnIconSend__signIn}>
                        <FontAwesome5Brands name="facebook" size={26} color={color.third} />
                    </TouchableOpacity>
                </View>
            </View>
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

    view__input: {
        width: "90%"
    },

    input: {
        margin: 5,
        padding: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#555",
    },

    image: {
        width: 250,
        height: 250,
    },

    btnSend__signIn: {
        width: '100%',
        padding: 10,
        backgroundColor: color.second,
        borderRadius: 50,
        marginVertical: 20,
        alignItems: 'center'
    },

    textBtnSend__signIn: {
        color: color.third,
        fontSize: 20,
        fontWeight: 'bold',
    },
    viewDiv__signIn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    lineDiv__signIn: {
        width: '45%',
        height: 2,
        backgroundColor: color.fifth
    },

    textLineDiv__signIn: {
        fontSize: 16,
    },

    viewBtnIcons__signIn: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
    },

    btnIconSend__signIn: {
        width: '15%',
        padding: 10,
        backgroundColor: color.fifth,
        borderRadius: 50,
        alignItems: 'center'
    }
})