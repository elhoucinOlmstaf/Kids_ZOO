import AboutMe from "../Screens/Setting/AboutMe"
import EditeProfileScreen from "../Screens/EditeProfileScreen";
import Facts from "../Screens/Facts/Facts"
import HomeScreen from "../Screens/HomeScreen";
import HomeShowCategories from "../Screens/HomeShowCategories";
import JokesCategory from "../Screens/Jokes/JokesCategory";
import LearningPageShow from "../Screens/learning/LearningPageShow";
import Log_In from "../Screens/Log_In";
import { NavigationContainer } from "@react-navigation/native";
import QuizeHome from "../Screens/Quize/QuizeHome";
import QuizeShowPage from "../Screens/Quize/QuizeShowPage";
import React from "react";
import ShowStories from "../Screens/stories/ShowStories";
import Sign_Up from "../Screens/Sign_Up";
import SplashScreen from "../Screens/SplashScreen";
import SupportMe from "../Screens/Setting/SupportMe"
import UserProfileScreen from "../Screens/UserProfileScreen";
import UserResetPassword from "../Screens/userRestePassword";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// screens

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
      <Stack.Screen name="JokesCategory" component={JokesCategory} />
      <Stack.Screen name="SupportMe" component={SupportMe} />
      <Stack.Screen name="Facts" component={Facts} />
      <Stack.Screen name="AboutMe" component={AboutMe} />
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
        name="HomeShowCategories"
        component={HomeShowCategories}
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
      <Stack.Screen
        name="QuizeHome"
        component={QuizeHome}
        options={() => ({
          title: "Quizes",
        })}
      />
      <Stack.Screen
        name="QuizeShowPage"
        component={QuizeShowPage}
        options={({ route }) => ({
          title: route.params.item.name,
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
