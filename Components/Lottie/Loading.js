import { Dimensions, View } from "react-native";

import LottieView from "lottie-react-native";
import React from "react";

const Loading = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop:  height - height + 170,
      }}
    >
      <LottieView
        style={{
          width: width / 2,
          height: height / 2,
        }}
        autoPlay
        source={require("../../assets/72212-loading.json")}
      />
    </View>
  );
};

export default Loading;
