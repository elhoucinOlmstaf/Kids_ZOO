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

import { Audio } from "expo-av";
import useFonts from "../../hooks/useFonts";
import AppLoading from "expo-app-loading";

const { width, height } = Dimensions.get("window");
export default function LearningPageShow({route}) {
  // , AlphabetData ,FamilytData ,  , , ,
  const PassedData = route.params
  const scrollX = useRef(new Animated.Value(0)).current;
  const [sound, setSound] = React.useState();
  const [IsReady, SetIsReady] = useState(false);
  const SportData = PassedData.SportData.sportData;
  const AlphabetData = PassedData.AlphabetData.AlphabetData;
  const FamilytData = PassedData.FamilytData.FamilyData;
  const BodyPartData = PassedData.BodyPartData.BodyData;
  const JobsData = PassedData.JobsData.jobs;
  const FoodData = PassedData.FoodData.FoodData;
  const AnimalesData = PassedData.AnimalesData.AnimalsData;
  const NumbersData = PassedData.NumbersData.Numberdata;
  const [LearningData , setLearningData] = useState(SportData)


const setlearningDATA = ()=>{
  if(PassedData.itemId === 1){
  setLearningData(AlphabetData)
  }
   if(PassedData.itemId === 2){
  setLearningData(NumbersData)
  }
   if(PassedData.itemId === 3){
  setLearningData(BodyPartData)
  }
   if(PassedData.itemId === 4){
  setLearningData(SportData)
  }
   if(PassedData.itemId === 5){
  setLearningData(JobsData)
  }
   if(PassedData.itemId === 6){
  setLearningData(FamilytData)
  }
   if(PassedData.itemId === 7){
  setLearningData(AnimalesData)
  }
   if(PassedData.itemId === 8){
  setLearningData(FoodData)
  }
}

useEffect(() => {
 setlearningDATA()
  return () => {

  }
}, [])


  React.useEffect(() => {
    return sound
      ? () => {
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
      uri: LearningData[songIndex].audio,
    });
    setSound(sound);
    await sound.playAsync();
  }

  const goNext = async () => {
    slider.current.scrollToOffset({
      offset: ((songIndex + 1) % LearningData.length) * width,
    });
    const { sound } = await Audio.Sound.createAsync({
      uri: LearningData[(songIndex + 1) % LearningData.length].audio,
    });
    setSound(sound);
    await sound.playAsync();
  };

  const goPrv = async () => {
    slider.current.scrollToOffset({
      offset: ((songIndex - 1) % LearningData.length) * width,
    });
    const { sound } = await Audio.Sound.createAsync({
      uri: LearningData[(songIndex - 1) % LearningData.length].audio,
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
          style={{ width: 300, height: 320, borderRadius: 5 }}
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
            data={LearningData}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
          />
        </SafeAreaView>
        <View style={{ marginTop: -80 }}>
          <Text style={styles.artist}>{LearningData[songIndex].title}</Text>
        </View>

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
    color: "red",
    fontWeight: "bold",
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
