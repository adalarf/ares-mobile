import { StyleSheet, View, Text, Image } from "react-native";
import { typography } from "../styles/typography";
import { LinearGradient } from "expo-linear-gradient";

export const CaloriesBanner = ({ calories = "0 кк" }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Image
            source={require("../assets/fire-front-color.png")}
            style={styles.fireIcon}
            resizeMode="contain"
          />
          <Text style={[styles.title, typography.bounded]}>Сожгли сегодня</Text>
          <Text style={[styles.calories, typography.bounded]}>{calories}</Text>
        </View>
        <LinearGradient
          colors={["#999999", "#343434", "#999999"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.blackGradient}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  blackGradient: {
    height: 2,
    width: "100%",
  },
  contentContainer: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    gap: 10,
  },
  fireIcon: {
    width: 36,
    height: 36,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  calories: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  chartContainer: {
    width: "100%",
    height: 190,
    justifyContent: "center",
    alignItems: "center",
  },
  chart: {
    width: "100%",
    height: "100%",
  },
});