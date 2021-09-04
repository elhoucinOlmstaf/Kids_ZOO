import { Dimensions, View } from "react-native";

import LottieView from "lottie-react-native";
import React from "react";

const CuteTigerLoading = () => {
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
        source={require("../../assets/74268-cute-tiger.json")}
      />
    </View>
  );
};

export default CuteTigerLoading;
