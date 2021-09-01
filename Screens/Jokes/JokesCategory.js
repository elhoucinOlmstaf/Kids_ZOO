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

import AppLoading from "expo-app-loading";
import useFonts from "../../hooks/useFonts";
import { useIsFocused } from "@react-navigation/native"

const { width, height } = Dimensions.get("window");
export default function JokesCategory() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [IsReady, SetIsReady] = useState(false);
  const slider = useRef(null);
  const [songIndex, setSongIndex] = useState(0);
  const position = useRef(Animated.divide(scrollX, width)).current;
  const [Jokes, setJokes] = useState("");
  const isFocused = useIsFocused();

  // fetching jokes data from api
  const fetchingJOKESData = () => {
    fetch(
      "https://elhoucinolmstaf.github.io/KIDS_ZOO_API/Data/HalariousJoks.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setJokes(json);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchingJOKESData();
    scrollX.addListener(({ value }) => {
      const val = Math.round(value / width);
      setSongIndex(val);
    } ,[isFocused]);

    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  const goNext = async () => {
    slider.current.scrollToOffset({
      offset: ((songIndex + 1) % Jokes.HalariousJoksj.length) * width,
    });
  };

  const goPrv = async () => {
    slider.current.scrollToOffset({
      offset: ((songIndex - 1) % Jokes.HalariousJoksj.length) * width,
    });
  };

  const renderItem = ({ index, item }) => {
    return (
      <Animated.View
        style={{
          height: 385,
          width: width,
          transform: [
            {
              translateX: Animated.multiply(
                Animated.add(position, -index),
                -100
              ),
            },
          ],
        }}
      >
        <Animated.Image
          source={{ uri: item.ImagesURL }}
          style={{ width: width / 1.01, height: "100%", borderRadius: 5 }}
        />
      </Animated.View>
    );
  };
  //load fonts
  const LoadFonts = async () => {
    await useFonts();
  };

  //checking if fonts are ready to use
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  const BgImage = require("../../Images/GreenWallpaper.png");
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={{ height: 320 }}>
        <Animated.FlatList
          ref={slider}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          data={Jokes.HalariousJoksj}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.ImagesURL}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
        />
      </SafeAreaView>
      <View style={styles.btns}>
        <TouchableOpacity
          onPress={goPrv}
          disabled={songIndex === 0 ? true : false}
        >
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: "https://image.flaticon.com/icons/png/512/3925/3925153.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={goNext}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: "https://image.flaticon.com/icons/png/512/3925/3925158.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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