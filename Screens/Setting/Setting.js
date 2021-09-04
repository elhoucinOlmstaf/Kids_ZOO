import {
  Dimensions,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import ADmobeBanner from "../../admob/ADmobeBanner";
import { AdMobInterstitial } from "expo-ads-admob";
import { AdMobRewarded } from "expo-ads-admob";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import firebase from "../../DataBase/FireBase/Firebase";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const Setting = () => {
  const navigation = useNavigation();
   function showInterstitial() {
    AdMobInterstitial.setAdUnitID("ca-app-pub-8621076537564643/1923475351");
    AdMobInterstitial.requestAdAsync().then(() => {
      AdMobInterstitial.showAdAsync().catch((e) => console.log(e));
    });
  }
  // sign out function
  const signOut = () => {
    showInterstitial()
    firebase
      .auth()
      .signOut()
      .then(() => {
        AsyncStorage.removeItem("userData");
      })
      .then(() => {
        navigation.navigate("Log_In");
      })
      .catch((error) => console.log(error));
  };

  const review = () => {
    showInterstitial()
    const androidPackageName = "Kids_Zoo";
    // Open the Android Play Store in the browser -> redirects to Play Store on Android
    Linking.openURL(
      `https://play.google.com/store/apps/details?id=${androidPackageName}&showAllReviews=true`
    );
    // Open the Android Play Store directly
    Linking.openURL(
      `market://details?id=${androidPackageName}&showAllReviews=true`
    );
  };

  function MoveToediteProfile(){
    showInterstitial()
    navigation.navigate("EditeProfileScreen")
  }
  function MoveToAboutMe(){
    showInterstitial()
    navigation.navigate("AboutMe")
  }
   // REWARD AD
   function showRewardAds() {
    AdMobRewarded.setAdUnitID("ca-app-pub-8621076537564643/1316615478");
    AdMobRewarded.requestAdAsync().then(() => {
      AdMobRewarded.showAdAsync().catch((e) => console.log(e.message));
    });
  }
  function MovetoSupportMe(){
    showRewardAds()
    navigation.navigate("SupportMe")
  }


  return (
    <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
      <TouchableOpacity
        style={styles.elements}
        onPress={() => MoveToediteProfile()}
      >
        <Text style={styles.text}>Edit profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.elements} onPress={() => review()}>
        <Text style={styles.text}>Rate My App</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => MoveToAboutMe()}
        style={styles.elements}
      >
        <Text style={styles.text}>About Me</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.elements} onPress={() => signOut()}>
        <Text style={styles.text}>Log Out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.elements} onPress={() => MovetoSupportMe()}>
        <Text style={styles.text}>Support Me ! Just watching an add</Text>
      </TouchableOpacity>
      <View>
        <ADmobeBanner />
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  elements: {
    backgroundColor: "tomato",
    width: width / 1.7,
    marginVertical: 10,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  bottomBanner: {
    position: "absolute",
    bottom: 0,
  },
});
