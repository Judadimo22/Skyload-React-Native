import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


import AvailableScreen from "./screens/AvailableScreen";
import StackScreen from "./screens/StackScreen";
import SettingsScreen from './screens/SettingsScreen';
import LoadsScreen from "./screens/LoadsScreen";


const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator()

function Mytabs () {
    return(
        <Tab.Navigator
        initialRouteName="Availables"
        >
            <Tab.Screen name='Availables' component={MyStack}/>
            <Tab.Screen name='Settings' component={SettingsScreen}/>
        </Tab.Navigator>
    )
};

function MyStack () {
    return(
        <HomeStackNavigator.Navigator
        initialRouteName="Stack"
        >
            <HomeStackNavigator.Screen
            name="AvailableScreen"
            component={LoadsScreen}
            />
            <HomeStackNavigator.Screen
            name="Stack"
            component={StackScreen}
            /> 
        </HomeStackNavigator.Navigator>
    )
}


export default function Navigation () {
    return(
        <NavigationContainer>
            <Mytabs/>
        </NavigationContainer>
    )
}