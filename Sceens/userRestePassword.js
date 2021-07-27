import React, { useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";
import { Button, Input, Icon } from "react-native-elements";
import firebase from "../DataBase/FireBase/FireBase";
import { auth } from "firebase/auth";
import { Entypo } from "@expo/vector-icons";

const UserResetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const reset = async () => {
    setShowLoading(true);
    if (!email) {
      setShowLoading(false);
      alert("Please fill Email");
      return;
    }
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      setShowLoading(false);
    } catch (e) {
      setShowLoading(false);
      Alert.alert(e.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionStyle}>
        <Entypo style={styles.imageStyle} name="mail" size={24} color="black" />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Eamil...."
          value={email}
          onChangeText={(email) => setEmail(email)}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="email"
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => reset()}>
        {showLoading === false ? (
          <Text style={styles.loginText}>reset password</Text>
        ) : (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Log_In")}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      {showLoading === true ? (
        <Text style={styles.link}>
          The link to reset your password has been sent to your email address
        </Text>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  textInput: {
    flex: 1,
  },
  sectionStyle: {
    height: 55,
    width: "85%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    borderRadius: 50,
    margin: 10,
  },
  imageStyle: {
    padding: 15,
  },
  loginBtn: {
    width: "60%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 27,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
      textAlign:"center",
      color:"red",
      fontSize:18
  }
});

export default UserResetPassword;
