import {
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

import Loading from "../../Components/Lottie/Loading";
import firebase from "firebase";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const Stories = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const storage = firebase.storage();
  const [Story1, setStory1] = useState("");
  const [Story2, setStory2] = useState("");
  const [Story3, setStory3] = useState("");
  const [Story4, setStory4] = useState("");
  const [Story5, setStory5] = useState("");
  const [Story6, setStory6] = useState("");
  const [Story7, setStory7] = useState("");
  const [Story8, setStory8] = useState("");
  const [Story9, setStory9] = useState("");
  const [Story10, setStory10] = useState("");
  const [IsloadingComplet, setIsloadingComplet] = useState(false);

  const StoriesCategory = [
    {
      ImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/Images%2Fstory1%2F021-DO-YOU-WONDER-ABOUT-RAIN-SNOW-SLEET-AND-HAIL-Free-Childrens-Book-By-Monkey-Pen-01.jpg?alt=media&token=0cab937b-2b09-4bc2-bcd2-bb97c1de50c3",
      id: 1,
      title: "Do you wonder About ...",
    },
    {
      ImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/Images%2Fstory2%2F023-A-DOG-ON-A-LOG-Free-Childrens-Book-By-Monkey-Pen-01.jpg?alt=media&token=37a1318d-fe52-4313-8e47-15dff4e3f151",
      id: 2,
      title: "A Dog Ona Log ...",
    },
    {
      ImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/Images%2Fstory3%2F025-DRAGONS-Free-Childrens-Book-By-Monkey-Pen-01.jpg?alt=media&token=ff814a23-bcaa-4003-8ccd-10097c7a34b8",
      id: 3,
      title: "Dragon ...",
    },
    {
      ImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/Images%2Fstory4%2F029-JIMMYS-FIRST-DAY-OF-SCHOOL-Free-Childrens-Book-By-Monkey-Pen-01.jpg?alt=media&token=9c51d1e8-a03d-4053-8510-50134c6a7f6e",
      id: 4,
      Title: "Jimmy's First day ...",
    },
    {
      ImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/Images%2Fstory5%2F034-MARTY-MONGOOSE-Free-Childrens-Book-By-Monkey-Pen-01.jpg?alt=media&token=ef549f65-543a-4a2d-b62e-7952904467ff",
      id: 5,
      title: "Marry Mongoose ...",
    },
    {
      ImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/Images%2Fstory6%2F038-THERE-IS-A-MOUSE-IN-THE-HOUSE-Free-Childrens-Book-By-Monkey-Pen-01.jpg?alt=media&token=0fae8822-a3c6-431b-b7a1-2110bfe2139a",
      id: 6,
      title: "There is A mouse ...",
    },
    {
      ImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/Images%2Fstory7%2F028-THE-WAY-OF-THE-WOODS-Free-Childrens-Book-By-Monkey-Pen-01.jpg?alt=media&token=077498d5-d29a-4180-b669-28225e720912",
      id: 7,
      title: "the way of the woods ...",
    },
    {
      ImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/Images%2Fstory8%2F030-BULLY-BILL-Free-Childrens-Book-By-Monkey-Pen-01.jpg?alt=media&token=064d515e-e1d9-4652-bd63-4d0dbdb66bcd",
      id: 8,
      title: "Bylly Bill...",
    },
    {
      ImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/Images%2Fstory9%2F027-PIRATES-COVE-Free-Childrens-Book-By-Monkey-Pen-01.jpg?alt=media&token=7ebdcecd-9833-476b-98ce-79267f83cb7a",
      id: 9,
      title: "Rirates Cove ...",
    },
    {
      ImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/Images%2Fstory10%2F039-MY-FIRST-PET-Free-Childrens-Book-By-Monkey-Pen-01.jpg?alt=media&token=ebcc5282-c02e-40d0-a1cd-ba75fbfe9821",
      id: 10,
      title: "My First Pet ...",
    },
  ];

  //getting  story1 data
  const STORY1 = async () => {
    const imageRefs = await storage.ref("Images/story1").listAll();
    const urls = await Promise.all(
      imageRefs.items.map((ref) => ref.getDownloadURL())
    );
    setStory1(urls);
    setIsloadingComplet(true);
  };
  //getting  story2 data
  const STORY2 = async () => {
    const imageRefs = await storage.ref("Images/story2").listAll();
    const urls = await Promise.all(
      imageRefs.items.map((ref) => ref.getDownloadURL())
    );
    setStory2(urls);
    setIsloadingComplet(true);
  };
  //getting  story3 data
  const STORY3 = async () => {
    const imageRefs = await storage.ref("Images/story3").listAll();
    const urls = await Promise.all(
      imageRefs.items.map((ref) => ref.getDownloadURL())
    );
    setStory3(urls);
    setIsloadingComplet(true);
  };
  //getting  story4 data
  const STORY4 = async () => {
    const imageRefs = await storage.ref("Images/story4").listAll();
    const urls = await Promise.all(
      imageRefs.items.map((ref) => ref.getDownloadURL())
    );
    setStory4(urls);
    setIsloadingComplet(true);
  };
  //getting  story5 data
  const STORY5 = async () => {
    const imageRefs = await storage.ref("Images/story5").listAll();
    const urls = await Promise.all(
      imageRefs.items.map((ref) => ref.getDownloadURL())
    );
    setStory5(urls);
    setIsloadingComplet(true);
  };
  //getting  story6 data
  const STORY6 = async () => {
    const imageRefs = await storage.ref("Images/story6").listAll();
    const urls = await Promise.all(
      imageRefs.items.map((ref) => ref.getDownloadURL())
    );
    setStory6(urls);
    setIsloadingComplet(true);
  };
  //getting  story7 data
  const STORY7 = async () => {
    const imageRefs = await storage.ref("Images/story7").listAll();
    const urls = await Promise.all(
      imageRefs.items.map((ref) => ref.getDownloadURL())
    );
    setStory7(urls);
    setIsloadingComplet(true);
  };
  //getting  story8 data
  const STORY8 = async () => {
    const imageRefs = await storage.ref("Images/story8").listAll();
    const urls = await Promise.all(
      imageRefs.items.map((ref) => ref.getDownloadURL())
    );
    setStory8(urls);
    setIsloadingComplet(true);
  };
  //getting  story 9data
  const STORY9 = async () => {
    const imageRefs = await storage.ref("Images/story9").listAll();
    const urls = await Promise.all(
      imageRefs.items.map((ref) => ref.getDownloadURL())
    );
    setStory9(urls);
    setIsloadingComplet(true);
  };
  //getting  story10 data
  const STORY10 = async () => {
    const imageRefs = await storage.ref("Images/story10").listAll();
    const urls = await Promise.all(
      imageRefs.items.map((ref) => ref.getDownloadURL())
    );
    setStory10(urls);
    setIsloadingComplet(true);
  };
  useEffect(() => {
    STORY1();
    STORY2();
    STORY3();
    STORY4();
    STORY5();
    STORY6();
    STORY7();
    STORY8();
    STORY9();
    STORY10();
  }, []);

  const NavigateTo = (item) => {
    navigation.push("ShowStories", {
      itemID: item.id,
      title: item.title,
      Story1,
      Story2,
      Story3,
      Story4,
      Story5,
      Story6,
      Story7,
      Story8,
      Story9,
      Story10,
    });
  };

  return (
    <SafeAreaView>
      {IsloadingComplet ? (
        <Animated.FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={StoriesCategory}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <TouchableNativeFeedback onPress={() => NavigateTo(item)}>
                  <Image
                    style={styles.cardImage}
                    source={{ uri: item.ImageUrl }}
                  />
                </TouchableNativeFeedback>
              </View>
            );
          }}
        />
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
};
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  listContainer: {
    alignItems: "center",
    paddingBottom: 25,
  },
  card: {
    marginVertical: 10,
    flexBasis: windowWidth / 2.3,
    minHeight: windowHeight - windowHeight / 1.5,
    marginHorizontal: 10,
    borderRadius: 30,
    backgroundColor: "tomato",
  },
  cardImage: {
    height: windowHeight - windowHeight / 1.5,
    width: "100%",
    alignSelf: "center",
    borderRadius: 30,
  },
});

export default Stories;
