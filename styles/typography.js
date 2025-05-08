// import { useFonts } from 'expo-font';

// const [fontsLoaded] = useFonts({
//     'ForestSmooth': require('../assets/fonts/ForestSmooth.ttf')
// });

export const typography = {
    bounded: {
      fontFamily: "Bounded",
    },
    boundedBold: {
      fontFamily: "Bounded-Bold",
    },
    forestSmooth: {
      fontFamily: "Forest-Smooth",
    },
  };
  
  export const textStyles = {
    headerText: {
      ...typography.bounded,
      fontSize: 32,
      color: "#FFFFFF",
    },
    buttonText: {
      ...typography.bounded,
      color: "#FFFFFF",
      fontSize: 16,
    },
    trainingNumberTextStyle: {
      ...typography.forestSmooth,
      color: "#FFFFFF",
      fontSize: 40,
    },
  };