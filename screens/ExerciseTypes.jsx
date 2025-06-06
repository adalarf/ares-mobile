import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";
import { getMuscleGroups } from "../hooks/useMainRequests";
import useStore from "../services/store";

export const ExerciseTypesScreen = ({ navigation }) => {
  const muscleGroups = useStore((state) => state.muscle_groups);

  useEffect(() => {
    getMuscleGroups();
  }, []);

  return (
    <View>
      <ImageBackground
        source={require("../assets/dark-background.png")}
        style={styles.backgroundImage}
        imageStyle={styles.image}
        resizeMode="cover"
      />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("mainPage")}>
          <Image
            source={require("../assets/back-icon.png")}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.gemsCount}>Тренировки</Text>
        <View style={styles.menuIcon} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
      >
        {muscleGroups.map((group, idx) => (
          <CustomButtonWithGradientBorder
            key={idx}
            onPress={() =>
              navigation.navigate("exercises", { muscle_group_id: group.id })
            }
            title={group.name}
            style={styles.settingsButton}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").height * 1.2,
  },
  header: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    height: 100,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  menuIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  gemsCount: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  levelCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  levelText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  scrollView: {
    position: "absolute",
    top: 160,
    width: "100%",
    height: "100%",
  },
  scrollContainer: {
    paddingBottom: 40,
    alignItems: "center",
  },
  settingsButton: {
    width: 298,
    height: 59,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.15)",
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  settingsButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
  },
});