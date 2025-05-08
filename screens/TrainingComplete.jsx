import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { typography } from "../styles/typography";

export const TrainingCompleteScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/training-background.png")}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.characterImage}
              source={require("../assets/complete-character.png")}
            />
            <Text style={[styles.congratulationsText, typography.bounded]}>
              Поздравляем!
            </Text>
          </View>
          <Text style={[styles.trainingTitle, typography.bounded]}>
            Тренировка 1
          </Text>
          <View style={styles.exercisesList}>
            <Text style={[styles.exerciseText, typography.bounded]}>
              1. Отжимания 10x3
            </Text>
            <Text style={[styles.exerciseText, typography.bounded]}>
              2. Приседания 20x3
            </Text>
            <Text style={[styles.exerciseText, typography.bounded]}>
              3. Выпады 10x2
            </Text>
            <Text style={[styles.exerciseText, typography.bounded]}>
              4. Скручивания 10x3
            </Text>
            <Text style={[styles.exerciseText, typography.bounded]}>
              5. Махи ногами 15x3
            </Text>
          </View>
          <View style={styles.rewardsContainer}>
            <Text style={[styles.rewardText, typography.bounded]}>50 XP</Text>
            <View style={styles.gemsContainer}>
              <Text style={[styles.rewardText, typography.bounded]}>50</Text>
              <Image
                style={styles.gemIcon}
                source={require("../assets/gem.png")}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("mainPage")}
            style={styles.acceptButton}
          >
            <Text style={[styles.buttonText, typography.bounded]}>Принять</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "rgba(128, 0, 128, 0.9)",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  characterImage: {
    width: 150,
    height: 150,
  },
  congratulationsText: {
    fontSize: 24,
    color: "#FFFFFF",
    marginTop: 10,
  },
  trainingTitle: {
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 20,
  },
  exercisesList: {
    width: "100%",
    marginBottom: 20,
  },
  exerciseText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 5,
  },
  checkmark: {
    fontSize: 16,
    color: "#00FF00",
    position: "absolute",
    right: 20,
  },
  rewardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  rewardText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  gemsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  gemIcon: {
    width: 35,
    height: 35,
    marginLeft: 5,
  },
  acceptButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "purple",
  },
});