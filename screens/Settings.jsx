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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { typography } from "../styles/typography";
import LevelCircle from "../components/LevelCircle";
import useStore from "../services/store";

export const SettingsScreen = ({ navigation }) => {
  const setData = useStore((state) => state.setData);

  const handleLogout = async () => {
    setData("authToken", "");
    setData("refreshToken", "");
    navigation.navigate("home");
  };

  return (
    <View>
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

        <View style={styles.gemsContainer}>
          <Text style={styles.gemsCount}>Настройки</Text>
        </View>

        {/*<View style={styles.levelCircle}>*/}
        {/*  <Text style={styles.levelText}>1</Text>*/}
        {/*</View>*/}
        <LevelCircle />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
      >
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsButtonText}>Изменение цели</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("profile")}
          style={styles.settingsButton}
        >
          <Text style={styles.settingsButtonText}>Аккаунт</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsButtonText}>Настройка тренировки</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsButtonText}>Замеры</Text>
        </TouchableOpacity>

        {/*<TouchableOpacity style={styles.settingsButton}>*/}
        {/*  <Text style={styles.settingsButtonText}>Тема</Text>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity style={styles.settingsButton}>*/}
        {/*  <Text style={styles.settingsButtonText}>Уведомления</Text>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity style={styles.settingsButton}>*/}
        {/*  <Text style={styles.settingsButtonText}>Подписки</Text>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity style={styles.settingsButton}>*/}
        {/*  <Text style={styles.settingsButtonText}>Язык</Text>*/}
        {/*</TouchableOpacity>*/}

        {/*<TouchableOpacity style={styles.settingsButton}>*/}
        {/*  <Text style={styles.settingsButtonText}>Регистрация или вход</Text>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity style={styles.settingsButton}>*/}
        {/*  <Text style={styles.settingsButtonText}>Рассказать другу</Text>*/}
        {/*</TouchableOpacity>*/}
        <TouchableOpacity style={styles.settingsButton} onPress={handleLogout}>
          <Text style={styles.settingsButtonText}>Выход</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").height,
  },
  header: {
    left: 16,
    height: 100,
    paddingTop: 60,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 32,
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
    ...typography.bounded,
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
  scrollView: {
    position: "absolute",
    top: 140,
    height: "100%",
    width: Dimensions.get("window").width - 32,
    backgroundColor: "#00000036",
    marginHorizontal: 16,
    borderRadius: 30,
  },
  scrollContainer: {
    paddingBottom: 40,
    padding: 16,
    alignItems: "center",
  },
  settingsButton: {
    width: "100%",
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(0, 0, 0, 0.21)",
    marginBottom: 16,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  settingsButtonText: {
    color: "#fff",
    fontSize: 16,
    ...typography.bounded,
  },
});