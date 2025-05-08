import {
    StyleSheet,
    View,
    ImageBackground,
    ScrollView,
    Dimensions,
    Image,
    Text,
    TouchableOpacity,
  } from "react-native";
  import { BMIBanner } from "../components/BMIBanner";
  import { CaloriesBanner } from "../components/CaloriesBanner";
  import { GoalCard } from "../components/GoalCard";
  import { ShopCard } from "../components/ShopCard";
  import { AvatarCard } from "../components/AvatarCard";
  import { MinigamesCard } from "../components/MinigamesCard";
  import { TrainingCard } from "../components/TrainingCard";
  import { CalendarCard } from "../components/CalendarCard";
  import { DirectoryCard } from "../components/DirectoryCard";
  import { NutritionCard } from "../components/NutritionCard";
  import { DailyTasksCard } from "../components/DailyTasksCard";
  
  export const MainPage = ({ navigation }) => {
    return (
      <ScrollView
        pagingEnabled={false}
        decelerationRate="normal"
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <ImageBackground
          source={require("../assets/main-page.png")}
          style={styles.backgroundImage}
          imageStyle={styles.image}
          resizeMode="cover"
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("settings")}>
              <Image
                source={require("../assets/burger-menu.png")}
                style={styles.menuIcon}
              />
            </TouchableOpacity>
  
            <View style={styles.gemsContainer}>
              <Text style={styles.gemsCount}>100</Text>
              <Image
                source={require("../assets/gem.png")}
                style={styles.gemIcon}
              />
            </View>
  
            <View style={styles.levelCircle}>
              <Text style={styles.levelText}>1</Text>
            </View>
          </View>
  
          <BMIBanner />
          <CaloriesBanner />
  
          <View style={styles.cardsContainer}>
            <GoalCard />
            <ShopCard navigation={navigation} />
          </View>
  
          <View style={styles.cardsContainer}>
            <AvatarCard />
            <MinigamesCard navigation={navigation} />
          </View>
  
          <View style={styles.cardsContainer}>
            <View style={{ width: "52%" }} />
            <TrainingCard navigation={navigation} />
          </View>
  
          <CalendarCard />
  
          <View style={[styles.cardsContainer, { marginTop: 10 }]}>
            <DirectoryCard navigation={navigation} />
            <NutritionCard navigation={navigation} />
          </View>
  
          <DailyTasksCard />
        </ImageBackground>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    scrollViewContent: {
      flexGrow: 1,
    },
    backgroundImage: {
      width: Dimensions.get("window").width,
      minHeight: Dimensions.get("window").height * 2.5,
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
    cardsContainer: {
      flexDirection: "row",
      marginHorizontal: 20,
      marginTop: 20,
      justifyContent: "space-between",
    },
    nextRow: {
      marginTop: 10,
    },
    emptySpace: {
      flex: 1,
      marginRight: 10,
    },
  });