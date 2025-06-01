import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import useStore from "../store";
import { authService } from "./authService";

export const handleSelect = async (dataObject, navigation, nextScreen) => {
  try {
    const token = useStore.getState().authToken;
    if (dataObject.hasOwnProperty("intensity")) {
      await AsyncStorage.setItem("isFilledParameters", "filled");
    }
    if (!token) {
      Alert.alert("Ошибка", "Токен не найден");
      return;
    }

    const response = await fetch("http://51.250.36.219:8000/stats/stats", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataObject),
    });

    if (!response.ok) {
      await authService.refresh_tokens();
      throw new Error("Ошибка при отправке пола");
    }

    let routes = navigation.getState().routes;
    if (routes.some((route) => route.name === nextScreen)) {
      navigation.goBack();
    } else {
      navigation.navigate(nextScreen);
    }
  } catch (error) {
    console.error(error);
    Alert.alert("Ошибка", "Не удалось отправить данные. Попробуйте снова.");
  }
};