import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import firebase from "firebase";
const storage = firebase.storage();
import AppLoading from "expo-app-loading";
import useFonts from "../hooks/useFonts";
import Uploadinganimation from "../Components/Lottie/Uploadinganimation";
const { width, height } = Dimensions.get("window");
const EditeProfileScreen = () => {
  const navigation = useNavigation();
  const [Age, setAge] = useState("");
  const [Description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [Update, setUpdate] = useState(false);
  const [IsReady, SetIsReady] = useState(false);

  const getPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const pickImage = async () => {
    getPermission();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      setUploading(true);
    }
  };

  const getPictureBlob = (uri) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", image, true);
      xhr.send(null);
    });
  };

  // here I am uploading the image to firebase storage
  const uploadImageToBucket = async () => {
    let blob;
    try {
      setUploading(true);
      blob = await getPictureBlob(image);
      const ref = await storage.ref().child("imageProfile/");
      const snapshot = await ref.put(blob);
      return await snapshot.ref.getDownloadURL();
    } catch (e) {
      alert("Please Select a Photo First");
      setUploading(false);
      setUpdate(false);
    } finally {
      blob.close();
      setUploading(false);
      setUpdate(false);
      alert("saved successfully");
    }
  };

  const UpdateImage = async () => {
    if (Age === "") {
      return alert("Plaese update the age or rewrite the old one");
    }

    setUpdate(true);
    let imgUrl = await uploadImageToBucket();

    await firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .update({
        photoURL: imgUrl,
        description: Description,
        age: Age,
      })
      .then(() => navigation.push("HomeScreen",))
      .catch((err) => {
        alert(err, "Please Select a Photo First");
        setUploading(false);
        setUpdate(false);
      });
  };

  const LoadFonts = async () => {
    await useFonts();
  };
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
      <View style={styles.Subcontainer}>
        <View style={styles.imgCon}>
          <Entypo
            style={styles.Entypo}
            name="camera"
            size={28}
            color="black"
            onPress={pickImage}
          />
          {uploading ? (
            <Image style={styles.imgPro} source={{ uri: image }} />
          ) : (
            <Image
              style={styles.imgPro}
              source={{
                uri: "https://image.flaticon.com/icons/png/512/3177/3177440.png",
              }}
            />
          )}
        </View>
      </View>
      <View style={styles.inputs}>
        <View style={styles.sectionStyle}>
          <TextInput
            style={styles.textInput}
            placeholder="add your age...."
            value={Age}
            onChangeText={setAge}
          />
        </View>
      </View>
      <View style={styles.inputs}>
        <View style={styles.sectionStyle}>
          <TextInput
            style={styles.textInput}
            placeholder="add description...."
            value={Description}
            onChangeText={setDescription}
          />
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity onPress={UpdateImage} style={styles.update}>
          <Text style={{ fontFamily: "feast", fontSize: 22, color: "#fff" }}>
            Update
          </Text>
        </TouchableOpacity>
      </View>
      {Update ? (
        <View
          style={{
            backgroundColor: "black",
            width: width,
            height: height,
            position: "absolute",
            top: -60,
            opacity: 0.7,
          }}
        >
          <Uploadinganimation />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
  Subcontainer: {
    alignItems: "center",
    marginTop: 10,
  },
  imgCon: {
    width: 150,
    height: 150,
    marginVertical: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  imgPro: {
    borderRadius: 100,
    width: 150,
    height: 150,
  },
  saveImg: {
    backgroundColor: "tomato",
    padding: 5,
    borderRadius: 50,
    marginBottom: 20,
  },
  saveImgText: {
    fontSize: 16,
  },
  details: {
    marginTop: 10,
  },
  inputs: {
    alignItems: "center",
    justifyContent: "center",
    // marginTop: windowHeight - windowHeight + 20,
  },
  textInput: {
    flex: 1,
  },
  sectionStyle: {
    height: 55,
    width: "85%",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  text: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
  update: {
    padding: 10,
    backgroundColor: "#F93822FF",
    marginTop: 16,
    fontSize: 23,
    color: "#fff",
    borderRadius: 15,
  },
  Entypo: {
    position: "relative",
    top: 130,
    left: 0,
    zIndex: 1,
  },
});
export default EditeProfileScreen;