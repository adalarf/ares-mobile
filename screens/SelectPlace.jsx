import { View, StyleSheet } from "react-native";
import { BackgroundLayout } from "../components/layout/BackgroundLayout";
import { ScreenHeader } from "../components/common/ScreenHeader";
import { handleSelect } from "../services/api/handleSelection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";
import useStore from "../services/store";

export const SelectPlaceScreen = ({ navigation }) => {
  const setData = useStore((state) => state.setData);
  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <ScreenHeader lines={["Где будут", "занятия?"]} />

        <View style={styles.buttonContainer}>
          <CustomButtonWithGradientBorder
            title="Дома"
            onPress={async () => {
              setData("training_place", "home");
              await handleSelect(
                { training_place: "home" },
                navigation,
                "selectLoad",
              );
            }}
          />
          <CustomButtonWithGradientBorder
            title="В зале"
            onPress={async () => {
              setData("training_place", "gym");
              await handleSelect(
                { training_place: "gym" },
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
    width: "100%",
    paddingHorizontal: 40,
  },
});