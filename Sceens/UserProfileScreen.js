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

const storage = firebase.storage();

export default function UserProfileScreen({ navigation }) {
  const [userData, setUserData] = useState("");
  const [uploading, setUploading] = useState("");

  const getUserData = async () => {
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
  };

  getUserData();

  return (
    <View style={styles.container}>
      <Text style={styles.ProfileText}>My Profile</Text>
      <View style={styles.subContainer}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{ uri: userData.photoURL }} />
        </View>
        <Text style={styles.name}>{userData.displayName}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infText}>I Am  {userData.displayName}</Text>
        <Text style={styles.infText}>I Am {userData.age}</Text>
        <Text style={styles.infText}>I Am {userData.description}</Text>
        <Text style={styles.infText}>myEami {userData.Email}</Text>
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ProfileText: {
    fontSize: 25,
    fontStyle: "italic",
    letterSpacing: 3,
    marginLeft: 20,
    marginVertical: 20,
    fontWeight: "bold",
    color: "brown",
  },
  subContainer: {
    alignItems: "center",
    marginTop: 60,
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
  },
  info: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
  infText: {
    fontSize: 19,
  },
  btn: {
    alignItems: "center",
  },
  btnText: {
    padding: 10,
    backgroundColor: "orange",
  },
});
