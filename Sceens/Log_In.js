import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "../DataBase/FireBase/Firebase";
import { auth } from "firebase/auth";
import { Entypo } from "@expo/vector-icons";

const Log_In = ({ navigation }) => {
  // Variables
  const BgImage = require("../Images/template1.png");
  const [Email, setEmail] = useState("");
  const [passWord, setpassWord] = useState("");
  const [IsLogged, setIsLogged] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [ShowEye, setShowEye] = useState(true);
  const [userData, setuserData] = useState([]);

  //log in
  const handleLogin = () => {
    setErrortext("");
    if (!Email) {
      alert("Please fill Email");

      return;
    }
    if (!passWord) {
      alert("Please fill Password");

      return;
    }
    setIsLogged(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(Email, passWord)
      .then((res) => {
        firebase.auth().onAuthStateChanged((userData) => {
          setuserData(userData);
          const jsonValue = JSON.stringify(userData);
          AsyncStorage.setItem("userData", jsonValue);
        });
      })
      .then((user) => {
        navigation.replace("HomeScreen");
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/invalid-email") {
          setIsLogged(false);
          setErrortext(
            error.message +
              " " +
              "make sure to remove the space at the end of your email"
          );
        } else if (error.code === "auth/user-not-found") {
          setIsLogged(false);
          setErrortext("No User Found");
        } else {
          setIsLogged(false);
          setErrortext("Please check your email id or password");
        }
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={BgImage} resizeMode="cover" style={styles.image}>
        <View style={{ alignItems: "center", marginTop: -50 }}>
          <View style={styles.sectionStyle}>
            <Entypo
              style={styles.imageStyle}
              name="mail"
              size={24}
              color="black"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Your Eamil...."
              value={Email}
              onChangeText={(Email) => setEmail(Email)}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="email"
            />
          </View>
          <View style={styles.sectionStyle}>
            <Entypo
              style={styles.imageStyle}
              name="lock"
              size={24}
              color="black"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Your Password...."
              value={passWord}
              onChangeText={(passWord) => setpassWord(passWord)}
              secureTextEntry={ShowEye ? true : false}
            />
            <Entypo
              onPress={() => setShowEye(!ShowEye)}
              style={styles.eye}
              name={ShowEye ? "eye-with-line" : "eye"}
              size={24}
              color="black"
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("UserResetPassword")}
          >
            <Text style={styles.forgor}>Forgot Your Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => handleLogin()}
          >
            {IsLogged === false ? (
              <Text style={styles.loginText}>LOGIN</Text>
            ) : (
              <ActivityIndicator size="large" color="#00ff00" />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.SignUpBtn}
            onPress={() => navigation.navigate("Sign_Up")}
          >
            <Text style={styles.SignupText}>Sig UP</Text>
          </TouchableOpacity>
          {errortext != "" ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}
        </View>
      </ImageBackground>
    </View>
  );
};
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: Math.round(windowHeight),
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: "black",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
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
  forgor: {
    color: "black",
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 5,
    color: "orange",
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
  SignupText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  eye: {
    marginRight: 10,
  },
});

export default Log_In;
