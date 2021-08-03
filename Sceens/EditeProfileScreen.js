import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import firebase from "firebase";
import uuid from "uuid";
import "@firebase/auth";
const storage = firebase.storage();

const EditeProfileScreen = () => {
  const navigation = useNavigation();
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Age, setAge] = useState("");
  const [Description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [userData, setUserData] = useState("");
  const [uploading, setUploading] = useState(false);
  const [Update, setUpdate] = useState(false);

  const getPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };
  const getUserData = async () => {
    await firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          setUserData(documentSnapshot.data());
        }
      });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
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
      const ref = await storage.ref().child("imageProfile/" + uuid.v4());
      const snapshot = await ref.put(blob);
      return await snapshot.ref.getDownloadURL();
    } catch (e) {
      alert(e.message);
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
    setUpdate(true);
    let imgUrl = await uploadImageToBucket();
    if (imgUrl === null && userData.photoURL) {
      imgUrl = userData.photoURL;
    }
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .update({
        photoURL: imgUrl,
        displayName: FullName,
        Email: Email,
        description: Description,
        age: Age,
      })
      .then(() => navigation.navigate("UserProfileScreen"))
      .catch((err) => {
        alert(err);
        setUploading(false);
        setUpdate(false);
      });
  };

  useEffect(() => {
    getPermission();
  }, []);
  useEffect(() => {
    getUserData();
  }, []);

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
          <Image style={styles.imgPro} source={{ uri: image }} />
        </View>

      </View>
      <View style={styles.inputs}>
        <View style={styles.sectionStyle}>
          <TextInput
            style={styles.textInput}
            placeholder="Update Your FullName...."
            value={FullName}
            onChangeText={setFullName}
          />
        </View>
      </View>
      <View style={styles.inputs}>
        <View style={styles.sectionStyle}>
          <TextInput
            style={styles.textInput}
            placeholder="Update Your Eamil...."
            value={Email}
            onChangeText={setEmail}
          />
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
          {Update ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) : (
            <Text>Update</Text>
          )}
        </TouchableOpacity>
      </View>
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
    backgroundColor: "tomato",
    padding: 10,
    borderRadius: 50,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  Entypo: {
    position: "relative",
    top: 130,
    left: 0,
    zIndex: 1,
  },
});
export default EditeProfileScreen;
