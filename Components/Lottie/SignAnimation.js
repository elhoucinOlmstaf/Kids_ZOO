import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { View, Dimensions, Animated } from "react-native";

const SignAnimation = () => {
  const { width, height } = Dimensions.get("window");
  const progress = useRef(new Animated.Value(0)).current;

  const handleLikeAnimation = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: height - height + 170,
       
      }}
    >
      <LottieView
        style={{
          width: width / 2,
          height: height / 2,
        }}
        progress={progress}
        autoPlay
        speed={-1}
        source={require("../../assets/7646-loading-project3.json")}
      />
    </View>
  );
};

export default SignAnimation;
