import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { auth } from "firebase/auth";

import firebase from "../DataBase/FireBase/FireBase";
const windowHeight = Dimensions.get("window").height;
const Sign_Up = ({ navigation }) => {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [userData, setuserData] = useState([]);
  const [IsLogged, setIsLogged] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [ShowEye, setShowEye] = useState(true);
  // const passwordInputRef = createRef();

  const handleSignUp = () => {
    setErrortext("");
    if (!FullName) return alert("Please fill Name");
    if (!Email) return alert("Please fill Email");
    if (!Password) return alert("Please fill Address");
    setIsLogged(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then((user) => {
        alert("Registration Successful. Please Login to proceed");
        console.log(user);
        if (user) {
          firebase
            .auth()
            .currentUser.updateProfile({
              displayName: FullName,
            })
            .then(() => navigation.replace("Log_In"))
            .then(() => {
              firebase.auth().onAuthStateChanged((userData) => {
                setuserData(userData);
              });
            })
            .catch((error) => {
              console.log(error);
              setErrortext(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          setErrortext("That email address is already in use!");
          setIsLogged(false);
        } else {
          setErrortext(error.message);
          setIsLogged(false);
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textCon}>
        <Text style={styles.text}>Sign Up</Text>
      </View>
      <View style={styles.inputs}>
        <TextInput
          style={styles.textInput}
          placeholder="First Name ..."
          onChangeText={(FullName) => setFirstNmae(FullName)}
          value={FullName}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Your Email ..."
          value={Email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Password ..."
          value={Password}
          onChangeText={setPassword}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => handleSignUp()}
        >
          <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", marginTop: -5, fontSize: 19 }}>
          Or
        </Text>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>SIGNUP With Google</Text>
        </TouchableOpacity>
        <Text style={styles.HaveAccoun}>
          Already Have An Account Log In Here
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf5f3",
  },
  textCon: {
    alignItems: "center",
    marginTop: windowHeight - windowHeight + 40,
  },
  text: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
  },
  inputs: {
    alignItems: "center",
    marginTop: windowHeight - windowHeight + 30,
  },
  textInput: {
    width: "90%",
    height: 55,
    borderColor: "#000",
    borderWidth: 0.5,
    alignItems: "center",
    borderRadius: 50,
    marginBottom: 25,
    padding: 20,
    backgroundColor: "white",
  },
  loginBtn: {
    width: "70%",
    backgroundColor: "orange",
    borderRadius: 25,
    height: 43,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  HaveAccoun: {
    fontSize: 19,
    marginTop: 33,
  },
});

export default Sign_Up;
