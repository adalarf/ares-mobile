import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import useStore from "../services/store";
import { useNavigation } from "@react-navigation/native";

function LaunchScreen() {
  const token = useStore((state) => state.authToken);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (token) {
        navigation.navigate("mainPage");
      } else {
        navigation.navigate("home");
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/splash-screen.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default LaunchScreen;