import React from "react";
import { StyleSheet, Text, View } from "react-native";

// importing Screensk
import LearningComponent from "../../Components/LearningComponent";
import Stories from "../stories/StoriesCategory";
const learningPage = ({ route }) => {
  const { itemId, Title } = route.params;

  if (itemId === 1) {
    return <LearningComponent />;
  }

  if (itemId === 6) {
    return (
      <View>
        <Stories />
      </View>
    );
  }
  if (itemId === 4) {
    return (
      <View>
        <Text>hh</Text>
      </View>
    );
  }
  if (itemId === 5) {
    return (
      <View>
        <Text>hh</Text>
      </View>
    );
  }
  if (itemId === 6) {
    return (
      <View>
        <Text>hh</Text>
      </View>
    );
  }
};

export default learningPage;

const styles = StyleSheet.create({});
