import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Dimensions,
  Image,
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
import HeaderWithGems from "../components/HeaderWithGems";

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
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
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