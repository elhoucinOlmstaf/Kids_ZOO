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
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// screens
import Log_In from "../Sceens/Log_In";
import Sign_Up from "../Sceens/Sign_Up";
import HomeScreen from "../Sceens/HomeScreen";
import SplashScreen from "../Sceens/SplashScreen";
import UserResetPassword from "../Sceens/userRestePassword";
import UserProfileScreen from "../Sceens/UserProfileScreen";
import EditeProfileScreen from "../Sceens/EditeProfileScreen";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

// stacks
const StackApp = () => {
  return (
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
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="UserResetPassword" component={UserResetPassword} />
      <Stack.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
        options={{ title: "My Profile" }}
      />
      <Stack.Screen
        name="EditeProfileScreen"
        component={EditeProfileScreen}
        options={{ title: "Create New Profile" }}
      />
    </Stack.Navigator>
  );
};

const ss = async () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EditeProfileScreen"
        component={EditeProfileScreen}
        options={{ title: "Create New Profile" }}
      />
    </Stack.Navigator>
  );
};

const AppDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="StackApp">
        <Drawer.Screen name="AppDrawer" component={StackApp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default AppDrawer;
