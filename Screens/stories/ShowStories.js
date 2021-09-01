import { Animated, Dimensions, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import Loading from "../../Components/Lottie/Loading";
import firebase from "firebase";

const { width, height } = Dimensions.get("window");
export default function ShowStories({route}) {
 const passeddata = route.params
  const Story1 =passeddata.Story1
  const Story2 =passeddata.Story2
  const Story3 =passeddata.Story3
  const Story4 =passeddata.Story4
  const Story5 =passeddata.Story5
  const Story6 =passeddata.Story6
  const Story7 =passeddata.Story7
  const Story8 =passeddata.Story8
  const Story9 =passeddata.Story9
  const Story10 =passeddata.Story10

  const [StoriesData, setStoriesData] = useState(Story1)

   const SETstoriesData = ()=>{
     if(passeddata.itemID ===2){
       setStoriesData(Story2)
     }
      if(passeddata.itemID ===3){
       setStoriesData(Story3)
     } if(passeddata.itemID ===4){
       setStoriesData(Story4)
     } if(passeddata.itemID ===5){
       setStoriesData(Story5)
     } if(passeddata.itemID ===6){
       setStoriesData(Story6)
     } if(passeddata.itemID ===7){
       setStoriesData(Story7)
     } if(passeddata.itemID ===8){
       setStoriesData(Story8)
     } if(passeddata.itemID ===9){
       setStoriesData(Story9)
     } if(passeddata.itemID ===10){
       setStoriesData(Story10)
     }
   }

   useEffect(() => {
     SETstoriesData()
     return () => {
      SETstoriesData()
     }
   }, [isFocused])


  const renderItem = ({ index, item }) => {
    return (
      <Animated.View
        style={{
          width: width,
          height: height - height + 510,
          backgroundColor: "#e9e5e5",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Animated.Image
          source={{ uri: item }}
          style={{
            width: "95%",
            height: "100%",
            marginVertical: 10,
            alignItems: "center",
          }}
        />
      </Animated.View>
    );
  };

  return (
    <View>

        <Animated.FlatList
          showsHorizontalScrollIndicator={false}
          data={StoriesData}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />

    </View>
  );
}
