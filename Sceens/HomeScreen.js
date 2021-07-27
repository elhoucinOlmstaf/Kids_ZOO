import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { auth } from "firebase/auth";
import firebase from "../DataBase/FireBase/FireBase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return subscriber;
  }, []);
  
  // sign out function
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        AsyncStorage.removeItem("userData");
      })
      .then(() => {
        navigation.navigate("Log_In");
      })
      .catch((error) => console.log(error));
  };

  return (
    <View>
      <Text>HomeScreen</Text>
      {user ? (
        <Text>Welcome {user.displayName ? user.displayName : user.Eamil}</Text>
      ) : null}

      <View>
        <Button title="Sign Out" onPress={() => signOut()} />
      </View>
    </View>
  );
};

export default HomeScreen;
