import { View, StyleSheet, Text } from "react-native";
import { BackgroundLayout } from "../components/layout/BackgroundLayout";
import { ScreenHeader } from "../components/common/ScreenHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authService } from "../services/api/authService";
import axios from "axios";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";

const sendWorkoutPlan = async (load, navigation) => {
  try {
    const token = await authService.get_token();
    const trainingLevel = await AsyncStorage.getItem("training_level");
    const goal = await AsyncStorage.getItem("goal");
    const trainingPlace = await AsyncStorage.getItem("training_place");

    const response = await axios.post(
      "http://51.250.36.219:8000/training/workout_plan",
      {
        training_level: trainingLevel,
        goal: goal,
        training_place: trainingPlace,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (response.status === 200) {
      navigation.navigate("mainPage");
    } else {
      console.error("Failed to send workout plan:", response.status);
    }
  } catch (error) {
    console.error("Error sending workout plan:", error);
  }
};

export const SelectLoadScreen = ({ navigation }) => {
  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <ScreenHeader lines={["Какая у вас", "нагрузка?"]} />

        <View style={styles.buttonContainer}>
          <CustomButtonWithGradientBorder
            onPress={() => sendWorkoutPlan("physical", navigation)}
          >
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>Слегка активный</Text>
              <Text style={styles.secondaryText}>
                Сидячая работа - офисный работник
              </Text>
            </View>
          </CustomButtonWithGradientBorder>
          <CustomButtonWithGradientBorder
            onPress={() => sendWorkoutPlan("intellegentive", navigation)}
          >
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>Умеренно активный</Text>
              <Text style={styles.secondaryText}>
                Стоячая работа - учитель, парикмахер
              </Text>
            </View>
          </CustomButtonWithGradientBorder>
          <CustomButtonWithGradientBorder
            onPress={() => sendWorkoutPlan("intellegentive", navigation)}
          >
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>Активный</Text>
              <Text style={styles.secondaryText}>
                Ходячая работа - продавец
              </Text>
            </View>
          </CustomButtonWithGradientBorder>
          <CustomButtonWithGradientBorder
            onPress={() => sendWorkoutPlan("intellegentive", navigation)}
          >
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>Очень активный</Text>
              <Text style={styles.secondaryText}>
                Физическая работа - строитель, грузчик
              </Text>
            </View>
          </CustomButtonWithGradientBorder>
        </View>
      </View>
    </BackgroundLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
    top: 50,
    width: "100%",
    height: 350,
  },
  buttonContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: 269,
  },
  mainText: {
    fontSize: 16,
    fontFamily: "Bounded-Regular",
    color: "#FFFFFF",
  },
  secondaryText: {
    fontSize: 10,
    fontFamily: "Bounded-Regular",
    color: "#FFFFFF",
  },
  textContainer: {
    width: "100%",
    paddingLeft: 10,
  },
});