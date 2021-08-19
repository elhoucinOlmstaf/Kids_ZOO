import React, { useRef, useEffect, useState } from "react";
import { View, Dimensions, Animated } from "react-native";
import Loading from "../Lottie/Loading";
import firebase from "firebase";

const { width, height } = Dimensions.get("window");
export default function story4() {
  const storage = firebase.storage();
  const [urlsUploadedImages, setURLsUploadedImages] = useState(null);
  const [IsloadingComplet, setIsloadingComplet] = useState(false);
  const setURLsToFilesInBucket = async () => {
    const imageRefs = await storage.ref("Images/story4").listAll();
    const urls = await Promise.all(
      imageRefs.items.map((ref) => ref.getDownloadURL())
    );
    setURLsUploadedImages(urls);
    setIsloadingComplet(true);
  };

  useEffect(() => {
    setURLsToFilesInBucket();
  }, []);

  const renderItem = ({ index, item }) => {
    return (
      <Animated.View
        style={{
          width: width,
          height: height - height + 500,
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
      {IsloadingComplet === true ? (
        <Animated.FlatList
          showsHorizontalScrollIndicator={false}
          data={urlsUploadedImages}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      ) : (
        <Loading />
      )}
    </View>
  );
}
