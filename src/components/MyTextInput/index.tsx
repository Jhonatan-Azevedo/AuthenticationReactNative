import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import IconFontisto from "react-native-vector-icons/Fontisto"
import IconIonicons from "react-native-vector-icons/Ionicons"

interface IProps {
    placeholder: string,
    value: string,
    setValue: Function,
    inputPass: boolean,
    nameIcon: string,
    
}

export default function MyTextInput({ placeholder, value, setValue, inputPass, nameIcon }: IProps) {
    return (
        <View style={styles.field__input}>
            {nameIcon == 'lock-closed-outline' ?
               <IconIonicons name={nameIcon} size={20} color="#142738" /> :
             <IconFontisto name={nameIcon} size={20} color="#142738" />
            }
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={(value) => setValue(value)}
                secureTextEntry={inputPass}
                placeholderTextColor="#142738"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    field__input: {
        width: '100%',
        margin: 5,
        padding: 6,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#142738",
    },

    input: {
        marginHorizontal: 5,
        width: "90%",
        paddingHorizontal: 3,
        color: "#142738",
    }
})