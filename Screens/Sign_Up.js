import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import SignAnimation from "../Components/Lottie/SignAnimation";
import firebase from "../DataBase/FireBase/Firebase";
const windowHeight = Dimensions.get("window").height;
const Sign_Up = ({ navigation }) => {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [IsSigned, setIsSigned] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [ShowEye, setShowEye] = useState(true);
  // const passwordInputRef = createRef();

  const signUp = () => {
    setErrortext("");
    if (!FullName) return alert("Please fill Name");
    if (!Email) return alert("Please fill Email");
    if (!Password) return alert("Please fill Address");
    setIsSigned(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            displayName: FullName,
            Email,
            photoURL: null,
            description: "",
            age: "",
          });
      })
      .then((res) => {
        alert("Account Created succuffuly . Please Log In To countinue");
        navigation.navigate("Log_In");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setErrortext("That email address is already in use!");
          setIsSigned(false);
        } else {
          setErrortext(error.message);
          setIsSigned(false);
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textCon}>
        <Text style={styles.text}>Sign Up</Text>
      </View>
      <View style={styles.inputs}>
        <View style={styles.inputs}>
          <View style={styles.sectionStyle}>
            <Entypo
              style={styles.imageStyle}
              name="user"
              size={24}
              color="black"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Your FullName...."
              value={FullName}
              onChangeText={(FullName) => setFullName(FullName)}
            />
          </View>
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
              value={Password}
              onChangeText={(Password) => setPassword(Password)}
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
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.loginBtn} onPress={signUp}>
          <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", flexDirection: "row", margin: 15 }}>
        <Text style={styles.HaveAccoun}>Already Have An Account</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Log_In")}>
          <Text
            style={{
              color: "blue",
              fontSize: 17.5,
              marginTop: 13,
              marginLeft: 6,
            }}
          >
            Log In here
          </Text>
        </TouchableOpacity>
      </View>
      {errortext ? (
        <Text style={styles.errorTextStyle}>{errortext}</Text>
      ) : null}
      {IsSigned  ? (
        <View
          style={{
            width: width,
            height: height,
            position: "absolute",
            Bottom: 10,
            opacity: 0.7,
            backgroundColor: "black",
          }}
        >
          <SignAnimation />
        </View>
      ) : null}
    </View>
  );
};
const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf5f3",
  },
  textCon: {
    alignItems: "center",
    marginTop: windowHeight - windowHeight + 50,
  },
  text: {
    color: "red",
    fontSize: 22,
    fontWeight: "bold",
  },
  inputs: {
    alignItems: "center",
    marginTop: windowHeight - windowHeight + 20,
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
    margin: 16,
  },
  imageStyle: {
    padding: 15,
  },
  loginBtn: {
    width: "70%",
    backgroundColor: "tomato",
    borderRadius: 20,
    height: 43,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 19,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  HaveAccoun: {
    fontSize: 17.5,
    marginTop: 13,
    marginLeft: 10,
  },
  eye: {
    marginRight: 15,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});

export default Sign_Up;
