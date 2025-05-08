import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { typography } from "../styles/typography";

export const TrainingCard = ({ navigation, style }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => navigation.navigate("training")}
    >
      <View style={styles.iconContainer}>
        <Image
          source={require("../assets/training-icon.png")}
          style={styles.icon}
          resizeMode="contain"
        />
      </View>
      <Text style={[styles.title, typography.bounded]}>Упражнения</Text>
      <Image
        source={require("../assets/dumbbell.png")}
        style={styles.dumbbellImage}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    height: 200,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    alignSelf: "center",
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "Bounded-Regular",
    alignSelf: "center",
  },
  dumbbellImage: {
    width: "80%",
    height: 100,
    marginBottom: 10,
    alignSelf: "center",
  },
});