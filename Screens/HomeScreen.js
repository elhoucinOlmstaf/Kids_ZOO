import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import firebase from "../DataBase/FireBase/Firebase";
import useFonts from "../hooks/useFonts";
import { useIsFocused } from "@react-navigation/native";

// screen

const HomeScreen = ({ navigation, route }) => {
  const MoveTo = (item) => {
    navigation.navigate("HomeShowCategories", {
      itemId: item.id,
      Title: item.title,
    });
  };

  const DataList = [
    {
      id: 1,
      title: "Learning",
      image: "https://i.postimg.cc/05Lhs0ZH/knowledge.png",
    },
    {
      id: 2,
      title: "Stories",
      image: "https://i.postimg.cc/0NWHHYbn/fairytale.png",
    },
    {
      id: 3,
      title: "Quizes",
      image: "https://i.postimg.cc/rpyMmg9M/what.png",
    },
    {
      id: 4,
      title: "Jokes",
      image: "https://image.flaticon.com/icons/png/512/3839/3839479.png",
    },
    {
      id: 5,
      title: "Facts",
      image: "https://image.flaticon.com/icons/png/512/5167/5167414.png",
    },
    {
      id: 6,
      title: "Setting",
      image: "https://image.flaticon.com/icons/png/512/439/439291.png",
    },
  ];
  const [userData, setUserData] = useState("");
  const [IsReady, SetIsReady] = useState(false);

  const isFocused = useIsFocused();
  useEffect(() => {
    let isActive = true;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        return firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .get()
          .then((documentSnapshot) => {
            if (isActive) {
              setUserData(documentSnapshot.data());
            }
          });
      }
    });
    return () => {
      isActive = false;
    };
  }, [isFocused]);

  // sign out function
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        AsyncStorage.removeItem("userData");
      })
      .then(() => {
        navigation.navigate("Log_In");
      })
      .catch((error) => console.log(error));
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

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <View>
          <View style={styles.subHeader}>
            {userData.photoURL === null ? (
              <Avatar
                onPress={() =>
                  navigation.navigate("UserProfileScreen", { data: "userData" })
                }
                size="medium"
                rounded
                containerStyle={{ marginTop: 5 }}
                source={{
                  uri: "https://image.flaticon.com/icons/png/512/599/599305.png",
                }}
              />
            ) : (
              <Avatar
                onPress={() =>
                  navigation.navigate("UserProfileScreen", { data: userData })
                }
                size="medium"
                rounded
                containerStyle={{ marginTop: 5 }}
                source={{
                  uri: userData.photoURL,
                }}
              />
            )}

            <Entypo
              style={{ marginTop: 6 }}
              name="menu"
              size={44}
              color="black"
              onPress={signOut}
            />
          </View>
          <View style={styles.who}>
            <Text
              style={{
                fontFamily: "BubbleLoveDemo",
                fontSize: 30,
              }}
            >
              Hello
            </Text>
            {userData.displayName !== null ? (
              <Text
                style={{
                  fontFamily: "MontserratBold",
                  fontSize: 35,
                  color: "#990011FF",
                }}
              >
                {userData.displayName}
              </Text>
            ) : (
              <Avatar
                onPress={() => navigation.navigate("UserProfileScreen")}
                size="large"
                rounded
                source={{
                  uri: "https://image.flaticon.com/icons/png/512/5229/5229436.png",
                }}
              />
            )}
          </View>
        </View>
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
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => MoveTo(item)}
                >
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
  hello: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  who: {
    alignItems: "center",
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
    zIndex: 10,
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
