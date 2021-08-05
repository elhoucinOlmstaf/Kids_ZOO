import React, { useState, useEffect } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import firebase from "firebase";
import AppLoading from "expo-app-loading";
import useFonts from "../hooks/useFonts";

export default function UserProfileScreen({ navigation }) {
  const [userData, setUserData] = useState("");
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  const getUserData = async () => {
    const user = firebase.auth().currentUser;
    if (user !== null) {
      await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((documentSnapshot) => {
          if (documentSnapshot.exists) {
            setUserData(documentSnapshot.data());
          }
        });
    }
  };

  getUserData();

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.imgContainer}>
          {userData.photoURL === null ? (
            <Image
              style={styles.img}
              source={{
                uri: "https://image.flaticon.com/icons/png/512/3177/3177440.png",
              }}
            />
          ) : (
            <Image style={styles.img} source={{ uri: userData.photoURL }} />
          )}
        </View>
        <Text style={{ fontFamily: "MontserratBold", fontSize: 43 }}>
          {userData.displayName}
        </Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infText}>I Am {userData.displayName}</Text>
        <Text style={styles.infText}>I Am {userData.age}</Text>
        <Text style={styles.infText}>I Am A Productive person</Text>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("EditeProfileScreen")}
      >
        <Text style={styles.btnText}>Edite Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  imgContainer: {
    width: 150,
    height: 150,
    marginVertical: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    borderRadius: 100,
    width: 150,
    height: 150,
    borderColor: "red",
    borderWidth: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 2,
    fontFamily: "MontserratBold",
  },
  info: {
    marginVertical: 30,
    marginHorizontal: 20,
    marginTop: 40,
  },
  infText: {
    margin: 7,
    fontFamily: "sweetcandy",
    fontSize: 40,
    color: "blue",
    textAlign: "center",
  },
  btn: {
    alignItems: "center",
    paddingBottom:100
  },
  btnText: {
    padding: 10,
    backgroundColor: "#F93822FF",
    fontFamily: "MontserratBold",
    fontSize: 23,
    color: "#fff",
    borderRadius: 15,
  },
});
