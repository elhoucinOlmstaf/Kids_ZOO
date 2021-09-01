import {
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { useIsFocused } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
export default function Facts() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slider = useRef(null);
  const [songIndex, setSongIndex] = useState(0);
  const position = useRef(Animated.divide(scrollX, width)).current;
  const [facts, setFacts] = useState("");
  const isFocused = useIsFocused();

  // fetching jokes data from api
  const fetchingJOKESData = () => {
    fetch("https://elhoucinolmstaf.github.io/KIDS_ZOO_API//Data/FactsData.json")
      .then((response) => response.json())
      .then((json) => {
        setFacts(json);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchingJOKESData();
    scrollX.addListener(
      ({ value }) => {
        const val = Math.round(value / width);
        setSongIndex(val);
      },
      [isFocused]
    );
    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  const goNext = async () => {
    slider.current.scrollToOffset({
      offset: ((songIndex + 1) % facts.FactsData.length) * width,
    });
  };

  const goPrv = async () => {
    slider.current.scrollToOffset({
      offset: ((songIndex - 1) % facts.FactsData.length) * width,
    });
  };

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
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={facts.FactsData}
        renderItem={renderItem}
        keyExtractor={(item , index) =>  item.index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    justifyContent: "space-evenly",
    backgroundColor: "#ddd",
  },

  btns: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
