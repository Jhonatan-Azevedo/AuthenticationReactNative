import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen } from "../screens/SignInScreen";


export function AuthStack() {

    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
        </Stack.Navigator>
    )
}