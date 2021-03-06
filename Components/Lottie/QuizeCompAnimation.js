import { Dimensions, View } from "react-native";

import LottieView from "lottie-react-native";
import React from "react";

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
