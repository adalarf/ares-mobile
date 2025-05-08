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
  import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import { authService } from "../services/api/authService";
  
  export default ({ navigation }) => {
    const handleStart = async () => {
      try {
        authService.refresh_tokens();
        const token = await AsyncStorage.getItem("authToken");
        const response = await fetch(
          "http://51.250.36.219:8000/blitz/blitz_poll",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const data = await response.json();
        navigation.navigate("blitzPoll", { data });
      } catch (err) {
        console.log(err);
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
            <Text style={styles.gemsCount}>Блиц опрос</Text>
          </View>
        </View>
        <View style={styles.cardsWrapper}>
          <ScrollView
            contentContainerStyle={styles.cardsContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.card}>
              <ImageBackground
                source={require("../assets/blitz-poll-icon-opcity-1.png")}
                style={styles.cardImage}
                imageStyle={styles.cardImageStyle}
              >
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{"Блиц\nопрос"}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.subtitleContainer}>
              <Text style={styles.cardSubtitle}>
                {
                  "Проверь свои знания.\nОтвечай на вопросы о\nтренировках и правильном питании с ограниченным временем. Выигрывай гемы"
                }
              </Text>
            </View>
            <CustomButtonWithGradientBorder
              onPress={handleStart}
              title={"Начать"}
            />
          </ScrollView>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    backgroundImage: {
      position: "absolute",
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
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
    subtitleContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
      width: "80%",
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
    },
    cardContent: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    cardTitle: {
      color: "#fff",
      fontSize: 32,
      fontFamily: "Bounded-Regular",
      fontWeight: 400,
      textAlign: "center",
      marginBottom: 8,
      textShadowColor: "rgba(0,0,0,0.3)",
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 4,
    },
    cardSubtitle: {
      color: "rgba(255, 255, 255, 0.74)",
      fontFamily: "Bounded-Regular",
      fontSize: 16,
      fontWeight: 400,
      textAlign: "center",
      lineHeight: 24,
      letterSpacing: -0.5,
      textShadowColor: "rgba(0,0,0,0.2)",
      textShadowOffset: { width: 0, height: 1 },
      textShadowRadius: 2,
    },
    gemsCount: {
      color: "#FFFFFF",
      fontSize: 24,
      fontWeight: "bold",
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