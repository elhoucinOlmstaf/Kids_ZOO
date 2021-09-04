import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const Quizestyles = StyleSheet.create({
  QuesHaeder: {
    alignItems: "center",
    marginVertical: 15,
  },
  answersContainer: {
    width: width,
    height: height,
  },

  nextbtn: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    width: width / 2,
    borderRadius: 5,
    marginTop: height - height + 55,
    padding: 7,
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  quizeText: {
    fontSize: 26,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "orange",
  },
  quizeCompletedVonatiner: {
    width: width,
    height: height,
    backgroundColor: "#fff",
    position: "absolute",
    top: height - height - 70,
    bottom: 1,
    alignItems: "center",
  },
  quizeSubConatainer: {
    alignItems: "center",
    paddingVertical: 30,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  scoreContainer: {
    borderWidth: 3,
    padding: 15,
    width: width / 1.06,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  playAagin: {
    backgroundColor: "skyblue",
    padding: 18,
    width: width / 1.06,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default Quizestyles;
