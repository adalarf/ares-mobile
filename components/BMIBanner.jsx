import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { typography } from "../styles/typography";
import PieChart from "react-native-pie-chart";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { authService } from "../services/api/authService";
import { get } from "lodash";

export const BMIBanner = () => {
  const [data, setData] = React.useState({});

  useEffect(() => {
    getBmiData();
  }, []);

  const getBmiData = async () => {
    try {
      const token = await authService.get_token();
      const response = await fetch(
        "http://51.250.36.219:8000/stats/get_calories_info",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      setData(data);
      console.log("Data from API:", data);
    } catch (error) {
      console.error("Error fetching BMI data:", error);
    }
  };

  const widthAndHeight = 80;
  const series = [
    {
      value: get(data, "body_mass_index"),
      color: "transparent",
      label: {
        text: Number(get(data, "body_mass_index")).toFixed(2),
        fontWeight: "bold",
        fill: "#fff",
        fontSize: 10,
        offsetX: 5,
        // offsetY: -7,
      },
    },
    { value: 100 - get(data, "body_mass_index"), color: "#E8E8E8" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>ИМТ (индекс массы и тела)</Text>
          <Text style={styles.subtitle}>У тебя нормальный вес</Text>
        </View>
        <View style={styles.chartContainer}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[
              "rgb(213, 65, 160)",
              "rgb(201, 77, 159)",
              "rgb(203, 161, 56)",
              "rgb(191, 178, 21)",
            ]}
            style={styles.pieChartBg}
          >
            <PieChart
              style={styles.pieChart}
              widthAndHeight={widthAndHeight}
              series={series}
            />
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    gap: 16,
  },
  textContainer: {
    flex: 1,
    // marginRight: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 8,
    ...typography.bounded,
  },
  subtitle: {
    color: "rgba(255, 255, 255, 0.74)",
    fontSize: 12,
    marginBottom: 16,
    ...typography.bounded,
  },
  button: {
    backgroundColor: "#FF3B81",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  chartContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  bmiValue: {
    color: "#FFFFFF",
    fontSize: 20,
    ...typography.bounded,
  },
  pieChartBg: {
    padding: 4,
    borderRadius: 50,
  },
});