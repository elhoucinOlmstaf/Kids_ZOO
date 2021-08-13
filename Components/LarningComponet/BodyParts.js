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
  TouchableOpacity,
} from "react-native";

import BodyData from "../../DataBase/DummyData/BodyData";
import { Audio } from "expo-av";
import useFonts from "../../hooks/useFonts";
import AppLoading from "expo-app-loading";

const { width, height } = Dimensions.get("window");
export default function BodyParts() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [sound, setSound] = React.useState();
  const [IsReady, SetIsReady] = useState(false);

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
      uri: BodyData[songIndex].audio,
    });
    console.log(songIndex);
    setSound(sound);
    await sound.playAsync();
  }

  const goNext = async () => {
    slider.current.scrollToOffset({
      offset: ((songIndex + 1) % BodyData.length) * width,
    });
    const { sound } = await Audio.Sound.createAsync({
      uri: BodyData[(songIndex + 1) % BodyData.length].audio,
    });
    setSound(sound);
    await sound.playAsync();
  };

  const goPrv = async () => {
    slider.current.scrollToOffset({
      offset: ((songIndex - 1) % BodyData.length) * width,
    });
    const { sound } = await Audio.Sound.createAsync({
      uri: BodyData[(songIndex - 1) % BodyData.length].audio,
    });
    setSound(sound);
    await sound.playAsync();
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
          source={{ uri: item.ImageUrl }}
          style={{ width: 300, height: 300, borderRadius: 5 }}
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
            data={BodyData}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
          />
        </SafeAreaView>
        <View style={{ marginTop: -80 }}>
          <Text style={styles.artist}>{BodyData[songIndex].title}</Text>
        </View>

        <View style={styles.btns}>
        <TouchableOpacity onPress={goPrv}>
            {songIndex > 0 ? (
              <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri: "https://image.flaticon.com/icons/png/512/3925/3925153.png",
                }}
              />
            ) : (
              <Text></Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={playSound}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{
                uri: "https://image.flaticon.com/icons/png/512/718/718965.png",
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  artist: {
    fontSize: 35,
    textAlign: "center",
    textTransform: "capitalize",
    fontFamily: "mummified",
    color: "red",
  },
  container: {
    height: height,
    justifyContent: "space-evenly",
  },
  backgroundImage: {
    width: width,
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
