import React from "react";
import { StyleSheet, Text, View } from "react-native";

// importing Screensk
import Numbers from "../../Components/LarningComponet/Numbers";
import Alphabet from "../../Components/LarningComponet/Alphabet";
import FamilyMember from "../../Components/LarningComponet/FamilyMember";
import BodyParts from "../../Components/LarningComponet/BodyParts";
import Sport from "../../Components/LarningComponet/Sport";
import Animals from "../../Components/LarningComponet/Animals";
import Food from "../../Components/LarningComponet/Food";
import Jobs from "../../Components/LarningComponet/Jobs";

const LearningPageShow = ({ route }) => {
  const { itemId, Title } = route.params;
  if (itemId === 1) {
    return <Alphabet />;
  }
  if (itemId === 2) {
    return <Numbers />;
  }
  if (itemId === 3) {
    return <BodyParts />;
  }
  if (itemId === 4) {
    return <Sport />;
  }
  if (itemId === 5) {
    return <Jobs />;
  }
  if (itemId === 6) {
    return <FamilyMember />;
  }
  if (itemId === 7) {
    return <Animals />;
  }
  if (itemId === 8) {
    return <Food />;
  }
};

export default LearningPageShow;

const styles = StyleSheet.create({});
