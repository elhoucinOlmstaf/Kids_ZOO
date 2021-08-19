import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Story1 from "../../Components/StoriesComp/Story1";
import Story2 from "../../Components/StoriesComp/Story2";
import Story3 from "../../Components/StoriesComp/Story3";
import Story4 from "../../Components/StoriesComp/Story4";
import Story5 from "../../Components/StoriesComp/Story5";
import Story6 from "../../Components/StoriesComp/Story6";
import Story7 from "../../Components/StoriesComp/Story7";
import Story8 from "../../Components/StoriesComp/Story8";
import Story9 from "../../Components/StoriesComp/Story9";
import Story10 from "../../Components/StoriesComp/Story10";

const ShowStories = ({ route }) => {
  const id = route.params.itemID;
  console.log(id);
  if (id === 1) {
    return <Story1 />;
  }
  if (id === 2) {
    return <Story2 />;
  }
  if (id === 3) {
    return <Story3 />;
  }
  if (id === 4) {
    return <Story4 />;
  }
  if (id === 5) {
    return <Story5 />;
  }
  if (id === 6) {
    return <Story6 />;
  }
  if (id === 7) {
    return <Story7 />;
  }
  if (id === 8) {
    return <Story8 />;
  }
  if (id === 9) {
    return <Story9 />;
  }
  if (id === 10) {
    return <Story10 />;
  }
};

export default ShowStories;
