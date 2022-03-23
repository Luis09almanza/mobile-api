import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function NavigationStack(){
    return(
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
