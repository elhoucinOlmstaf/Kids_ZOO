import { AdMobInterstitial } from "expo-ads-admob";
import React from "react";
import { View } from "react-native";

const InerTitleAd = () => {

  return (
    <View>
      <AdMobInterstitial
        adUnitID="ca-app-pub-8621076537564643/6678992487"
        bannerSize="smartBanner"
        servePersonalizedAds={true}
        onAdFailedToLoad={error => console.error(error)}
      />
    </View>
  );
};

export default InerTitleAd;
