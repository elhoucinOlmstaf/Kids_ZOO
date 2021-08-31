import React from "react";
import { Text, View } from "react-native";

// importing Screensk
import LearningScreenCategories from "./learning/LearningScreenCategories"
import Stories from "./stories/StoriesCategory";
import QuizeHome from "./Quize/QuizeHome";
import JokesCategory from "./Jokes/JokesCategory"
const HomeShowCategories = ({ route }) => {
  const { itemId } = route.params;

  if (itemId === 1) {
    return <LearningScreenCategories />;
  }

  if (itemId === 2) {
    return (
      <View>
        <Stories />
      </View>
    );
  }
  if (itemId === 3) {
    return <QuizeHome />;
  }
  if (itemId === 4) {
    return (
      <JokesCategory />
    );
  }
  if (itemId === 5) {
    return (
      <View>
        <Text>hh</Text>
      </View>
    );
  }
};

export default HomeShowCategories;
