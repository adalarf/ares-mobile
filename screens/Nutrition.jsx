import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { authService } from "../services/api/authService";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";

function Nutrition({ navigation }) {
  useEffect(() => {
    const fetchNutritionData = async () => {
      try {
        const token = await authService.get_token();
        const response = await fetch(
          "http://51.250.36.219:8000/nutrition/meal_plan",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          },
        );
        const data = await response.json();
        if (!Array.isArray(data)) {
          const response = await fetch(
            "http://51.250.36.219:8000/nutrition/generate_meal_plan",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            },
          );
          const data = await response.json();
          console.log("Generated Meal Plan Data:", data);
        }
        console.log("Workout Plan Data:", data);
      } catch (error) {
        console.error("Ошибка загрузки Питание:", error);
      }
    };
    // fetchNutritionData();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/main-page.png")}
        style={styles.backgroundImage}
        imageStyle={styles.image}
        resizeMode="cover"
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/back-icon.png")}
            style={styles.menuIcon}
          />
        </TouchableOpacity>

        <Text style={styles.gemsCount}>Питание</Text>

        <View style={styles.levelCircle}>
          <Text style={styles.levelText}>1</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.nutritionContainer}>
          <View style={styles.nutritionHeader}>
            <Text style={styles.nutritionHeaderText}>Дневник питания</Text>
            <TouchableOpacity>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[
                  "rgb(213, 65, 160)",
                  "rgb(201, 77, 159)",
                  "rgb(203, 161, 56)",
                  "rgb(191, 178, 21)",
                ]}
                style={styles.btnGo}
              >
                <Text style={styles.go}>Перейти</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.nutritionHeader}>
            <View style={styles.leftCon}>
              <View style={styles.imgCon}></View>
              <View style={styles.textContainer}>
                <Text style={styles.nutritionHeaderText}>Завтрак</Text>
                <Text style={styles.nutritionHeaderText}>0 / 560 ккал</Text>
              </View>
            </View>
            <View style={styles.addCon}>
              <AntDesign name={"plus"} size={25} color={"#fff"} />
            </View>
          </View>
          <View style={styles.nutritionHeader}>
            <View style={styles.leftCon}>
              <View style={styles.imgCon}></View>
              <View style={styles.textContainer}>
                <Text style={styles.nutritionHeaderText}>Обед</Text>
                <Text style={styles.nutritionHeaderText}>0 / 1.280 ккал</Text>
              </View>
            </View>
            <View style={styles.addCon}>
              <AntDesign name={"plus"} size={25} color={"#fff"} />
            </View>
          </View>
          <View style={styles.nutritionHeader}>
            <View style={styles.leftCon}>
              <View style={styles.imgCon}></View>
              <View style={styles.textContainer}>
                <Text style={styles.nutritionHeaderText}>Ужин</Text>
                <Text style={styles.nutritionHeaderText}>0 / 802 ккал</Text>
              </View>
            </View>
            <View style={styles.addCon}>
              <AntDesign name={"plus"} size={25} color={"#fff"} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    width: Dimensions.get("window").width,
    minHeight: Dimensions.get("window").height,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    height: 100,
  },
  menuIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  gemsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  gemsCount: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  gemIcon: {
    width: 46,
    height: 46,
    marginTop: 5,
    marginLeft: -10,
    resizeMode: "contain",
  },
  levelCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  levelText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  nutritionContainer: {
    backgroundColor: "rgba(200, 200, 200, 0.39)",
    padding: 16,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.74)",
    gap: 16,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  nutritionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nutritionHeaderText: {
    fontSize: 16,
    fontFamily: "Bounded-Regular",
    color: "#FFFFFF",
  },
  go: {
    fontSize: 12,
    fontFamily: "Bounded-Regular",
    color: "#FFFFFF",
  },
  btnGo: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.74)",
  },
  leftCon: {
    flexDirection: "row",
    gap: 16,
  },
  imgCon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  addCon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    justifyContent: "space-between",
  },
});

export default Nutrition;