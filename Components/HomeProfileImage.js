import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  ActivityIndicatorBase,
} from "react-native";
import { Avatar } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import firebase from "../DataBase/FireBase/FireBase";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import useFonts from "../hooks/useFonts";

const HomeProfileImage = () => {
  // get user data

  const navigation = useNavigation();
  const [userData, setUserData] = useState("");
  const [isloadingComplet, setisloadingComplet] = useState(false);
  const [IsReady, SetIsReady] = useState(false);

  useEffect(() => {
    var mounted = true;
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        return firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .get()
          .then((documentSnapshot) => {
            if (documentSnapshot.exists) {
              setUserData(documentSnapshot.data());
              setisloadingComplet(true);
            }
          });
      }
    });

    return function cleanup() {
      mounted = false;
    };
  }, []);

  //load fonts
  const LoadFonts = async () => {
    await useFonts();
  };

  //checking if fonts are ready to use
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

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
      <View style={styles.subHeader}>
        {isloadingComplet === false ? (
          <Avatar
            onPress={() => navigation.navigate("UserProfileScreen")}
            size="medium"
            rounded
            containerStyle={{ marginTop: 3 }}
            source={{
              uri: "https://image.flaticon.com/icons/png/512/599/599305.png",
            }}
          />
        ) : (
          <Avatar
            onPress={() => navigation.navigate("UserProfileScreen")}
            size="medium"
            rounded
            containerStyle={{ marginTop: 3 }}
            source={{
              uri: userData.photoURL,
            }}
          />
        )}

        <Entypo
          style={{ marginTop: 6 }}
          name="menu"
          size={44}
          color="black"
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
      <View style={styles.who}>
        <Text
          style={{
            fontFamily: "BubbleLoveDemo",
            fontSize: 30,
          }}
        >
          Hello
        </Text>
        {isloadingComplet ? (
          <Text
            style={{
              fontFamily: "MontserratBold",
              fontSize: 35,
              color: "#990011FF",
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
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  hello: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  who: {
    alignItems: "center",
  },
});

export default HomeProfileImage;
