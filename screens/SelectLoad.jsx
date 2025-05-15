import { View, StyleSheet, Text } from "react-native";
import { BackgroundLayout } from "../components/layout/BackgroundLayout";
import { ScreenHeader } from "../components/common/ScreenHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";
import { handleSelect } from "../services/api/handleSelection";

export const SelectLoadScreen = ({ navigation }) => {
  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <ScreenHeader lines={["Какая у вас", "нагрузка?"]} />

        <View style={styles.buttonContainer}>
          <CustomButtonWithGradientBorder
            onPress={async () => {
              await AsyncStorage.setItem("training_level", "low");
              await handleSelect(
                { activity: "low" },
                navigation,
                "selectIntensity",
              );
            }}
          >
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>Слегка активный</Text>
              <Text style={styles.secondaryText}>
                Сидячая работа - офисный работник
              </Text>
            </View>
          </CustomButtonWithGradientBorder>
          <CustomButtonWithGradientBorder
            onPress={async () => {
              await AsyncStorage.setItem("training_level", "middle");
              await handleSelect(
                { activity: "middle" },
                navigation,
                "selectIntensity",
              );
            }}
          >
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>Умеренно активный</Text>
              <Text style={styles.secondaryText}>
                Стоячая работа - учитель, парикмахер
              </Text>
            </View>
          </CustomButtonWithGradientBorder>
          <CustomButtonWithGradientBorder
            onPress={async () => {
              await AsyncStorage.setItem("training_level", "high");
              await handleSelect(
                { activity: "high" },
                navigation,
                "selectIntensity",
              );
            }}
          >
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>Активный</Text>
              <Text style={styles.secondaryText}>
                Ходячая работа - продавец
              </Text>
            </View>
          </CustomButtonWithGradientBorder>
          <CustomButtonWithGradientBorder
            onPress={async () => {
              await AsyncStorage.setItem("training_level", "high");
              await handleSelect(
                { activity: "high" },
                navigation,
                "selectIntensity",
              );
            }}
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

export const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    width: "100%",
  },
  buttonContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: "100%",
    paddingHorizontal: 40,
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
    gap: 4,
  },
});