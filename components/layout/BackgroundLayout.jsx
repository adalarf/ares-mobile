import { View, ImageBackground, StyleSheet, Dimensions } from "react-native";

export const BackgroundLayout = ({ children }) => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/splash-screen-without-avatar.png")}
        style={styles.entrance_page}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  entrance_page: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
});