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

import ADmobeBanner from "../../admob/ADmobeBanner";
import Elephantloading from "../../Components/Lottie/Elephantloading";
import { useNavigation } from "@react-navigation/native";

const QuizeHome = () => {
  const navigation = useNavigation();
  const [AnimaleData, setAnimaleData] = useState("");
  const [MathQuizeData, setMathQuizeData] = useState("");
  const [FunnyQuizeData, setfunnyQuizeData] = useState("");
  const [TrivaQuizeData, setTrivaQuizeData] = useState("");
  const [IsDataReady, setIsDataReady] = useState(false);
  const QuizCategory = [
    {
      title: "Animals Quize",
      id: 1,
      name: "  Animals Picture Quiz",
      ImageUrl: "https://image.flaticon.com/icons/png/512/5020/5020344.png",
    },
    {
      title: "Math Quize",
      id: 2,
      ImageUrl: "https://image.flaticon.com/icons/png/512/4359/4359818.png",
    },
    {
      title: "Funny Quize ",
      id: 3,
      ImageUrl: "https://image.flaticon.com/icons/png/512/4545/4545074.png",
    },
    {
      title: "Triva Quize",
      id: 4,
      ImageUrl: "https://image.flaticon.com/icons/png/512/4228/4228707.png",
    },
  ];
  //getting Animal Quize data fetchingAnimalData
  const fetchingmathData = () => {
    fetch(
      "https://elhoucinolmstaf.github.io/KIDS_ZOO_API/Data/MathQuestions.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setMathQuizeData(json);
        setIsDataReady(true);
      })
      .catch((error) => console.error(error));
  };
  //getting Math Quize data
  const fetchingAnimalData = () => {
    fetch(
      "https://elhoucinolmstaf.github.io/KIDS_ZOO_API/Data/AnimaleQuestions.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setAnimaleData(json);
        setIsDataReady(true);
      })
      .catch((error) => console.error(error));
  };
  //getting Funny Quize data
  const fetchingFunnyData = () => {
    fetch(
      "https://elhoucinolmstaf.github.io/KIDS_ZOO_API/Data/ScineQuestions.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setfunnyQuizeData(json);
        setIsDataReady(true);
      })
      .catch((error) => console.error(error));
  };
  //getting Triva Quize data
  const fetchingTriviaData = () => {
    fetch(
      "https://elhoucinolmstaf.github.io/KIDS_ZOO_API/Data/TriviaQuestion.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setTrivaQuizeData(json);
        setIsDataReady(true);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchingAnimalData();
    fetchingmathData();
    fetchingFunnyData();
    fetchingTriviaData();
  }, []);
  return (
    <View>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Hi ! are you ready for
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>the challenge!</Text>
      </View>
      {IsDataReady === false ? (
        <Elephantloading />
      ) : (
        <FlatList
          style={styles.container}
          data={QuizCategory}
          contentContainerStyle={styles.listContainer}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() =>
                  navigation.navigate("QuizeShowPage", {
                    item,
                    AnimaleData,
                    MathQuizeData,
                    FunnyQuizeData,
                    TrivaQuizeData,
                  })
                }
              >
                <View style={styles.cardFooter}></View>
                <Image
                  style={styles.cardImage}
                  source={{
                    uri: item.ImageUrl,
                  }}
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
          keyExtractor={(item) => item.id}
        />
      )}
    <View
        style={{
          width: width,
          height: 90,
          position: "absolute",
          bottom: 0,
        }}
      >
        <ADmobeBanner />
      </View>
    </View>
  );
};

export default QuizeHome;
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
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
    flexBasis: width / 2.4,
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
    height: 90,
    width: 90,
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
