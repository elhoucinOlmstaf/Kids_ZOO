import * as Font from "expo-font";


export default useFonts = async () => {
   await Font.loadAsync({

      "MontserratBold": require("../assets/fonts/FunnyKid.ttf"),
      "BubbleLoveDemo": require("../assets/fonts/koowalsky.regular.ttf"),
      "wonderland": require("../assets/fonts/beyond-wonderland.regular.ttf"),
      "feast": require("../assets/fonts/feast-of-flesh-bb.italic.ttf"),
      "mummified": require("../assets/fonts/mummified.fill.ttf"),
      "regularregular": require("../assets/fonts/mummified.regular.ttf"),
      "youmurderer": require("../assets/fonts/youmurderer-bb.regular.ttf"),
      "sweetcandy": require("../assets/fonts/sweet-candy.regular.ttf"),
    });
};