import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { TrainingHeader } from "../components/TrainingHeader";
import { TrainingItem } from "../components/TrainingItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authService } from "../services/api/authService";

export const TrainingScreen = ({ navigation }) => {
  const [workoutData, setWorkoutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkoutPlan = async () => {
      try {
        const token = await authService.get_token();
        const response = await fetch(
          "http://51.250.36.219:8000/training/workout_plan",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          },
        );
        const data = await response.json();
        console.log("Workout Plan Data:", data);
        setWorkoutData(data);
      } catch (error) {
        console.error("Ошибка загрузки плана тренировок:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkoutPlan();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ImageBackground
          style={styles.background}
          source={require("../assets/training-background.png")}
        />
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/training-background.png")}
      />
      <TrainingHeader title="Тренировки" subtitle="1 - 2 неделя" />
      <View style={styles.trainingsContainer}>
        {workoutData?.days?.map((day, idx) => (
          <TrainingItem
            key={idx}
            time="~20 мин"
            number="1"
            id={day.id}
            dayData={day}
            image={
              day.image
                ? { uri: day.image }
                : require("../assets/training-plug.png")
            }
            title={day.muscle_group}
            day={day.day_of_week}
            date={day.date}
            xp={day.exercises?.reduce(
              (sum, ex) => sum + (ex.expirience || 0),
              0,
            )}
            gems={day.exercises?.reduce((sum, ex) => sum + (ex.gems || 0), 0)}
            navigation={navigation}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  background: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  trainingsContainer: {
    left: 30,
    top: 120,
    position: "absolute",
  },
});