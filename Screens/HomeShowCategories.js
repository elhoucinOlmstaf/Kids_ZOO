import { AdMobInterstitial } from "expo-ads-admob";
import Facts from "./Facts/Facts";
import JokesCategory from "./Jokes/JokesCategory";
import LearningScreenCategories from "./learning/LearningScreenCategories";
import QuizeHome from "./Quize/QuizeHome";
import React from "react";
import Setting from "./Setting/Setting";
import Stories from "./stories/StoriesCategory";

const HomeShowCategories = ({ route }) => {
  const { itemId } = route.params;
  function showInterstitial() {
    AdMobInterstitial.setAdUnitID("ca-app-pub-8621076537564643/1923475351");
    AdMobInterstitial.requestAdAsync().then(() => {
      AdMobInterstitial.showAdAsync().catch((e) => console.log(e));
    });
  }
  if (itemId === 1) {
    return <LearningScreenCategories />;
  }

  if (itemId === 2) {
    showInterstitial();
    return <Stories />;
  }
  if (itemId === 3) {
    return <QuizeHome />;
  }
  if (itemId === 4) {
    showInterstitial();
    return <JokesCategory />;
  }
  if (itemId === 5) {
    showInterstitial();
    return <Facts />;
  }
  if (itemId === 6) {
    return <Setting />;
  }
};

export default HomeShowCategories;
