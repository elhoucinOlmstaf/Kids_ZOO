const jobs = [
  {
    title: "Painter",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/audios%2Fjobs%2FPainter.mp3?alt=media&token=ed5da17e-ff61-4765-a553-f50c35dc47d9",
    ImageUrl: "https://image.flaticon.com/icons/png/512/4344/4344202.png",
  },
  {
    title: "Cleaner",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/audios%2Fjobs%2Fcleaner.mp3?alt=media&token=3e0da388-ebc0-4eb8-9bca-e38cdfddf625",
    ImageUrl: "https://image.flaticon.com/icons/png/512/2870/2870667.png",
  },
  {
    title: "Doctor",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/audios%2Fjobs%2Fdoctor.mp3?alt=media&token=472d02bb-3b40-496d-980c-420adaeb6b47",
    ImageUrl: "https://image.flaticon.com/icons/png/512/1021/1021566.png",
  },
  {
    title: "Driver",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/audios%2Fjobs%2Fdriver.mp3?alt=media&token=4c2e2bcf-3d3f-4e13-bc72-491168100817",
    ImageUrl: "https://image.flaticon.com/icons/png/512/3474/3474667.png",
  },
  {
    title: "Engineer",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/audios%2Fjobs%2Fengineer.mp3?alt=media&token=fd8837fd-0c0e-4989-a3c3-8a55946baa17",
    ImageUrl: "https://image.flaticon.com/icons/png/512/2631/2631919.png",
  },
  {
    title: "Fireman",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/audios%2Fjobs%2Ffireman.mp3?alt=media&token=f7d4af95-baa3-4d31-a13b-64d876ebba37",
    ImageUrl: "https://image.flaticon.com/icons/png/512/3144/3144898.png",
  },
  {
    title: "Judge",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/audios%2Fjobs%2Fjudge.mp3?alt=media&token=c934afbb-b513-4ac8-8129-35c7ae4040e8",
    ImageUrl: "https://image.flaticon.com/icons/png/512/2328/2328408.png",
  },
  {
    title: "Lawyer",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/audios%2Fjobs%2Flayer.mp3?alt=media&token=6fc259ce-db60-45a0-866f-1867b182b92e",
    ImageUrl: "https://image.flaticon.com/icons/png/512/1995/1995429.png",
  },
  {
    title: "musician",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/audios%2Fjobs%2Fmusician.mp3?alt=media&token=05555721-2712-494c-a56d-e0fdcf7242e7",
    ImageUrl: "https://image.flaticon.com/icons/png/512/1995/1995298.png",
  },
  {
    title: "photographer",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/audios%2Fjobs%2Fphotographer.mp3?alt=media&token=f6c8cb8d-bbb4-47be-b50f-37a41a82c772",
    ImageUrl: "https://image.flaticon.com/icons/png/512/3460/3460849.png",
  },
  {
    title: "Pilot",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/audios%2Fjobs%2Fpilot.mp3?alt=media&token=8ea0e814-961d-4240-b279-e5633eb76fc7",
    ImageUrl: "https://image.flaticon.com/icons/png/512/1995/1995504.png",
  },
  {
    title: "Policeman",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/audios%2Fjobs%2Fpoliceman.mp3?alt=media&token=23e814b3-1549-44b0-8cef-f28630f3a5c6",
    ImageUrl: "https://image.flaticon.com/icons/png/512/1754/1754803.png",
  },
  {
    title: "scientist",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/audios%2Fjobs%2Fscientist.mp3?alt=media&token=59a52ded-3ef0-4e24-aba2-214916ea1c04",
    ImageUrl: "https://image.flaticon.com/icons/png/512/2941/2941556.png",
  },
  {
    title: "soldier",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/audios%2Fjobs%2Fsoldier.mp3?alt=media&token=1a59d738-8952-4485-95d6-658151096f62",
    ImageUrl: "https://image.flaticon.com/icons/png/512/3231/3231641.png",
  },
  {
    title: "Teacher",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/audios%2Fjobs%2Fteacher.mp3?alt=media&token=5fa24c44-d890-4d4d-b67a-c98fd32a3163",
    ImageUrl: "https://image.flaticon.com/icons/png/512/906/906175.png",
  },
  {
    title: "Waiter",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/kidszoo-249c2.appspot.com/o/audios%2Fjobs%2Fwaiter.mp3?alt=media&token=5d066cd0-8ee2-4c8b-a87e-3c875eefad45",
    ImageUrl: "https://image.flaticon.com/icons/png/512/906/906246.png",
  },
];
export default jobs;
