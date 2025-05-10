import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { typography } from "../styles/typography";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";

export const TrainingInfoScreen = ({ navigation, route }) => {
  const description = route?.params?.description;
  const image = route?.params?.image;
  const { top, bottom } = useSafeAreaInsets();

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/training-background.png")}
    >
      <ScrollView
        style={[styles.container, { paddingTop: top, paddingBottom: bottom }]}
      >
        <View style={styles.headerContainer}>
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
        <View style={styles.imageContainer}>
          <Image
            style={styles.characterImage}
            source={
              image ? { uri: image } : require("../assets/training-plug.png")
            }
          />
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
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    color: "#FFFFFF",
    textAlign: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  characterImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
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