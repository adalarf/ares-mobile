import React from "react";
import { Text, View } from "react-native";
import { BackgroundLayout } from "../components/layout/BackgroundLayout";
import { ScreenHeader } from "../components/common/ScreenHeader";
import { styles } from "./SelectLoad";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";
import { handleSelect } from "../services/api/handleSelection";

function SelectIntensity({ navigation }) {
  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <ScreenHeader lines={["Какой у вас", "уровень", "подготовки?"]} />
        <View style={styles.buttonContainer}>
          <CustomButtonWithGradientBorder
            onPress={async () => {
              await handleSelect(
                { intensity: "low" },
                navigation,
                "selectFoodRestrictions",
              );
            }}
          >
            <View style={styles.textContainer}>
              <Text style={[styles.mainText, { textAlign: "center" }]}>
                Новичок
              </Text>
              <Text style={[styles.secondaryText, { textAlign: "center" }]}>
                Мир фитнеса для вас в новинку
              </Text>
            </View>
          </CustomButtonWithGradientBorder>
          <CustomButtonWithGradientBorder
            onPress={async () => {
              await handleSelect(
                { intensity: "middle" },
                navigation,
                "selectFoodRestrictions",
              );
            }}
          >
            <View style={styles.textContainer}>
              <Text style={[styles.mainText, , { textAlign: "center" }]}>
                Средний
              </Text>
              <Text style={[styles.secondaryText, { textAlign: "center" }]}>
                Когда то занимались дома и может быть в зале
              </Text>
            </View>
          </CustomButtonWithGradientBorder>
          <CustomButtonWithGradientBorder
            onPress={async () => {
              await handleSelect(
                { intensity: "high" },
                navigation,
                "selectFoodRestrictions",
              );
            }}
          >
            <View style={styles.textContainer}>
              <Text style={[styles.mainText, , { textAlign: "center" }]}>
                Продвинутый
              </Text>
              <Text style={[styles.secondaryText, , { textAlign: "center" }]}>
                Активный пользователь фитнес приложений и зала
              </Text>
            </View>
          </CustomButtonWithGradientBorder>
        </View>
      </View>
    </BackgroundLayout>
  );
}

export default SelectIntensity;