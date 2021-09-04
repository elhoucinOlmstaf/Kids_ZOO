import { Dimensions, StyleSheet, View } from "react-native";

import { AdMobBanner } from "expo-ads-admob";
import React from "react";

const { width } = Dimensions.get("window");

const ADmobeBanner = () => {
  return (
    <View>
      <AdMobBanner
        adUnitID="ca-app-pub-8621076537564643/6678992487"
        bannerSize="smartBanner"
        servePersonalizedAds={true}
      />
    </View>
  );
};

export default ADmobeBanner;

const styles = StyleSheet.create({});
