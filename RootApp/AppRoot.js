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
import Log_In from "../Screens/Log_In";
import Sign_Up from "../Screens/Sign_Up";
import HomeScreen from "../Screens/HomeScreen";
import SplashScreen from "../Screens/SplashScreen";
import UserResetPassword from "../Screens/userRestePassword";
import UserProfileScreen from "../Screens/UserProfileScreen";
import EditeProfileScreen from "../Screens/EditeProfileScreen";
import learningPage from "../Screens/learning/learningPage";
import LearningPageShow from "../Screens/learning/LearningPageShow";
import ShowStories from "../Screens/stories/ShowStories";

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
      <Stack.Screen
        name="learningPage"
        component={learningPage}
        options={({ route }) => ({
          title: route.params.Title,
          headerStyle: {
            backgroundColor: "tomato",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      />
      <Stack.Screen
        name="LearningPageShow"
        component={LearningPageShow}
        options={({ route }) => ({
          title: route.params.Title,
        })}
      />
      <Stack.Screen
        name="ShowStories"
        component={ShowStories}
        options={({ route }) => ({
          title: route.params.title,
        })}
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
