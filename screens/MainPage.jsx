import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  RefreshControl,
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
import HeaderWithGems from "../components/HeaderWithGems";
import {
  getAvatar,
  getBmiData,
  getStatsInfo,
  getWorkoutPlan,
} from "../hooks/useMainRequests";
import { useEffect, useState } from "react";

export const MainPage = ({ navigation }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    setIsRefreshing(true);
    Promise.all([
      getWorkoutPlan(),
      getStatsInfo(),
      getBmiData(),
      getAvatar(),
    ]).finally(() => setIsRefreshing(false));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        decelerationRate="normal"
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              getInfo();
            }}
            tintColor={"#fff"}
            colors={["#fff"]}
            refreshing={isRefreshing}
            titleColor={"#fff"}
            title={"Обновление..."}
          />
        }
      >
        <ImageBackground
          source={require("../assets/main-page.png")}
          style={styles.backgroundImage}
          imageStyle={styles.image}
          resizeMode="cover"
        >
          <HeaderWithGems
            leftElement={
              <TouchableOpacity onPress={() => navigation.navigate("settings")}>
                <Image
                  source={require("../assets/burger-menu.png")}
                  style={styles.menuIcon}
                />
              </TouchableOpacity>
            }
          />

          <BMIBanner />
          <CaloriesBanner />

          <View style={styles.cardsContainer}>
            <GoalCard />
            <AvatarCard />
          </View>

          <View style={[styles.cardsContainer]}>
            <ShopCard navigation={navigation} style={{ marginTop: -210 }} />
            <ShopCard
              navigation={navigation}
              style={{ opacity: 0, marginTop: -210, zIndex: -1 }}
            />
          </View>

          <CalendarCard />

          <View style={[styles.cardsContainer, { marginTop: 10 }]}>
            <NutritionCard navigation={navigation} />
            <DirectoryCard navigation={navigation} />
          </View>

          <View style={styles.cardsContainer}>
            <TrainingCard navigation={navigation} />
            <MinigamesCard navigation={navigation} />
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a3a6a9",
    width: "100%",
    height: Dimensions.get("screen").height,
  },
  backgroundImage: {
    width: Dimensions.get("window").width,
    minHeight: Dimensions.get("screen").height * 2,
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
  cardsContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 10,
    gap: 10,
    justifyContent: "space-between",
  },
});