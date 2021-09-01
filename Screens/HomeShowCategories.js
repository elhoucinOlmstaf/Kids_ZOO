import Facts from "./Facts/Facts";
import JokesCategory from "./Jokes/JokesCategory";
import LearningScreenCategories from "./learning/LearningScreenCategories";
import QuizeHome from "./Quize/QuizeHome";
import React from "react";
import Setting from "./Setting/Setting";
import Stories from "./stories/StoriesCategory";

const HomeShowCategories = ({ route }) => {
  const { itemId } = route.params;

  if (itemId === 1) {
    return <LearningScreenCategories />;
  }

  if (itemId === 2) {
    return <Stories />;
  }
  if (itemId === 3) {
    return <QuizeHome />;
  }
  if (itemId === 4) {
    return <JokesCategory />;
  }
  if (itemId === 5) {
    return <Facts />;
  }
  if (itemId === 6) {
    return <Setting />;
  }
};

export default HomeShowCategories;
