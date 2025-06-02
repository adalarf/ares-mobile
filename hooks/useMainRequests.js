import { authService, BASE_URL } from "../services/api/authService";
import useStore from "../services/store";
import { Alert } from "react-native";

export const createRequest = async (url, method, body) => {
  const token = await authService.get_token();
  return await fetch(`${BASE_URL}/${url}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const sendWorkoutPlan = async (navigation) => {
  const { training_level, goal, training_place } = useStore.getState();
  try {
    const response = await createRequest("training/workout_plan", "POST", {
      training_level,
      goal,
      training_place,
    });
    if (response.status === 200) {
      const data = await response.json();
      useStore.setState({ workout_plan: data });
      navigation.navigate("mainPage");
    } else {
      console.error("Failed to send workout plan:", response.status);
    }
  } catch (error) {
    console.error(
      "Error sending workout plan:",
      JSON.stringify(error, null, 2),
    );
  }
};

export const getMuscleGroups = async () => {
  try {
    const response = await createRequest("training/muscle_groups");
    if (response.status === 200) {
      const data = await response.json();
      useStore.setState({ muscle_groups: data });
    } else {
      console.error("Failed to fetch muscle groups:", response.status);
    }
  } catch (error) {
    console.error("Ошибка загрузки групп мышц:", error);
  }
};

export const postInjuries = async (injuries = []) => {
  try {
    const response = await createRequest("training/injuries", "POST", {
      injuries,
    });
    if (response.status !== 200) {
      console.error("Failed to post injuries:", response.status);
    }
  } catch (error) {
    console.error("Ошибка отправки травм:", error);
  }
};

export const getWorkoutPlan = async () => {
  try {
    const response = await createRequest("training/workout_plan", "GET");
    if (response.status === 200) {
      const data = await response.json();
      useStore.setState({ workout_plan: data });
    } else {
      console.error("Failed to fetch workout plan:", response.status);
    }
  } catch (error) {
    console.error("Ошибка загрузки плана тренировок:", error);
  }
};

export const getStatsInfo = async () => {
  try {
    const response = await createRequest("stats/info", "GET");
    if (response.status === 200) {
      const data = await response.json();
      useStore.setState({ stats_info: data });
    } else {
      console.error("Failed to fetch stats info:", response.status);
    }
  } catch (error) {
    console.error("Ошибка загрузки информации о пользователе:", error);
  }
};

export const postFoodRestrictions = async (restrictions) => {
  try {
    await createRequest("nutrition/restrictions", "POST", restrictions);
  } catch (error) {
    console.error("Ошибка отправки ограничений по питанию:", error);
  }
};

export const getBmiData = async () => {
  try {
    const response = await createRequest("stats/get_calories_info", "GET");
    if (response.status === 200) {
      const data = await response.json();
      useStore.setState({ bmi_data: data });
    } else {
      console.error("Failed to fetch BMI data:", response.status);
    }
  } catch (error) {
    console.error("Ошибка загрузки данных ИМТ:", error);
  }
};

export const getAvatar = async () => {
  try {
    const response = await createRequest("stats/get_user_avatar", "GET");
    if (response.status === 200) {
      const data = await response.json();
      useStore.setState({ avatar: data.avatar });
    } else {
      console.error("Failed to fetch avatar:", response.status);
    }
  } catch (error) {
    console.error("Ошибка загрузки аватара:", error);
  }
};

export const getNutritionPlan = async () => {
  try {
    const response = await createRequest("nutrition/meal_plan");
    if (response.status === 200) {
      const data = await response.json();
      console.log(JSON.stringify(data, null, 2));
      useStore.setState({ nutrition_plan: data });
    } else {
      console.error("Failed to fetch nutrition plan:", response.status);
      if (response.status === 404) {
        await generateNutritionPlan();
      }
    }
  } catch (error) {
    console.error("Ошибка загрузки плана питания:", error);
  }
};

export const generateNutritionPlan = async () => {
  try {
    const response = await createRequest(
      "nutrition/generate_meal_plan",
      "POST",
    );
    if (response.status === 200) {
      const data = await response.json();
      useStore.setState({ nutrition_plan: data });
    } else {
      console.error("Failed to generate nutrition plan:", response.status);
    }
  } catch (error) {
    console.error("Ошибка генерации плана питания:", error);
  }
};

export const makeMealEaten = async (id) => {
  try {
    const response = await createRequest(
      `nutrition/make_meal_eaten/${id}`,
      "POST",
    );
    if (response.status === 200) {
      // console.log("Meal eaten response", JSON.stringify(data, null, 2));
      return await response.json();
    } else {
      console.error("Failed to mark meal as eaten:", response.status);
    }
  } catch (error) {
    console.error("Error making meal eaten:", JSON.stringify(error, null, 2));
  }
};

export const getExercises = async (muscleGroupId) => {
  try {
    const response = await createRequest(
      `training/exercises?muscle_group_id=${muscleGroupId}`,
      "GET",
    );
    if (response.status === 200) {
      return await response.json();
    } else {
      console.error("Failed to fetch exercises:", response.status);
      return [];
    }
  } catch (error) {
    console.error("Ошибка загрузки упражнений:", error);
    return [];
  }
};

export const getItems = async () => {
  try {
    const response = await createRequest("stats/get_items", "GET");
    if (response.status === 200) {
      return await response.json();
    } else {
      console.error("Failed to fetch items:", response.status);
      return [];
    }
  } catch (error) {
    console.error("Ошибка загрузки предметов:", error);
    return [];
  }
};

export const buyItem = async (itemId) => {
  try {
    const response = await createRequest("stats/buy_items", "POST", {
      id: itemId,
    });
    let data = await response.json();

    console.log("Buy item response:", data);
    Alert.alert(data.detail || "Item purchased successfully");
  } catch (error) {
    console.error("Error buying item:", JSON.stringify(error, null, 2));
  }
};