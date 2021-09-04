import {
  Animated,
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
import { CATEGORIES } from "../../DataBase/LearningListCategory";
import CuteTigerLoading from "../../Components/Lottie/CuteTigerLoading";
import useFonts from "../../hooks/useFonts";
import { useNavigation } from "@react-navigation/native";

const LearningScreenCategories = () => {
  const navigation = useNavigation();
  const [IsReady, SetIsReady] = useState(false);
  const [SportData, setSportData] = useState("");
  const [NumbersData, setNumbersData] = useState("");
  const [AlphabetData, setSAlphabetData] = useState("");
  const [FamilytData, setFamilytData] = useState("");
  const [BodyPartData, setBodyPartData] = useState("");
  const [JobsData, setJobsData] = useState("");
  const [FoodData, setFoodData] = useState("");
  const [AnimalesData, setAnimalesData] = useState("");
  const [IsDataReady, setIsDataReady] = useState(false);


  //fetchingNumbersData
  const fetchingSportData = () => {
    fetch("https://elhoucinolmstaf.github.io/KIDS_ZOO_API/Data/SportData.json")
      .then((response) => response.json())
      .then((json) => {
        setSportData(json);
        setIsDataReady(true)
      })
      .catch((error) => console.error(error));
  };
  const fetchingNumbersData = () => {
    fetch(
      "https://elhoucinolmstaf.github.io/KIDS_ZOO_API/Data/NumbersData.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setNumbersData(json);
        setIsDataReady(true)
      })
      .catch((error) => alert(error.message));
  };
  const fetchingAlphabetData = () => {
    fetch(
      "https://elhoucinolmstaf.github.io/KIDS_ZOO_API/Data/AlphabetData.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setSAlphabetData(json);
        setIsDataReady(true)
      })
      .catch((error) => console.error(error));
  };
  const fetchingFamilytData = () => {
    fetch("https://elhoucinolmstaf.github.io/KIDS_ZOO_API/Data/Family.json")
      .then((response) => response.json())
      .then((json) => {
        setFamilytData(json);
        setIsDataReady(true)
      })
      .catch((error) => console.error(error));
  };
  const fetchingBodyPartData = () => {
    fetch(
      "https://elhoucinolmstaf.github.io/KIDS_ZOO_API/Data/BodySportData.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setBodyPartData(json);
        setIsDataReady(true)
      })
      .catch((error) => console.error(error));
  };
  const fetchingJobsData = () => {
    fetch("https://elhoucinolmstaf.github.io/KIDS_ZOO_API/Data/Jobs.json")
      .then((response) => response.json())
      .then((json) => {
        setJobsData(json);
        setIsDataReady(true)
      })
      .catch((error) => console.error(error));
  };
  const fetchingFoodData = () => {
    fetch("https://elhoucinolmstaf.github.io/KIDS_ZOO_API/Data/Food.json")
      .then((response) => response.json())
      .then((json) => {
        setFoodData(json);
        setIsDataReady(true)
      })
      .catch((error) => console.error(error));
  };
  const fetchingAnimalesData = () => {
    fetch("https://elhoucinolmstaf.github.io/KIDS_ZOO_API/Data/Animales.json")
      .then((response) => response.json())
      .then((json) => {
        setAnimalesData(json);
        setIsDataReady(true)
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {

    fetchingSportData();
    fetchingNumbersData();
    fetchingAlphabetData();
    fetchingFamilytData();
    fetchingBodyPartData();
    fetchingJobsData();
    fetchingFoodData();
    fetchingAnimalesData();
    return () => {
      console.log("cleared");
    };
  }, []);
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
          paddingVertical: 10,
        }}
      >
        <Text style={styles.headerText}>Happy Learning 👏 </Text>
      </Animated.View>
    );
  };
  return (
    <View style={styles.container}>
      {IsDataReady === false ? (
        <CuteTigerLoading />
      ) : (
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
                onPress={() =>
                  navigation.navigate("LearningPageShow", {
                    itemId: item.id,
                    Title: item.title,
                    SportData,
                    NumbersData,
                    AlphabetData,
                    FamilytData,
                    BodyPartData,
                    JobsData,
                    FoodData,
                    AnimalesData,
                  })
                }
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
      )}
    </View>
  );
};

export default LearningScreenCategories;
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
