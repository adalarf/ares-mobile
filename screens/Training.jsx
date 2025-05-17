import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { TrainingHeader } from "../components/TrainingHeader";
import { TrainingItem } from "../components/TrainingItem";
import useStore from "../services/store";

export const TrainingScreen = ({ navigation }) => {
  const workoutData = useStore((state) => state.workout_plan);
  const [loading, setLoading] = useState(false);

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
      >
        <TrainingHeader title="Тренировки" subtitle="1 - 2 неделя" />
        <ScrollView>
          <View style={styles.trainingsContainer}>
            {workoutData?.days?.map((day, idx) => (
              <TrainingItem
                key={idx}
                time="~20 мин"
                number={idx + 1}
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
                gems={day.exercises?.reduce(
                  (sum, ex) => sum + (ex.gems || 0),
                  0,
                )}
                navigation={navigation}
              />
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  background: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").height,
  },
  trainingsContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
});