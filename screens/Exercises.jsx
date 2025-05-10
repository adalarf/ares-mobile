import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";

export const ExercisesScreen = ({ navigation, route }) => {
  const { muscle_group_id } = route.params;
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch(
          `http://51.250.36.219:8000/training/exercises?muscle_group_id=${muscle_group_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const data = await response.json();
        setExercises(Array.isArray(data) ? data : []);
      } catch (error) {
        setExercises([]);
        console.error("Ошибка загрузки упражнений:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExercises();
  }, [muscle_group_id]);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/dark-background.png")}
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
        <Text style={styles.gemsCount}>Упражнения</Text>
        <View style={styles.menuIcon} />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {loading ? (
          <Text style={{ color: "#fff", marginTop: 40 }}>Загрузка...</Text>
        ) : exercises.length === 0 ? (
          <Text style={{ color: "#fff", marginTop: 40 }}>
            Нет упражнений для выбранной группы
          </Text>
        ) : (
          exercises.map((ex, index) => (
            <CustomButtonWithGradientBorder
              key={index}
              onPress={() =>
                navigation.navigate("trainingInfo", {
                  description: ex.description,
                  image: ex.image,
                })
              }
              title={ex.name}
              style={styles.settingsButton}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").height * 1.2,
  },
  header: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    height: 100,
    width: 412,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  menuIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  gemsCount: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
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
  gemsContainer: {
    flexDirection: "row",
    width: 245,
  },
  scrollView: {
    position: "absolute",
    top: 160,
    width: "100%",
    height: "100%",
  },
  scrollContainer: {
    paddingBottom: 200,
    alignItems: "center",
  },
  settingsButton: {
    width: 298,
    height: 59,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.15)",
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  settingsButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
});