import {
  Dimensions,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import firebase from "../../DataBase/FireBase/Firebase";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const Setting = () => {
  const navigation = useNavigation();
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

  const review = () => {
    const androidPackageName = 982107779;
    // Open the Android Play Store in the browser -> redirects to Play Store on Android
    Linking.openURL(
      `https://play.google.com/store/apps/details?id=${androidPackageName}&showAllReviews=true`
    );
    // Open the Android Play Store directly
    Linking.openURL(
      `market://details?id=${androidPackageName}&showAllReviews=true`
    );
  };
  return (
    <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
      <TouchableOpacity
        style={styles.elements}
        onPress={() => navigation.navigate("EditeProfileScreen")}
      >
        <Text style={styles.text}>Edit profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.elements} onPress={() => review()}>
        <Text style={styles.text}>Rate My App</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("AboutMe")}
        style={styles.elements}
      >
        <Text style={styles.text}>About Me</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.elements} onPress={() => signOut()}>
        <Text style={styles.text}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  elements: {
    backgroundColor: "tomato",
    width: width / 1.7,
    marginVertical: 10,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
