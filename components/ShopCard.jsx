import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { typography } from "../styles/typography";

export const ShopCard = ({ navigation, style }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("store")}
      style={[styles.container, style]}
    >
      <View style={styles.iconContainer}>
        <Image
          source={require("../assets/shop.png")}
          style={styles.icon}
          resizeMode="contain"
        />
      </View>
      <Text style={[styles.title, typography.bounded]}>Магазин</Text>
      <Image
        source={require("../assets/tshirt.png")}
        style={styles.tshirtIcon}
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
    alignSelf: "center",
    marginBottom: 10,
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
  tshirtIcon: {
    width: "100%",
    height: 100,
    alignSelf: "center",
  },
});