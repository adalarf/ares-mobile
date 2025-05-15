import React from "react";
import { BackgroundLayout } from "../components/layout/BackgroundLayout";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { ScreenHeader } from "../components/common/ScreenHeader";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";
import { LinearGradient } from "expo-linear-gradient";
import { textStyles } from "../styles/typography";
import { authService } from "../services/api/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const data = [
  {
    id: 1,
    name: "Молочные продукты",
    imageUri:
      "https://img.freepik.com/free-photo/view-allergens-commonly-found-dairy_23-2150170319.jpg",
  },
  {
    id: 2,
    name: "Рыба",
    imageUri:
      "https://здоровое-питание.рф/upload/iblock/2b1/m3xtmwo4k19mzqedc4hexexup17qgvy8/-YAkov-Filimonov-Fotobank-Lori-_38_-_1_.jpg",
  },
  {
    id: 3,
    name: "Орехи",
    imageUri:
      "https://s1.eda.ru/StaticContent/Photos/4/1f/41f6edec03b54a0fa2f562b558184495.jpg",
  },
  {
    id: 4,
    name: "Куриное мясо",
    imageUri: "https://levelvan.ru/upload/media/n-1001459390562-631.jpg",
  },
  {
    id: 5,
    name: "Цитрусы",
    imageUri:
      "https://pavlovolimon.ru/wp-content/uploads/2018/02/%D0%90%D0%BF%D0%B5%D0%BB%D1%8C%D1%81%D0%B8%D0%BD.jpg",
  },
  {
    id: 6,
    name: "Яйца",
    imageUri:
      "https://www.agroinvestor.ru/upload/iblock/d5a/d5a263ce9a694817ecb4b725cc36bb36.jpg",
  },
];

const sendWorkoutPlan = async (navigation) => {
  try {
    const token = await authService.get_token();
    const trainingLevel = await AsyncStorage.getItem("training_level");
    const goal = await AsyncStorage.getItem("goal");
    const trainingPlace = await AsyncStorage.getItem("training_place");

    const response = await axios.post(
      "http://51.250.36.219:8000/training/workout_plan",
      {
        training_level: trainingLevel,
        goal: goal,
        training_place: trainingPlace,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (response.status === 200) {
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

function SelectProductGroup({ navigation }) {
  const [groups] = React.useState(data);
  const [activeGroups, setActiveGroups] = React.useState([]);

  const checkIsActive = (id) => {
    return activeGroups.findIndex((group) => group.id === id) !== -1;
  };

  const handleGroupPress = (group) => {
    if (checkIsActive(group.id)) {
      setActiveGroups(activeGroups.filter((item) => item.id !== group.id));
    } else {
      setActiveGroups([...activeGroups, group]);
    }
  };

  return (
    <BackgroundLayout>
      <ScreenHeader lines={["Выберите", "группу", "продуктов"]} />
      <View style={styles.container}>
        <ScrollView style={styles.listContainer}>
          <View style={styles.list}>
            {groups.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => handleGroupPress(item)}
                style={styles.group}
              >
                <LinearGradient
                  colors={[
                    "#FFEB00",
                    "#FFEB00",
                    "#FC9B5F",
                    "#F849C1",
                    "#FF00A1",
                  ].reverse()}
                  start={[0, 0]}
                  end={[1, 0]}
                  key={index}
                  style={{ flex: 1, padding: checkIsActive(item.id) ? 2 : 0 }}
                >
                  <View style={styles.imageContainer}>
                    <Image
                      source={{ uri: item.imageUri }}
                      style={{ flex: 1 }}
                    />
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <CustomButtonWithGradientBorder
            onPress={() => sendWorkoutPlan(navigation)}
          >
            <Text style={textStyles.buttonText}>Подтвердить</Text>
          </CustomButtonWithGradientBorder>
        </View>
      </View>
    </BackgroundLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 20,
    marginTop: 50,
  },
  buttonContainer: {
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
  group: {
    height: 120,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "45%",
    aspectRatio: 1,
    overflow: "hidden",
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default SelectProductGroup;