import { StyleSheet, View } from "react-native";
import { CustomButton } from "../components/common/CustomButton";
import { BackgroundLayout } from "../components/layout/BackgroundLayout";
import { ScreenHeader } from "../components/common/ScreenHeader";
import { handleSelect } from "../services/api/handleSelection";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SelectActivityScreen = ({ navigation }) => {
  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <ScreenHeader lines={["Какая у тебя", "активность?"]} />

        <View style={styles.buttonContainer}>
          <CustomButton
            title="0-2000 шагов"
            onPress={async () => {
              await AsyncStorage.setItem("training_level", "low");
              handleSelect({ activity: "low" }, navigation, "selectParameters");
            }}
          />
          <CustomButton
            title="2000-5000 шагов"
            onPress={async () => {
              await AsyncStorage.setItem("training_level", "middle");
              handleSelect(
                { activity: "middle" },
                navigation,
                "selectParameters",
              );
            }}
          />
          <CustomButton
            title="5000-10000 шагов"
            onPress={async () => {
              await AsyncStorage.setItem("training_level", "high");
              handleSelect(
                { activity: "high" },
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
    top: 110,
    width: "100%",
    height: 350,
  },
  buttonContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: 269,
  },
});