import { View, StyleSheet } from "react-native";
import { BackgroundLayout } from "../components/layout/BackgroundLayout";
import { ScreenHeader } from "../components/common/ScreenHeader";
import { handleSelect } from "../services/api/handleSelection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";

export const SelectGoalScreen = ({ navigation }) => {
  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <ScreenHeader lines={["Цель", "тренировки:"]} />

        <View style={styles.buttonContainer}>
          <CustomButtonWithGradientBorder
            title="Похудение"
            onPress={async () => {
              await AsyncStorage.setItem("goal", "weight_loss");
              handleSelect(
                { goal: "weight_loss" },
                navigation,
                "selectParameters",
              );
            }}
          />
          <CustomButtonWithGradientBorder
            title="Набор мышц"
            onPress={async () => {
              await AsyncStorage.setItem("goal", "muscle_gain");
              handleSelect(
                { goal: "muscle_gain" },
                navigation,
                "selectParameters",
              );
            }}
          />
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
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: "100%",
    paddingHorizontal: 40,
  },
});