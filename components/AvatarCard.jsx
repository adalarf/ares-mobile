import { StyleSheet, View, Text } from "react-native";
import { typography } from "../styles/typography";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { authService } from "../services/api/authService";

export const AvatarCard = () => {
  const [avatar, setAvatar] = useState(require("../assets/avatar.png"));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let getAvatar = async () => {
      try {
        let token = await authService.get_token();
        let response = await fetch(
          "http://51.250.36.219:8000/stats/get_user_avatar",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          },
        );
        let data = await response.json();
        console.log("Avatar data:", data);
        if (data?.avatar) {
          setAvatar({ uri: data.avatar });
        }
      } catch (error) {
        console.log("Error fetching avatar:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getAvatar();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require("../assets/avatar-icon.png")}
          style={styles.icon}
        />
      </View>
      <Text style={[styles.title, typography.bounded]}>Ваш аватар</Text>
      {isLoading ? null : <Image source={avatar} style={styles.avatarImage} />}
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