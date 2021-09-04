import { Animated, Dimensions, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";

import ADmobeBanner from "../../admob/ADmobeBanner";
import Elephantloading from "../../Components/Lottie/Elephantloading";
import { useIsFocused } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
export default function Facts() {
  const [facts, setFacts] = useState("");
  const [IsDataReady, setIsDataReady] = useState(false);

  const isFocused = useIsFocused();

  // fetching jokes data from api
  const fetchingJOKESData = () => {
    fetch("https://elhoucinolmstaf.github.io/KIDS_ZOO_API//Data/FactsData.json")
      .then((response) => response.json())
      .then((json) => {
        setFacts(json);
        setIsDataReady(true);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchingJOKESData();
  }, []);

  const renderItem = ({ index, item }) => {
    return (
      <Animated.View
        style={{
          width: width,
          height: height - height + 310,
          backgroundColor: "#e9e5e5",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Animated.Image
          source={{ uri: item.ImageUrl }}
          style={{
            width: "95%",
            height: "100%",
            marginVertical: 10,
            alignItems: "center",
          }}
        />
      </Animated.View>
    );
  };

  return (
    <View>
      {IsDataReady === false ? (
        <Elephantloading />
      ) : (
        <Animated.FlatList
          showsHorizontalScrollIndicator={false}
          data={facts.FactsData}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.index}
        />
      )}
      <View
        style={{
          width: width,
          height: 80,
          position: "absolute",
          bottom: 0,
        }}
      >
        <ADmobeBanner />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    justifyContent: "space-evenly",
    backgroundColor: "#ddd",
  },
});
