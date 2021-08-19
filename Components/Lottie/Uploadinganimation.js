import React from "react";
import LottieView from "lottie-react-native";
import { View, Dimensions } from "react-native";

const Uploadinganimation = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop:  height - height + 260,
      }}
    >
      <LottieView
        style={{
          width: width / 3,
          height: height / 3,
        }}
        autoPlay
        source={require("../../assets/4510-uploading.json")}
      />
    </View>
  );
};

export default Uploadinganimation;
