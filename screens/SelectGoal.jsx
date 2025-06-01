import { View, StyleSheet } from "react-native";
import { BackgroundLayout } from "../components/layout/BackgroundLayout";
import { ScreenHeader } from "../components/common/ScreenHeader";
import { handleSelect } from "../services/api/handleSelection";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";
import useStore from "../services/store";
import { get } from "lodash";

export const SelectGoalScreen = ({ navigation, route }) => {
  const setData = useStore((state) => state.setData);
  const from = get(route, "params.from", "");

  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <ScreenHeader lines={["Цель", "тренировки:"]} />

        <View style={styles.buttonContainer}>
          <CustomButtonWithGradientBorder
            title="Похудение"
            onPress={async () => {
              setData("goal", "weight_loss");
              await handleSelect(
                { goal: "weight_loss" },
                navigation,
                from ? from : "selectParameters",
              );
            }}
          />
          <CustomButtonWithGradientBorder
            title="Набор мышц"
            onPress={async () => {
              setData("goal", "muscle_gain");
              await handleSelect(
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