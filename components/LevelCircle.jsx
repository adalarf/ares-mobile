import React, { memo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { get } from "lodash";
import { Text, View } from "react-native";
import { styles } from "./HeaderWithGems";
import useStore from "../services/store";

function LevelCircle() {
  const data = useStore((state) => state.stats_info);

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

export default memo(LevelCircle);