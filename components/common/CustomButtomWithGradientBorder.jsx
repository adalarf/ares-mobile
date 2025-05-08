import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { typography } from "../../styles/typography";
import { LinearGradient } from "expo-linear-gradient";

function CustomButtonWithGradientBorder({ title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <LinearGradient
        colors={[
          "#FFEB00",
          "#FFEB00",
          "#FC9B5F",
          "#F849C1",
          "#FF00A1",
        ].reverse()}
        start={[0, 0]}
        end={[1, 1]}
        style={[
          styles.container,
          { padding: 2, height: "100%" },
          style?.borderRadius ? { borderRadius: style.borderRadius + 2 } : null,
        ]}
      >
        <View
          style={[
            styles.blur,
            style?.borderRadius ? { borderRadius: style.borderRadius } : null,
          ]}
        >
          <Text style={[styles.buttonText, typography.bounded]}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    borderRadius: 10,
    overflow: "hidden",
  },
  blur: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#8c8f95",
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "Bounded-Regular",
    textAlign: "center",
  },
});

export default CustomButtonWithGradientBorder;