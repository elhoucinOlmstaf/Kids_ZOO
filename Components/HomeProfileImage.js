import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, ActivityIndicatorBase } from "react-native";
import { Avatar } from "react-native-elements";
import { Header } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { auth } from "firebase/auth";
import firebase from "../DataBase/FireBase/FireBase";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";


const HomeProfileImage = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState("");
  const [isloadingComplet, setisloadingComplet] = useState(false);

  // fonts
  let [fontsLoaded] = useFonts({
    "Inter-SemiBoldItalic":
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
  });

  // get user data
  const getUserData = async () => {
    await firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((documentSnapshot) => {
        setisloadingComplet(false);
        if (documentSnapshot.exists) {
          setUserData(documentSnapshot.data());
        }
      });
  };

  getUserData();

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
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#C2185B" />
      <View style={styles.subContainer}>
        <View style={styles.header}>
          {isloadingComplet === true ? (
            <Avatar
              onPress={() => navigation.navigate("UserProfileScreen")}
              size="medium"
              rounded
              source={{ uri: userData.photoURL }}
            />
          ) : (
            <Avatar
              onPress={() => navigation.navigate("UserProfileScreen")}
              size="medium"
              rounded
              source={{
                uri: "https://image.flaticon.com/icons/png/512/599/599305.png",
              }}
            />
          )}

          <Entypo
            style={{ marginTop: 10 }}
            name="menu"
            size={40}
            color="black"
            onPress={() => navigation.toggleDrawer()}
          />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.hello}>Hello</Text>
          {isloadingComplet ? (
            <Text
              style={{
                fontSize: 19,
                letterSpacing: 3,
              }}
            >
              {userData.displayName}
            </Text>
          ) : (
            <Avatar
              onPress={() => navigation.navigate("UserProfileScreen")}
              size="large"
              rounded
              source={{
                uri: "https://image.flaticon.com/icons/png/512/5229/5229436.png",
              }}
            />
          )}
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
    backgroundColor: "#db9",
    height: 200,
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
  hello: {
    fontSize: 19,
    color: "red",
    fontFamily:"Inter-SemiBoldItalic"
  },
});

export default HomeProfileImage;
