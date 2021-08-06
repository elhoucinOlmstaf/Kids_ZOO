import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import { CATEGORIES } from "../DataBase/DummyData/LearningListCategory";
import useFonts from "../hooks/useFonts";
import AppLoading from "expo-app-loading";

const LearningComponent = () => {
  const [IsReady, SetIsReady] = useState(false);
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

  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -45],
  });

  const ListHeader = () => {
    return (
      <Animated.View
        style={{
          transform: [{ translateY: translateY }],
          alignItems: "center",
          paddingVertical:10
        }}
      >

          <Text style={styles.headerText}>Happy Learning 👏 </Text>

      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={ListHeader}
        data={CATEGORIES}
        horizontal={false}
        numColumns={2}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{ ...styles.card, ...{ backgroundColor: item.color } }}
            >
              <View style={styles.cardFooter}></View>
              <Image style={styles.cardImage} source={{ uri: item.Image }} />
              <View style={styles.cardHeader}>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={{
                    uri: "https://image.flaticon.com/icons/png/512/930/930880.png",
                  }}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default LearningComponent;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 35,
    fontFamily: "sweetcandy",
    color: "blue",
    marginLeft: 23,
  },

  list: {
    paddingHorizontal: 5,
  },
  listContainer: {
    alignItems: "center",
    paddingBottom: 10,
  },
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 10,
    flexBasis: windowWidth / 2.4,
    minHeight: windowHeight - windowHeight / 1.35,
    marginHorizontal: 10,
    borderRadius: 30,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 80,
    width: 80,
    alignSelf: "center",
  },
  title: {
    fontSize: 35,
    flex: 1,
    alignSelf: "center",
    color: "#000",
    textShadowColor: "#800080",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
    fontFamily: "sweetcandy",
  },
});
