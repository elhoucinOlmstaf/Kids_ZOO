import React, { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";

import SpalshScreenAnimation from "../Components/Lottie/SpalshScreenAnimation";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);
  const [redirect, setRedirect] = useState("");
  const getUserData = useCallback(async () => {
    const response = await AsyncStorage.getItem("userData");
    setRedirect(response ? "HomeScreen" : "Log_In");

  }, []);

  useEffect(() => {
    setTimeout(() => {
      getUserData();
    }, 5500);
  }, []);

  useEffect(() => {
    if (redirect) {
      setAnimating(true);
      navigation.replace(redirect);
    }
  }, [redirect]);

  return (

      <View style={styles.container}>
        <SpalshScreenAnimation />
      </View>

  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
