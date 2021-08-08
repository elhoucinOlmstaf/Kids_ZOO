import React, { useRef, useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  Animated,
  StyleSheet,
  Button,
} from "react-native";

import songs from "../data";
import Controller from "./Controller";
import { Audio } from "expo-av";
const { width, height } = Dimensions.get("window");
export default function Numbers() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [sound, setSound] = React.useState();

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const slider = useRef(null);
  const [songIndex, setSongIndex] = useState(0);

  // for tranlating the album art
  const position = useRef(Animated.divide(scrollX, width)).current;

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const val = Math.round(value / width);
      setSongIndex(val);
    });

    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync({
      uri: songs[songIndex].audio,
    });
    console.log(songIndex);
    setSound(sound);
    await sound.playAsync();
  }

  const goNext = async () => {
    const { sound } = await Audio.Sound.createAsync({
      uri: songs[(songIndex + 1) % songs.length].audio,
    });

    setSound(sound);
    await sound.playAsync();
    slider.current.scrollToOffset({
      offset: ((songIndex + 1) % songs.length) * width,
    });
  };

  const goPrv = async () => {
    const { sound } = await Audio.Sound.createAsync({
      uri: songs[(songIndex - 1) % songs.length].audio,
    });

    setSound(sound);
    await sound.playAsync();
    slider.current.scrollToOffset({
      offset: ((songIndex - 1) % songs.length) * width,
    });
  };

  const renderItem = ({ index, item }) => {
    return (
      <Animated.View
        style={{
          alignItems: "center",
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
          source={{ uri: item.image }}
          style={{ width: 320, height: 320, borderRadius: 5 }}
        />
      </Animated.View>
    );
  };
  const BgImage = require("../../Images/Theme.png");
  return (
    <ImageBackground
      source={BgImage}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={{ height: 320 }}>
          <Animated.FlatList
            ref={slider}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            data={songs}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
          />
        </SafeAreaView>
        <View>
          <Text style={styles.title}>{songs[songIndex].title}</Text>
          <Text style={styles.artist}>{songs[songIndex].artist}</Text>
        </View>

        <Controller onNext={goNext} onPrv={goPrv} onStart={playSound} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: "center",
    textTransform: "capitalize",
  },
  artist: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "capitalize",
  },
  container: {
    justifyContent: "space-evenly",
    height: height,
  },
  backgroundImage: {
    width: width,
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
  },
});
