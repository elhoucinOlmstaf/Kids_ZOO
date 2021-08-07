import React from "react";
import { StyleSheet, Text, View } from "react-native";

// importing Screensk
import Numbers from "../../Components/LarningComponet/Numbers";

const LearningPageShow = ({ route }) => {
  const { itemId, Title } = route.params;
  if (itemId === 1) {
    return <Numbers />;
  }
  if (itemId === 2) {
    return (
      <View>
        <Text>stories</Text>
      </View>
    );
  }
  if (itemId === 3) {
    return (
      <View>
        <Text>hh</Text>
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

export default LearningPageShow;

const styles = StyleSheet.create({});
