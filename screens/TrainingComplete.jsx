import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { textStyles, typography } from "../styles/typography";
import { LinearGradient } from "expo-linear-gradient";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";
import { get } from "lodash";

export const TrainingCompleteScreen = ({ navigation, route }) => {
  const { exercise } = route.params;

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/complete_exercise.png")}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/cross.png")}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      </View>
      <LinearGradient
        style={styles.container}
        colors={["#7F60DD", "#6A76FF", "#FF01A1", "#FF01A1"]}
      >
        <LinearGradient
          colors={["#6E4E79", "#9E4ABA", "#804A93"]}
          style={{ borderRadius: 21, padding: 17, paddingBottom: 20 }}
        >
          <View style={{ height: 170 }}>
            <LinearGradient
              colors={[
                "#FFEB00",
                "#FFEB00",
                "#FC9B5F",
                "#F849C1",
                "#FF00A1",
              ].reverse()}
              start={[0, 0]}
              end={[1, 1]}
              style={styles.imageContainer}
            >
              <View style={styles.imageContainer2} />
            </LinearGradient>
            <Image
              style={styles.characterImage}
              source={require("../assets/complete-character.png")}
            />
            <LinearGradient
              colors={[
                "rgba(255,235,0,0.2)",
                "rgba(252,155,95,0.2)",
                "rgba(255,0,161,0.2)",
              ].reverse()}
              start={[0, 0]}
              end={[1, 1]}
              style={styles.line}
            />
          </View>
          <Text style={[styles.title, typography.bounded]}>
            {get(exercise, "name", "")}{" "}
          </Text>
          <View style={styles.textContainer}>
            <View style={styles.row}>
              <Text style={[styles.exerciseText, typography.bounded]}>
                1. {get(exercise, "name", "")} {get(exercise, "repetitions")}x
                {get(exercise, "sets_number")}
              </Text>
              <Image
                source={require("../assets/done.png")}
                style={styles.icon}
              />
            </View>
          </View>
          <View style={[styles.row, { paddingHorizontal: 10 }]}>
            <Text style={[textStyles.buttonText, typography.bounded]}>
              {get(exercise, "expirience", 0)} XP
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[textStyles.buttonText, typography.bounded]}>
                {get(exercise, "gems", 0)}
              </Text>
              <Image
                source={require("../assets/gems.png")}
                style={styles.gems}
              />
            </View>
          </View>
          <CustomButtonWithGradientBorder
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.button}
          >
            <Text style={[textStyles.buttonText, typography.bounded]}>
              Принять
            </Text>
          </CustomButtonWithGradientBorder>
        </LinearGradient>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  button: {
    width: 200,
    alignSelf: "center",
  },
  menuIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  container: {
    marginTop: 20,
    width: Dimensions.get("window").width - 100,
    alignSelf: "center",
    borderRadius: 22,
    padding: 1,
  },
  imageContainer: {
    height: 150,
    borderRadius: 48,
    padding: 1,
    marginTop: 20,
  },
  imageContainer2: {
    flex: 1,
    backgroundColor: "#ae8bba",
    borderRadius: 47,
  },
  characterImage: {
    position: "absolute",
    width: "100%",
    height: 220,
    zIndex: 999,
    bottom: -27,
    alignSelf: "center",
    resizeMode: "contain",
  },
  title: {
    ...textStyles.buttonText,
    marginTop: 20,
    textAlign: "center",
  },
  exerciseText: {
    color: "rgba(255, 255, 255, 0.74)",
    fontSize: 11,
  },
  textContainer: {
    paddingVertical: 20,
  },
  gems: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
});