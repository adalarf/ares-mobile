import { View, StyleSheet } from "react-native";
import { BackgroundLayout } from "../components/layout/BackgroundLayout";
import { ScreenHeader } from "../components/common/ScreenHeader";
import { handleSelect } from "../services/api/handleSelection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";

export const SelectPlaceScreen = ({ navigation }) => {
  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <ScreenHeader lines={["Где будут", "занятия?"]} />

        <View style={styles.buttonContainer}>
          <CustomButtonWithGradientBorder
            title="Дома"
            onPress={async () => {
              await AsyncStorage.setItem("training_place", "Дом");
              handleSelect(
                { training_place: "home" },
                navigation,
                "selectLoad",
              );
            }}
          />
          <CustomButtonWithGradientBorder
            title="На улице"
            onPress={async () => {
              await AsyncStorage.setItem("training_place", "Зал");
              handleSelect(
                { training_place: "outside" },
                navigation,
                "selectLoad",
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
    width: 269,
  },
});