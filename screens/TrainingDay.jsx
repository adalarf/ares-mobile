import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { TrainingHeader } from "../components/TrainingHeader";
import { TrainingItemDay } from "../components/TrainingItemDay";

export const TrainingDayScreen = ({ route, navigation }) => {
  const { dayId, dayData } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/training-background.png")}
      />
      <TrainingHeader title="Упражнение дня" subtitle="- 20 мин 160 ккал" />
      <View style={styles.trainingsContainer}>
        {dayData.exercises.map((exercise, idx) => (
          <TrainingItemDay
            key={exercise.exercise_id}
            image={
              exercise.image
                ? { uri: exercise.image }
                : require("../assets/training-plug.png")
            }
            date={`${idx + 1}. ${exercise.name} ${exercise.sets_number}x${exercise.repetitions}`}
            xp={exercise.expirience}
            gems={exercise.gems}
            navigation={navigation}
            exercise={exercise}
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
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").height,
  },
  trainingsContainer: {
    left: 30,
    top: 120,
    position: "absolute",
  },
});