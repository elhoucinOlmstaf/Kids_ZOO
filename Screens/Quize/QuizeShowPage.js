import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
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
    } if (PassedData.item.id === 4) {
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

  console.log(MathData);

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
      setScore(score + 1);
    } else {
    }
    setshowNextBtn(true);
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
    setquizeCompleted(false);
    reset();
    setScore(0);
  };
  //sound for incorrect answer
  const IncorrectSound = () => {
    alert("it not correct");
  };
  //sound for correct answer
  const correctSound = () => {
    alert("it correct");
  };
  //sound for quizeCompleted answer
  const quizeCompletedSound = () => {};

  return (
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
              <Text>{option}</Text>
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
        {quizeCompleted ? (
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
        {quizeCompletedSound()}
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

export default QuizeShowPage;
