import { Image, Linking, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import ADmobeBanner from "../../admob/ADmobeBanner";
import AppLoading from "expo-app-loading";
import useFonts from "../../hooks/useFonts";

const AboutMe = () => {
  const [IsReady, SetIsReady] = useState(false);
  //load fonts
  const LoadFonts = async () => {
    await useFonts();
  };

  //checking if fonts are ready to use
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <ScrollView>
    <View style={{ paddingBottom: 16 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("../../Images/myprofile.jpg")}
          style={{
            borderRadius: 100,
            width: 150,
            height: 150,
            borderColor: "red",
            borderWidth: 1,
          }}
        />
      </View>
      <View style={{ alignItems: "center", padding: 15 }} >
        <Text
          style={{
            fontSize: 26,
            fontFamily: "MontserratBold",
            color: "tomato",
          }}
        >
          Hi 👋, I'm Elhoucin
        </Text>
        <ADmobeBanner />
      </View>
      <View style={{ paddingLeft: 23, padding: 10 }}>
        <Text
          style={{ fontSize: 25, lineHeight: 35, fontFamily: "sweetcandy" }}
        >
          I am Elhoucin from Marrakesh Morocco. I am react-native
          developer.MoreOver I am A university English Student. I am a person
          who likes to interact with others and keep learning new things 🌹
        </Text>
      </View>
      <View style={{ padding: 15 }}>
        <Text style={styles.text2}>🔭 I’m currently working on Kids_Zoo</Text>
        <Text style={styles.text2}>
          🌱 I’m currently learning React , typescript
        </Text>
        <Text style={{...styles.text2 ,...{color:"black" , backgroundColor:"skyblue"}}}  onPress={() => {
            Linking.openURL("https://github.com/elhoucinOlmstaf");
          }}>
          👨‍💻 All of my projects are available at
          https://github.com/elhoucinOlmstaf
        </Text>
        <Text style={styles.text2}>
          📫 How to reach me houcinolmostaf@gmail.com
        </Text>
        <Text style={styles.text2}> My Instagram easyglish1</Text>

      </View>
    </View>
    </ScrollView>
  );
};

export default AboutMe;

const styles = StyleSheet.create({
  text2: {
    fontSize: 25,
    lineHeight: 35,
    fontFamily: "sweetcandy",
  },
});
