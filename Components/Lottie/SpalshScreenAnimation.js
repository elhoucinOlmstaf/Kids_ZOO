import React from "react";
import LottieView from "lottie-react-native";
import { View, Dimensions } from "react-native";

const SpalshScreenAnimation = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <LottieView
        style={{
          width: width / 2,
          height: height / 2,
          alignItems: "center",
          justifyContent: "center",
        
        }}
        autoPlay
        source={require("../../assets/17658-lamsa-splash-screen (1).json")}
      />
    </View>
  );
};

export default SpalshScreenAnimation;
