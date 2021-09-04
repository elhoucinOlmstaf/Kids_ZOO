import { Dimensions, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

import { AdMobInterstitial } from "expo-ads-admob";
import { Audio } from "expo-av";
import QuizeCompAnimation from "../../Components/Lottie/QuizeCompAnimation";
import Quizestyles from "../../styles/quizeStyle";

const QuizeShowPage = ({ route }) => {
  const PassedData = route.params;

  const AnimaleData = PassedData.AnimaleData.AnimalesQuizeQuestions;
  const MathData = PassedData.MathQuizeData.MathQuizeQuestions;
  const FunnyQuizeData = PassedData.FunnyQuizeData.ScienceQuestionQuize;
  const TrivaQuizeData = PassedData.TrivaQuizeData.TriviaQuestion;
  const [QuizeData, setQuizeData] = useState(AnimaleData);
  const [quizeCompleted, setquizeCompleted] = useState(false);
  const [CurrentIamge, setCurrentIamge] = useState(0);
  const [sound, setSound] = useState();

  function showInterstitial() {
    AdMobInterstitial.setAdUnitID("ca-app-pub-8621076537564643/1923475351");
    AdMobInterstitial.requestAdAsync().then(() => {
      AdMobInterstitial.showAdAsync().catch((e) => console.log(e));
    });
  }

  async function PlayCorrectSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/QuizeSounds/CorrectAnswer.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }
  async function PlayWrongSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/QuizeSounds/wronganswer.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }
  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const [score, setScore] = useState(0);
  const [showNextBtn, setshowNextBtn] = useState(false);
  const [CureentOptionSelected, setCureentOptionSelected] = useState(null);
  const [CurrecttOption, setCurrecttOption] = useState(null);
  const [IsOptiomDiabled, setIsOptiomDiabled] = useState(null);
  //update quize Data based on quize page id
  const setQuizeDataa = () => {
    if (PassedData.item.id === 1) {
      setQuizeData(AnimaleData);
    }
    if (PassedData.item.id === 2) {
      setQuizeData(MathData);
    }
    if (PassedData.item.id === 3) {
      setQuizeData(FunnyQuizeData);
    }
    if (PassedData.item.id === 4) {
      setQuizeData(TrivaQuizeData);
    }
  };
  useEffect(() => {
    // fetching();
    setQuizeDataa();
    return () => {
      setQuizeDataa();
    };
  }, []);

  //reset CureentOptionSelecte ,CurrecttOption,IsOptiomDiabled,howNextBtn
  const reset = () => {
    setCureentOptionSelected(null);
    setCurrecttOption(null);
    setIsOptiomDiabled(false);
    setshowNextBtn(false);
  };

  //check selcted answer by ty the user
  const CheckAnswer = (selectedOption) => {
    let coreect_option = QuizeData[CurrentIamge]["correct_option"];
    setCureentOptionSelected(selectedOption);
    setCurrecttOption(coreect_option);
    setIsOptiomDiabled(true);
    if (selectedOption == coreect_option) {
      PlayCorrectSound();
      setScore(score + 1);
      setshowNextBtn(true);
    } else {
      PlayWrongSound();
      setshowNextBtn(true);
    }
  };

  //handle next question
  const NextQuestion = () => {
    if (CurrentIamge === QuizeData.length - 1) {
      setquizeCompleted(true);
      setCurrentIamge(0);
    } else {
      setCurrentIamge(CurrentIamge + 1);
      reset();
    }
  };

  // play the quize again
  const playAgain = () => {
    showInterstitial();
    setquizeCompleted(false);
    reset();
    setScore(0);
  };

  return (
    <SafeAreaView style={{ flex: 1}}>
      <ScrollView>
    <View>
      <View style={Quizestyles.QuesHaeder}>
        {PassedData.item.id === 1 ? (
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Can you name This animals?
          </Text>
        ) : (
          <Text
            style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
          >
            {QuizeData[CurrentIamge].Question}
          </Text>
        )}
      </View>
      <View style={Quizestyles.answersContainer}>
        <View
          style={{
            alignItems: "center",
            marginVertical: 20,
            width: width,
          }}
        >
          <Image
            style={{
              width: PassedData.item.id === 2 ? 290 : 180,
              height: PassedData.item.id === 2 ? 250 : 160,
            }}
            source={{
              uri: QuizeData[CurrentIamge].ImageUrl,
            }}
          />
        </View>
        <ScrollView>
        <View
          style={{
            width: width,
            alignItems: "center",
            padding: 10,
          }}
        >
          {QuizeData[CurrentIamge].options.map((option, index) => (
            <TouchableOpacity
              disabled={IsOptiomDiabled}
              onPress={() => CheckAnswer(option)}
              key={index}
              style={{
                padding: 15,
                margin: 10,
                width: width / 1.1,
                alignItems: "center",
                borderRadius: 10,
                backgroundColor:
                  option == CurrecttOption
                    ? "green"
                    : option == CureentOptionSelected
                    ? "red"
                    : "pink",
              }}
            >
              <Text
                style={{
                  color:
                    option == CurrecttOption
                      ? "white"
                      : option == CureentOptionSelected
                      ? "white"
                      : "black",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
          {/* check if the showNextBtn === true to show it. other wise hide it */}
          {showNextBtn === true ? (
            <TouchableOpacity
              style={Quizestyles.nextbtn}
              onPress={() => NextQuestion()}
            >
              <Text style={Quizestyles.text}>Next </Text>
            </TouchableOpacity>
          ) : null}
        </View>
        </ScrollView>
        {quizeCompleted  ? (
          <View style={Quizestyles.quizeCompletedVonatiner}>
            <View style={Quizestyles.quizeSubConatainer}>
              <Text style={Quizestyles.quizeText}>Quize</Text>
              <Text style={Quizestyles.quizeText}>Completeed</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <QuizeCompAnimation />
            </View>
            <View>
              <View style={Quizestyles.scoreContainer}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                  your scror is :
                </Text>
                <Text
                  style={{ fontSize: 18, color: "orange", fontWeight: "bold" }}
                >
                  {score}
                </Text>
              </View>
              <TouchableOpacity
                style={Quizestyles.playAagin}
                onPress={playAgain}
              >
                <Text
                  style={{ fontSize: 18, color: "white", fontWeight: "bold" }}
                >
                  Play Again
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get("window");

export default QuizeShowPage;
