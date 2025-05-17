import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { typography } from "../styles/typography";
import { Calendar } from "react-native-calendars";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback } from "react";
import { get } from "lodash";
import { useNavigation } from "@react-navigation/native";
import useStore from "../services/store";

export const CalendarCard = () => {
  const navigation = useNavigation();
  const workoutData = useStore((state) => state.workout_plan);

  const getTitle = useCallback(() => {
    const today = new Date().toISOString().split("T")[0];
    const workout = get(workoutData, "days", []).find(
      (item) => item.date === today,
    );
    return workout
      ? `День  ${get(workout, "muscle_group", "")}`
      : "Нет упражнений";
  }, [workoutData]);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require("../assets/training-icon.png")}
          style={styles.icon}
          resizeMode="contain"
        />
      </View>
      <Text style={[styles.title, typography.bounded]}>{getTitle()}</Text>
      <View>
        <Calendar
          firstDay={1}
          hideArrows
          hideDayNames
          style={{
            backgroundColor: "transparent",
          }}
          theme={{
            calendarBackground: "transparent",
          }}
          renderHeader={(date) => {
            const month = date.toString("MMMM");
            return (
              <Text
                style={{
                  fontSize: 11,
                  color: "rgba(255, 255, 255, 0.74)",
                  textAlign: "center",
                  ...typography.bounded,
                }}
              >
                {month}
              </Text>
            );
          }}
          dayComponent={({ date, state }) => {
            const dayOfWeek = new Date(date.dateString).getDay();
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

            const todayString = new Date().toISOString().split("T")[0];
            const isToday = date.dateString === todayString;

            const textColor = isToday
              ? "white"
              : isWeekend
                ? "black"
                : state === "disabled"
                  ? "rgba(182, 182, 182, 1)"
                  : "white";

            return (
              <TouchableOpacity
                onPress={() => {
                  const workout = workoutData?.days?.find(
                    (item) => item.date === date.dateString,
                  );
                  if (workout) {
                    console.log("Workout Data:", workout);
                    navigation.navigate("trainingDay", {
                      dayId: workout.id,
                      dayData: workout,
                    });
                  } else {
                    console.log("No workout data for this date.");
                  }
                }}
              >
                <DayWrapper style={styles.dayContainer} isToday={isToday}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: textColor,
                      textAlign: "center",
                      ...typography.bounded,
                    }}
                  >
                    {date.day}
                  </Text>
                </DayWrapper>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

const DayWrapper = ({ isToday, children, style }) => {
  return isToday ? (
    <LinearGradient
      colors={["#000000", "#000000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={style}
    >
      <LinearGradient
        colors={[
          "rgba(126, 126, 126, 0.2)",
          "rgba(238, 238, 238, 0.2)",
          "rgba(0, 0, 0, 0.2)",
        ]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={style}
      >
        {children}
      </LinearGradient>
    </LinearGradient>
  ) : (
    <View style={style}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "Bounded-Regular",
    alignSelf: "center",
  },
  calendarImage: {
    width: "100%",
    height: 250,
    alignSelf: "center",
  },
  dayContainer: {
    width: 30,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
});