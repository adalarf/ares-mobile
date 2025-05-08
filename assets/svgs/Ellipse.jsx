import * as React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

function SvgComponent({
  children,
  width = 130,
  height = 55,
  color = "#8E17B2",
}) {
  return (
    <View style={{ width, height }}>
      <Svg
        width={width}
        height={height}
        viewBox="0 0 115 47"
        fill="none"
        style={StyleSheet.absoluteFill} // To position it behind the children
      >
        <Path
          d="M115 23.5C115 36.479 89.256 47 57.5 47S0 36.479 0 23.5 25.744 0 57.5 0 115 10.521 115 23.5z"
          fill={color}
          fillOpacity={0.22}
        />
      </Svg>
      <View style={styles.center}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SvgComponent;