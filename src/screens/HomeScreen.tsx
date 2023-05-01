import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={()  => navigation.navigate('Settings')}>
                <Text>Setting</Text>
            </TouchableOpacity>
        </View>
    )
}