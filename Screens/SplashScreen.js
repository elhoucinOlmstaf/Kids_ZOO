import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import SpalshScreenAnimation from "../Components/Lottie/SpalshScreenAnimation";

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
    return () => clearTimeout();
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
