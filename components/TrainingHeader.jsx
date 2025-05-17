import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { typography } from "../styles/typography";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import LevelCircle from "./LevelCircle";

export const TrainingHeader = ({
  title = "Тренировки",
  subtitle = "1 - 2 неделя",
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.trainingHeader}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Image style={styles.cross} source={require("../assets/cross.png")} />
      </TouchableOpacity>
      <View>
        <Text style={[styles.trainingText, typography.bounded]}>{title}</Text>
        <Text style={[styles.trainingText, { fontWeight: 200 }]}>
          {subtitle}
        </Text>
      </View>
      <LevelCircle />
    </View>
  );
};

TrainingHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  trainingHeader: {
    marginTop: 55,
    left: 16,
    width: Dimensions.get("window").width - 32,
    height: 52,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  },
  levelText: {
    color: "#FFFFFF",
    fontSize: 20,
    ...typography.bounded,
    lineHeight: 24,
  },
  cross: {
    width: 52,
    height: 52,
  },
  trainingText: {
    color: "#FFFFFF",
    ...typography.bounded,
    fontSize: 16,
  },
});