import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { typography } from "../styles/typography";
import { get } from "lodash";
import { LinearGradient } from "expo-linear-gradient";
import useStore from "../services/store";

function HeaderWithGems({ leftElement }) {
  const data = useStore((state) => state.stats_info);

  return (
    <View style={styles.header}>
      {leftElement}
      <View style={styles.gemsContainer}>
        <Text style={styles.gemsCount}>{get(data, "gems", 0)}</Text>
        <Image source={require("../assets/gem.png")} style={styles.gemIcon} />
      </View>
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
    </View>
  );
}

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    height: 100,
  },
  gemsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  gemsCount: {
    color: "#FFFFFF",
    fontSize: 24,
    ...typography.bounded,
  },
  gemIcon: {
    width: 46,
    height: 46,
    marginTop: 5,
    marginLeft: -10,
    resizeMode: "contain",
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
    overflow: "hidden",
  },
  levelText: {
    color: "#FFFFFF",
    fontSize: 20,
    ...typography.bounded,
    lineHeight: 24,
  },
  gradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: 0,
    left: 0,
  },
});

export default memo(HeaderWithGems);