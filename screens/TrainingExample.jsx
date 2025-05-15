import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { typography } from "../styles/typography";
import { useNavigation } from "@react-navigation/native";
import { TrainingHeader } from "../components/TrainingHeader";
import { authService } from "../services/api/authService";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { get } from "lodash";

const onComplete = async (exercise, navigation) => {
  try {
    const token = await authService.get_token();

    const response = await axios.post(
      "http://51.250.36.219:8000/training/complete_exercise/" +
        get(exercise, "exercise_id", 1),
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    console.log("Response:", response.status);

    if (response.status === 200) {
      navigation.navigate("trainingComplete", { exercise });
    } else {
      console.error("Failed to send workout plan:", response.status);
    }
  } catch (error) {
    console.error(
      "Error sending workout plan:",
      JSON.stringify(error, null, 2),
    );
  }
};

export const TrainingExampleScreen = ({ route }) => {
  const navigation = useNavigation();
  const [timeLeft, setTimeLeft] = useState(2);
  const [isRunning, setIsRunning] = useState(false);
  const { exercise } = route.params;

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      onComplete(exercise, navigation);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, navigation]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")} : ${secs.toString().padStart(2, "0")}`;
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/training-background.png")}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Image
              style={styles.cross}
              source={require("../assets/cross.png")}
            />
          </TouchableOpacity>
          <Text style={[styles.headerText, typography.bounded]}>
            {exercise.name}
          </Text>
          <View style={styles.cross} />
        </View>
        <View style={styles.imageContainer}>
          {/*<Image*/}
          {/*  style={styles.characterImage}*/}
          {/*  source={*/}
          {/*    exercise.image*/}
          {/*      ? { uri: exercise.image }*/}
          {/*      : require("../assets/training-plug.png")*/}
          {/*  }*/}
          {/*/>*/}
          <TouchableOpacity
            style={styles.infoButton}
            onPress={() => navigation.navigate("trainingInfo")}
          >
            <Image
              style={styles.infoIcon}
              source={require("../assets/info.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.infoText, typography.bounded]}>Подход</Text>
          <Text
            style={[styles.infoText, typography.bounded]}
          >{`1/${exercise.repetitions}`}</Text>
        </View>
        <View style={styles.timerContainer}>
          <Text style={[styles.timerText, typography.bounded]}>
            {formatTime(timeLeft)}
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.stopButton}
            onPress={() => setIsRunning(false)}
          >
            <Text style={[styles.buttonText, typography.bounded]}>Стоп</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => setIsRunning(true)}
          >
            <Text style={[styles.buttonText, typography.bounded]}>Старт</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cross: {
    width: 52,
    height: 52,
  },
  background: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").height,
  },
  headerContainer: {
    marginTop: 55,
    alignItems: "center",
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  imageContainer: {
    marginTop: 30,
    alignItems: "center",
    position: "relative",
    width: Dimensions.get("window").width - 32,
    flex: 0.8,
    marginHorizontal: 16,
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
  infoButton: {
    position: "absolute",
    top: 30,
    right: 20,
    width: 30,
    height: 30,
  },
  infoIcon: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 20,
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.2)",
  },
  infoText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  timerContainer: {
    marginTop: 20,
    alignSelf: "center",
  },
  timerText: {
    fontSize: 36,
    color: "#FFFFFF",
  },
  buttonsContainer: {
    gap: 10,
    height: 96,
    width: "80%",
    marginTop: 30,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stopButton: {
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C1C1C16E",
  },
  startButton: {
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ACD2006E",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
});