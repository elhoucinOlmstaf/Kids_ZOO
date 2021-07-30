import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Avatar } from "react-native-elements";
import { Header } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { auth } from "firebase/auth";
import firebase from "../DataBase/FireBase/FireBase";
import { useNavigation } from '@react-navigation/native'

const HomeProfileImage = () => {
  const navigation = useNavigation()
  const [user, setUser] = useState();
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return subscriber;
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <Avatar
            onPress={() => navigation.navigate("UserProfileScreen")}
            size="medium"
            rounded
            source={require("../Images/logo.png")}
          />
          <Entypo
            style={styles.imageStyle}
            name="menu"
            size={34}
            color="black"
          />
        </View>
        <View style={styles.TextContainer}>
          <Text
            style={{
              fontSize: 19,
              letterSpacing: 3,
            }}
          >
            Hello
          </Text>
          {user ? (
            <Text
              style={{
                fontSize: 27,
                fontWeight: "bold",
                letterSpacing: 4,
              }}
            >
              {user.displayName ? user.displayName : user}
            </Text>
          ) : null}
        </View>
      </View>
    </View>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  subContainer: {
    backgroundColor: "#d8c9b9",
    height: 250,
  },
  header: {
    marginTop: windowHeight - windowHeight + 35,
    padding: 15,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  TextContainer: {
    alignItems: "center",
    marginTop: -30,
  },
});

export default HomeProfileImage;
