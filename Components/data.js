const songs = [
  {
    title: "Zero",
    artist: "Zero is a special number.",
    image: "https://image.flaticon.com/icons/png/512/4020/4020019.png",
    id: "0",
    audio:
      "../assets/sounds/1.mp3",
  },
  {
    title: "One",
    artist: "We had to start our business from zero.",
    image: "https://image.flaticon.com/icons/png/512/4020/4020010.png",
    id: "1",
    audio:
      "https://www.mboxdrive.com/1.mp3",
  },
  {
    title: "bad liar",
    artist: "Imagine Dragons",
    image: "https://image.flaticon.com/icons/png/512/4020/4020011.png",
    id: "2",
    audio:
      "https://www.mboxdrive.com/2.mp3",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://image.flaticon.com/icons/png/512/4020/4020012.png",
    id: "3",
    audio:
      "https://www.mboxdrive.com/3.mp3",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://image.flaticon.com/icons/png/512/4020/4020013.png",
    id: "4",
    audio:
      "https://www.mboxdrive.com/4.mp3",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://image.flaticon.com/icons/png/512/4020/4020014.png",
    id: "5",
    audio:
      "https://www.mboxdrive.com/5.mp3",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://image.flaticon.com/icons/png/512/4020/4020015.png",
    id: "6",
    audio:
      "https://www.mboxdrive.com/6.mp3",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://image.flaticon.com/icons/png/512/4020/4020016.png",
    id: "7",
    audio:
      "https://www.mboxdrive.com/7.mp3",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://image.flaticon.com/icons/png/512/4020/4020017.png",
    id: "8",
    audio:
      "https://www.mboxdrive.com/8.mp3",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://image.flaticon.com/icons/png/512/4020/4020018.png",
    id: "9",
    audio:
      "https://www.mboxdrive.com/9.mp3",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://image.flaticon.com/icons/png/512/4020/4020020.png",
    id: "10",
    audio:
      "https://www.mboxdrive.com/10.mp3",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://i.ibb.co/vBqGsnT/11.png",
    id: "11",
    audio:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://i.ibb.co/SrbKZRK/12.png",
    id: "12",
    audio:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://i.ibb.co/51K88wZ/13.png",
    id: "13",
    audio:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://i.ibb.co/KmfZpjQ/14.png",
    id: "14",
    audio:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://i.ibb.co/GnwRptd/15.png",
    id: "15",
    audio:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://i.ibb.co/02VjFPb/16.png",
    id: "16",
    audio:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://i.ibb.co/qgdtW3Z/17.png",
    id: "17",
    audio:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://i.ibb.co/syWmT0z/18.png",
    id: "18",
    audio:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://i.ibb.co/HHGCz0M/19.png",
    id: "19",
    audio:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://i.ibb.co/9HgpqS0/20.png",
    id: "20",
    audio:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://i.ibb.co/0FC7cy4/30.png",
    id: "30",
    audio:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://i.ibb.co/JRGCDQp/40.png",
    id: "40",
    audio:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://i.ibb.co/Ry8MJVd/50.png",
    id: "50",
    audio:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://i.ibb.co/yYpy1D0/60.png",
    id: "60",
    audio:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
  }, {
    title: "faded",
    artist: "Alan Walker",
    image: "https://i.ibb.co/rpBvzJL/70.png",
    id: "70",
    audio:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
  }, {
    title: "faded",
    artist: "Alan Walker",
    image: "https://i.ibb.co/D5Hj7zR/10.png",
    id: "80",
    audio:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
  }, {
    title: "faded",
    artist: "Alan Walker",
    image: "https://i.ibb.co/W3T6YMF/90.png",
    id: "90",
    audio:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
  }, {
    title: "faded",
    artist: "Alan Walker",
    image: "https://i.ibb.co/T8HX9tC/100.png",
    id: "100",
    audio:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
  },
];

export default songs;
