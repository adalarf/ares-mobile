import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { textStyles } from "../styles/typography";
import { handleSelect } from "../services/api/handleSelection";
import { ScreenHeader } from "../components/common/ScreenHeader";

export const SelectGenderScreen = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/home-blured.png")}
        style={styles.entrance_page}
      >
        <View style={styles.selectGenderContainer}>
          <ScreenHeader lines={["Выбрать", "пол:"]} />

          <View style={styles.genderSelectionContainer}>
            <TouchableOpacity
              style={styles.genderContainer}
              onPress={() =>
                handleSelect({ gender: "female" }, navigation, "selectGoal")
              }
            >
              <Image
                source={require("../assets/woman-gender.png")}
                style={styles.genderImage}
              />
              <Text style={textStyles.buttonText}>Женский</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.genderContainer}
              onPress={() =>
                handleSelect({ gender: "male" }, navigation, "selectGoal")
              }
            >
              <Image
                source={require("../assets/man-gender.png")}
                style={styles.genderImage}
              />
              <Text style={textStyles.buttonText}>Мужской</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  entrance_page: {
    width: "100%",
    height: "100%",
  },
  selectGenderContainer: {
    position: "absolute",
    justifyContent: "space-between",
    top: 50,
    width: "100%",
    height: 350,
  },
  selectGenderTextContainer: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
  selectGenderText: {
    fontSize: 44,
    color: "#FFFFFF",
  },
  genderImage: {
    width: 93,
    height: 118,
  },
  genderName: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
  },
  genderSelectionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 50,
  },
});