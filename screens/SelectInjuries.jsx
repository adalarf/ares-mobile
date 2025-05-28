import React from "react";
import { BackgroundLayout } from "../components/layout/BackgroundLayout";
import { Text, View } from "react-native";
import { styles } from "./SelectLoad";
import { ScreenHeader } from "../components/common/ScreenHeader";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";
import { postInjuries, sendWorkoutPlan } from "../hooks/useMainRequests";

function SelectInjuries({ navigation }) {
  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <ScreenHeader lines={["Есть ли у вас" + "травмы? "]} />
        <View style={styles.buttonContainer}>
          <CustomButtonWithGradientBorder
            style={{ height: 100 }}
            onPress={async () => {
              navigation.navigate("selectInjuryType");
            }}
          >
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>Да</Text>
            </View>
          </CustomButtonWithGradientBorder>
          <CustomButtonWithGradientBorder
            style={{ height: 100 }}
            onPress={async () => {
              await postInjuries();
              await sendWorkoutPlan(navigation);
            }}
          >
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>Нет</Text>
            </View>
          </CustomButtonWithGradientBorder>
        </View>
      </View>
    </BackgroundLayout>
  );
}

export default SelectInjuries;