import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Dimensions } from "react-native";
import { Avatar } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";

// screen
import HomeProfileImage from "../Components/HomeProfileImage";

const HomeScreen = ({ navigation }) => {
  const DataList = [
    {
      id: 1,
      title: "Learning",
      image: "https://i.postimg.cc/05Lhs0ZH/knowledge.png",
    },
    {
      id: 6,
      title: "Stories",
      image: "https://i.postimg.cc/0NWHHYbn/fairytale.png",
    },
    {
      id: 2,
      title: "Quizes",
      image: "https://i.postimg.cc/rpyMmg9M/what.png",
    },
    {
      id: 3,
      title: "Words List",
      image: "https://i.postimg.cc/htf0BRkB/dictionary.png",
    },
    {
      id: 4,
      title: "Facts",
      image: "https://image.flaticon.com/icons/png/512/5167/5167414.png",
    },
    {
      id: 5,
      title: "Setting",
      image: "https://image.flaticon.com/icons/png/512/439/439291.png",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <HomeProfileImage />
        <View>
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={DataList}
            horizontal={false}
            numColumns={2}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.card}>
                  <View style={styles.cardFooter}></View>
                  <Image
                    style={styles.cardImage}
                    source={{ uri: item.image }}
                  />
                  <View style={styles.cardHeader}>
                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#db9",
  },
  Header: {
    marginVertical: windowHeight - windowHeight + 40,
    marginHorizontal: windowWidth - windowWidth + 10,
    backgroundColor: "#db9",
  },

  list: {
    paddingHorizontal: 5,
    backgroundColor: "#db9",
    position: "relative",
    top: windowHeight - windowHeight + 20,

  },
  listContainer: {
    alignItems: "center",
    paddingBottom: 280,
    zIndex:10
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
    backgroundColor: "#f1ebe2",
    flexBasis: windowWidth / 2.4,
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
    height: 70,
    width: 70,
    alignSelf: "center",
  },
  title: {
    fontSize: 19,
    flex: 1,
    alignSelf: "center",
    color: "#800080",
    textShadowColor: "#800080",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
    fontWeight: "bold",
  },
});

export default HomeScreen;
