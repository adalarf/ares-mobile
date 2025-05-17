import { StyleSheet, View, Text } from "react-native";
import { typography } from "../styles/typography";
import { Image } from "expo-image";
import useStore from "../services/store";

export const AvatarCard = () => {
  const avatar = useStore((state) => state.avatar);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require("../assets/avatar-icon.png")}
          style={styles.icon}
        />
      </View>
      <Text style={[styles.title, typography.bounded]}>Ваш аватар</Text>
      {!avatar ? null : (
        <Image
          source={{ uri: avatar }}
          style={styles.avatarImage}
          cachePolicy={"disk"}
        />
      )}
    </View>
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
    height: 410,
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
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  avatarImage: {
    width: "100%",
    height: 250,
    alignSelf: "center",
  },
});