import React from "react";
import {
  Dimensions,
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from "react-native";
import Ellipse from "../assets/svgs/Ellipse";
import { authService } from "../services/api/authService";
import { useFocusEffect } from "@react-navigation/native";
import { textStyles, typography } from "../styles/typography";
import { makeMealEaten } from "../hooks/useMainRequests";

function NutritionDishes({ navigation, route: { params } }) {
  const [meal, setMeal] = React.useState(params);

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
        <Text style={styles.gemsCount}>{meal?.meal}</Text>
        <View style={styles.levelCircle}>
          <Text style={styles.levelText}>1</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.nutritionContainer}>
          <View style={styles.row}>
            <Text style={textStyles.buttonText}>Съедено ккал</Text>
            <Text style={textStyles.buttonText}>/</Text>
            <Text style={textStyles.buttonText}>708</Text>
          </View>
        </View>
        <View style={styles.nutritionContainer}>
          <Text style={textStyles.buttonText}>Рекомендуемые блюда для вас</Text>
          <View style={styles.row}>
            <View style={styles.imgCon} />
            <TouchableOpacity
              onPress={async () => {
                let res = await makeMealEaten(meal?.id);
                setMeal(res);
              }}
              style={styles.content}
            >
              <Ellipse color={meal.is_eaten ? "#00FF00" : "#8E17B2"}>
                <Text style={styles.text12}>{meal?.dish}</Text>
              </Ellipse>
              <Text style={styles.text12}>
                {Number(meal?.grams).toFixed(2)}г / 400ккал
              </Text>
            </TouchableOpacity>
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
    minHeight: Dimensions.get("screen").height,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 20,
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
    ...typography.bounded,
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
    ...typography.bounded,
    lineHeight: 24,
  },
  nutritionContainer: {
    backgroundColor: "rgba(200, 200, 200, 0.39)",
    padding: 16,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.74)",
    gap: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
  text12: {
    fontSize: 11,
    color: "#FFFFFF",
    textAlign: "center",
    ...typography.bounded,
  },
  imgCon: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: 150,
    height: 120,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.74)",
  },
  content: {
    flex: 1,
    height: 120,
    alignItems: "center",
    gap: 20,
  },
});

export default NutritionDishes;