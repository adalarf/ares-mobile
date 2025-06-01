import { StyleSheet, View, ImageBackground, Dimensions } from "react-native";
import { CustomInput } from "../components/common/CustomInput";
import { useState } from "react";
import { handleSelect } from "../services/api/handleSelection";
import { ScreenHeader } from "../components/common/ScreenHeader";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";
import useStore from "../services/store";
import { get } from "lodash";

export const SelectParametersScreen = ({ navigation, route }) => {
  const [height, setHeight] = useState("178");
  const [weight, setWeight] = useState("67");
  const [age, setAge] = useState("21");
  const setData = useStore((state) => state.setData);
  const from = get(route, "params.from", "");

  const onSubmit = async () => {
    const numericHeight = parseFloat(height);
    const numericWeight = parseFloat(weight);
    const numericAge = Number(age);

    if (!numericHeight || !numericWeight) {
      alert("Пожалуйста, введите корректные значения роста и веса");
      return;
    }
    setData("parameters", {
      height: numericHeight,
      weight: numericWeight,
      age: numericAge,
    });
    await handleSelect(
      { height: numericHeight, weight: numericWeight, age: numericAge },
      navigation,
      from ? from : "selectPlace",
    );
  };

  return (
    <View>
      <ImageBackground
        source={require("../assets/home-blured.png")}
        style={styles.entrance_page}
      />

      <View style={styles.authContainer}>
        <ScreenHeader lines={["Напиши ", "о себе"]} />
        <View style={styles.inputContainer}>
          <CustomInput
            placeholder="Возраст"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
          />
          <CustomInput
            placeholder="Рост"
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />
          <CustomInput
            placeholder="Вес"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
        </View>

        <CustomButtonWithGradientBorder
          style={styles.buttonNext}
          onPress={onSubmit}
          title={"Далее"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  entrance_page: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
  authContainer: {
    position: "absolute",
    justifyContent: "space-between",
    top: 50,
    width: "100%",
    height: 300,
  },
  authorizationTextContainer: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    gap: 15,
    top: 70,
    alignItems: "center",
  },
  buttonNext: {
    top: 90,
    width: Dimensions.get("window").width - 80,
    height: 59,
    fontSize: 14,
    color: "#FFFFFF",
    borderColor: "#808080",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
  },
});