import React from "react";
import { BackgroundLayout } from "../components/layout/BackgroundLayout";
import { styles } from "./SelectLoad";
import { View, Text } from "react-native";
import { ScreenHeader } from "../components/common/ScreenHeader";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";

function SelectFoodRestrictions({ navigation }) {
  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <ScreenHeader
          lines={["У вас есть " + "ограничения " + "по питанию?"]}
        />
        <View style={styles.buttonContainer}>
          <CustomButtonWithGradientBorder>
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>Вегетарианец</Text>
              <Text style={styles.secondaryText}>
                Не едите продукты животного происхожднеия
              </Text>
            </View>
          </CustomButtonWithGradientBorder>
          <CustomButtonWithGradientBorder>
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>Есть аллергия на продукты </Text>
              <Text style={styles.secondaryText}>
                Непереносимость продуктов
              </Text>
            </View>
          </CustomButtonWithGradientBorder>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButtonWithGradientBorder style={{ marginTop: 100 }}>
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