import React from "react";
import LottieView from "lottie-react-native";
import { View, Dimensions } from "react-native";

const QuizeCompAnimation = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LottieView
        style={{
          width: width / 2.5,
          height: height / 2,
        }}
        autoPlay
        source={require("../../assets/4054-smoothymon-clap.json")}
      />
    </View>
  );
};

export default QuizeCompAnimation;
