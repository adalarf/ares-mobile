import React, { memo, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { get } from "lodash";
import { Text, View } from "react-native";
import { styles } from "./HeaderWithGems";
import { useNavigation } from "@react-navigation/native";
import { authService } from "../services/api/authService";

function LevelCircle() {
  const [data, setData] = React.useState({});
  const navigation = useNavigation();

  useEffect(() => {
    getData();
    return navigation.addListener("focus", () => {
      console.log("Screen focused");
      getData();
    });
  }, []);

  const getData = async () => {
    try {
      const token = await authService.get_token();
      const response = await fetch("http://51.250.36.219:8000/stats/info", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setData(data);
      console.log("Data from API:", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.levelCircle}>
      <LinearGradient
        colors={["rgba(230, 145, 192, 0.33)", "rgba(255, 0, 140, 1)"]}
        style={[
          styles.gradient,
          {
            height: `${(get(data, "experience_current", 0) / get(data, "experience_to_next_level", 1)) * 100}%`,
          },
        ]}
      />
      <Text style={styles.levelText}>{get(data, "level", 0)}</Text>
    </View>
  );
}

export default LevelCircle;