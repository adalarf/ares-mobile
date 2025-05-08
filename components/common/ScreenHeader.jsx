import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { textStyles } from "../../styles/typography";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const ScreenHeader = ({ lines }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../../assets/back-icon.png")}
          style={styles.menuIcon}
        />
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        {lines.map((line, index) => (
          <Text key={index} style={textStyles.headerText}>
            {line}
          </Text>
        ))}
      </View>
      <View style={styles.menuIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    width: "100%",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  menuIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
});