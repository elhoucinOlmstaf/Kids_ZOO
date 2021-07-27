import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
// screens
import Log_In from "../Sceens/Log_In";
import Sign_Up from "../Sceens/Sign_Up";
import HomeScreen from "../Sceens/HomeScreen";
import SplashScreen from "../Sceens/SplashScreen";
import UserResetPassword from "../Sceens/userRestePassword";

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// stacks
const StackApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="Log_In"
          component={Log_In}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign_Up"
          component={Sign_Up}
          options={{
            title: "Create Account",
            headerStyle: { backgroundColor: "#fcf5f3" },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="UserResetPassword" component={UserResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackApp;
