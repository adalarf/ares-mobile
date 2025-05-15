import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { typography } from "../styles/typography";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";

export const TrainingInfoScreen = ({ navigation, route }) => {
  const description = route?.params?.description;
  const image = route?.params?.image;
  const { top, bottom } = useSafeAreaInsets();

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/training-background.png")}
    >
      <View style={[styles.headerContainer, { paddingTop: top }]}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Image
            source={require("../assets/back-icon.png")}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={[styles.headerText, typography.bounded]}>
          Информация об упражнении
        </Text>
        <View style={{ width: 30 }} />
      </View>
      <ScrollView style={[styles.container, { paddingBottom: bottom }]}>
        <View style={styles.imageContainer}>
          <Image style={styles.characterImage} source={{ uri: image }} />
        </View>
        <View style={styles.instructionsContainer}>
          <Text style={[styles.instructionsHeader, typography.bounded]}>
            Описание:
          </Text>
          <Text style={[styles.instructionText, typography.bounded]}>
            {description || "Описание отсутствует"}
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 24,
    color: "#FFFFFF",
    textAlign: "center",
  },
  imageContainer: {
    alignItems: "center",
    position: "relative",
    width: Dimensions.get("window").width - 40,
    aspectRatio: 1,
    backgroundColor: "#9E9E9E",
    borderRadius: 44,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.74)",
  },
  characterImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  instructionsContainer: {
    marginTop: 10,
  },
  instructionsHeader: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 15,
  },
  background: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").height,
  },
  menuIcon: {
    width: 32,
    height: 32,
  },
});