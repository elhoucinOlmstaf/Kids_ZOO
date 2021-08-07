import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
} from "react-native";

import { auth } from "firebase/auth";
import firebase from "../DataBase/FireBase/Firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);
  const [redirect, setRedirect] = useState("");

  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const getUserData = useCallback(async () => {
    const response = await AsyncStorage.getItem("userData");
    setRedirect(response ? "HomeScreen" : "Log_In");
  }, []);

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (redirect) {
      setAnimating(true);
      navigation.replace(redirect);
    }
  }, [redirect]);
  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: Dimensions.get("window").width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      delay: 2000,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, fadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Animated.Image
          style={[styles.image, { opacity: fadeAnim }]}
          source={require("../Images/logo.png")}
        />
        <Animated.View style={[styles.logoContainer, { marginLeft: moveAnim }]}>
          <Text style={[styles.logoText]}>D</Text>
          <Animated.Text style={[styles.logoText, { opacity: fadeAnim }]}>
            evscamp
          </Animated.Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#52b372",
  },
  logoText: {
    fontSize: 35,
    marginTop: 20,
    color: "white",
    fontWeight: "700",
  },
  contentContainer: {
    top: "40%",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    flexDirection: "row",
  },
});
