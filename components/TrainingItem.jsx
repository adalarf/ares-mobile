import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { typography } from "../styles/typography";
import LockIcon from "../assets/svgs/LockIcon";
import { get } from "lodash";
import ArrowToRight from "../assets/svgs/ArrowToRight";

export const TrainingItem = ({
  id,
  dayData,
  time,
  image,
  number,
  title,
  xp,
  gems,
  day,
  date,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("trainingDay", { dayId: id, dayData: dayData })
      }
    >
      <View style={styles.trainingContainer}>
        <View style={styles.trainingImageContainer}>
          <Text style={[styles.trainingTimeText, typography.bounded]}>
            {time}
          </Text>
          <Image style={styles.trainingImage} source={image} />
        </View>
        <Text style={[styles.trainingNumber, typography.forestSmooth]}>
          {number}
        </Text>
        <View style={styles.trainingInfoContainer}>
          <Text style={[styles.trainingText, typography.bounded]}>{title}</Text>
          <View style={styles.row}>
            <View style={styles.dateContainer}>
              <Text style={[styles.trainingTextGray, typography.bounded]}>
                {day}
              </Text>
              <Text style={[styles.trainingTextGray, typography.bounded]}>
                {date}
              </Text>
            </View>
            {get(dayData, "is_active", false) ? <ArrowToRight /> : <LockIcon />}
          </View>
          <View style={styles.gainContainer}>
            <Text style={[styles.trainingText, typography.bounded]}>
              {xp}XP
            </Text>
            <View style={styles.gemsContainer}>
              <Text style={[styles.trainingText, typography.bounded]}>
                {gems}
              </Text>
              <Image
                style={styles.gemIcon}
                source={require("../assets/gem.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  trainingContainer: {
    flexDirection: "row",
    width: "100%",
    height: 140.125,
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  dateContainer: {
    gap: 8,
  },
  trainingImageContainer: {
    alignItems: "center",
  },
  trainingNumber: {
    fontSize: 40,
    color: "#FFFFFF",
  },
  trainingImage: {
    width: 156,
    height: 110,
    resizeMode: "contain",
  },
  trainingInfoContainer: {
    paddingTop: 20,
    height: 140,
    justifyContent: "space-between",
    paddingLeft: 20,
    flex: 1,
  },
  gainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  gemsContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  gemIcon: {
    width: 34,
    height: 34,
    top: 9,
  },
  trainingTimeText: {
    color: "#bababa",
  },
  trainingText: {
    color: "#FFFFFF",
  },
  trainingTextGray: {
    color: "#bababa",
  },
});