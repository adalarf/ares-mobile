import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authService } from "../services/api/authService";
import { typography } from "../styles/typography";

export const MiniGamesScreen = ({ navigation }) => {
  const handleRandomTraining = async () => {
    try {
      const training_level = "middle";
      const goal = await AsyncStorage.getItem("goal");
      const training_place = "Дом";
      const token = await authService.get_token();
      let response = await fetch(
        "http://51.250.36.219:8000/training/random_exercise",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ training_level, goal, training_place }),
        },
      );
      let data = await response.json();
      console.log("Random Training Data:", data);
      navigation.navigate("trainingExample", { exercise: data });
    } catch (e) {
      alert("Ошибка при получении случайной тренировки");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/training-background.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/back-icon.png")}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <View style={styles.gemsContainer}>
          <Text style={styles.gemsCount}>Мини игры</Text>
        </View>
      </View>
      <View style={styles.cardsWrapper}>
        <ScrollView
          contentContainerStyle={styles.cardsContainer}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("blitzInfo");
            }}
            style={styles.card}
          >
            <ImageBackground
              source={require("../assets/blitz-poll-icon.png")}
              style={styles.cardImage}
              imageStyle={styles.cardImageStyle}
            >
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Блиц опрос</Text>
                <Text style={styles.cardSubtitle}>Проверь свои знания</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={handleRandomTraining}>
            <ImageBackground
              source={require("../assets/random-training-icon.png")}
              style={styles.cardImage}
              imageStyle={styles.cardImageStyle}
            >
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Случайная тренировка</Text>
                <Text style={styles.cardSubtitle}>
                  Справишься с любой тренировкой?
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").height,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    height: 100,
    width: "100%",
    zIndex: 2,
  },
  cardsWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 140,
    zIndex: 1,
  },
  cardsContainer: {
    alignItems: "center",
    paddingBottom: 40,
  },
  card: {
    width: 340,
    height: 160,
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 32,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  cardImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImageStyle: {
    resizeMode: "cover",
    opacity: 0.7,
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 8,
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    ...typography.bounded,
  },
  cardSubtitle: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.2)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    ...typography.bounded,
  },
  gemsCount: {
    color: "#FFFFFF",
    fontSize: 24,
    ...typography.bounded,
  },
  gemsContainer: {
    flexDirection: "row",
    width: 245,
  },
  menuIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
});