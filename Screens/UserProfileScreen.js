import React, { useState } from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

import AppLoading from "expo-app-loading";
import useFonts from "../hooks/useFonts";

export default function UserProfileScreen({ navigation, route }) {
  const [IsReady, SetIsReady] = useState(false);
  const Data = route.params.data;
  const LoadFonts = async () => {
    await useFonts();
  };

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
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.imgContainer}>
          {Data.photoURL === null ? (
            <Image
              style={styles.img}
              source={{
                uri: "https://image.flaticon.com/icons/png/512/3177/3177440.png",
              }}
            />
          ) : (
            <Image style={styles.img} source={{ uri: Data.photoURL }} />
          )}
        </View>
        <Text style={{ fontFamily: "MontserratBold", fontSize: 43 }}>
          {Data.displayName}
        </Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infText}>I Am {Data.displayName}</Text>
        <Text style={styles.infText}>I Am {Data.age}</Text>
        <Text style={styles.infText}>
          I Am A Productive person who likes to keep learning new things
        </Text>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("EditeProfileScreen")}
      >
        <Text style={styles.btnText}>Edite Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  imgContainer: {
    width: 150,
    height: 150,
    marginVertical: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    borderRadius: 100,
    width: 150,
    height: 150,
    borderColor: "red",
    borderWidth: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 2,
    fontFamily: "MontserratBold",
  },
  info: {
    marginVertical: 30,
    marginHorizontal: 20,
    marginTop: 40,
  },
  infText: {
    margin: 7,
    fontFamily: "sweetcandy",
    fontSize: 40,
    color: "blue",
    textAlign: "center",
  },
  btn: {
    alignItems: "center",
    paddingBottom: 100,
  },
  btnText: {
    padding: 10,
    backgroundColor: "#F93822FF",
    fontFamily: "MontserratBold",
    fontSize: 23,
    color: "#fff",
    borderRadius: 15,
  },
});
