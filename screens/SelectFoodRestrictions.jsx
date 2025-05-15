import React from "react";
import { BackgroundLayout } from "../components/layout/BackgroundLayout";
import { styles } from "./SelectLoad";
import { View, Text } from "react-native";
import { ScreenHeader } from "../components/common/ScreenHeader";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";
import { authService } from "../services/api/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const sendWorkoutPlan = async (navigation) => {
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
    console.error(
      "Error sending workout plan:",
      JSON.stringify(error, null, 2),
    );
  }
};

function SelectFoodRestrictions({ navigation }) {
  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <ScreenHeader
          lines={["У вас есть " + "ограничения " + "по питанию?"]}
        />
        <View style={styles.buttonContainer}>
          <CustomButtonWithGradientBorder
            onPress={() => sendWorkoutPlan(navigation)}
          >
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>Вегетарианец</Text>
              <Text style={styles.secondaryText}>
                Не едите продукты животного происхожднеия
              </Text>
            </View>
          </CustomButtonWithGradientBorder>
          <CustomButtonWithGradientBorder
            onPress={() => navigation.navigate("selectProductGroup")}
          >
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>Есть аллергия на продукты </Text>
              <Text style={styles.secondaryText}>
                Непереносимость продуктов
              </Text>
            </View>
          </CustomButtonWithGradientBorder>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButtonWithGradientBorder
            onPress={() => sendWorkoutPlan(navigation)}
            style={{ marginTop: 100 }}
          >
            <View style={styles.textContainer}>
              <Text style={[styles.mainText, { textAlign: "center" }]}>
                Всё вкусно!)
              </Text>
            </View>
          </CustomButtonWithGradientBorder>
        </View>
      </View>
    </BackgroundLayout>
  );
}

export default SelectFoodRestrictions;