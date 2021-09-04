import { Dimensions, StyleSheet, View } from "react-native";

import { AdMobInterstitial } from "expo-ads-admob";
import React from "react";

const { width } = Dimensions.get("window");

const InerTitleAd = () => {
   
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

export default InerTitleAd;
