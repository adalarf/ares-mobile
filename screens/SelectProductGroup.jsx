import React from "react";
import { BackgroundLayout } from "../components/layout/BackgroundLayout";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { ScreenHeader } from "../components/common/ScreenHeader";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";
import { LinearGradient } from "expo-linear-gradient";
import { textStyles } from "../styles/typography";
import {
  postFoodRestrictions,
  sendWorkoutPlan,
} from "../hooks/useMainRequests";

const data = [
  {
    id: 1,
    name: "Молочные продукты",
    image: require("../assets/product-groups/milk.png"),
  },
  {
    id: 2,
    name: "Рыба",
    image: require("../assets/product-groups/fish.png"),
  },
  {
    id: 3,
    name: "Орехи",
    image: require("../assets/product-groups/nuts.png"),
  },
  {
    id: 4,
    name: "Куриное мясо",
    image: require("../assets/product-groups/chikken.png"),
  },
  {
    id: 5,
    name: "Цитрусы",
    image: require("../assets/product-groups/citrus.png"),
  },
  {
    id: 6,
    name: "Яйца",
    image: require("../assets/product-groups/eggs.png"),
  },
];

function SelectProductGroup({ navigation }) {
  const [groups] = React.useState(data);
  const [activeGroups, setActiveGroups] = React.useState([]);

  const checkIsActive = (id) => {
    return activeGroups.findIndex((group) => group.id === id) !== -1;
  };

  const handleGroupPress = (group) => {
    if (checkIsActive(group.id)) {
      setActiveGroups(activeGroups.filter((item) => item.id !== group.id));
    } else {
      setActiveGroups([...activeGroups, group]);
    }
  };

  return (
    <BackgroundLayout>
      <ScreenHeader lines={["Выберите", "группу", "продуктов"]} />
      <View style={styles.container}>
        <ScrollView style={styles.listContainer}>
          <View style={styles.list}>
            {groups.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => handleGroupPress(item)}
                style={styles.group}
              >
                <LinearGradient
                  colors={[
                    "#FFEB00",
                    "#FFEB00",
                    "#FC9B5F",
                    "#F849C1",
                    "#FF00A1",
                  ].reverse()}
                  start={[0, 0]}
                  end={[1, 0]}
                  key={index}
                  style={{ flex: 1, padding: checkIsActive(item.id) ? 2 : 0 }}
                >
                  <View style={styles.imageContainer}>
                    <Image
                      source={item.image}
                      style={{ width: "100%", height: "100%" }}
                    />
                    <View style={styles.titleContainer}>
                      <Text style={textStyles.text20}>{item.name}</Text>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <CustomButtonWithGradientBorder
            onPress={async () => {
              if (activeGroups.length === 0) {
                alert("Пожалуйста, выберите хотя бы одну группу продуктов.");
                return;
              }
              await postFoodRestrictions(
                activeGroups.map((group) => group.name),
              );
              navigation.navigate("selectInjuries");
            }}
          >
            <Text style={textStyles.buttonText}>Подтвердить</Text>
          </CustomButtonWithGradientBorder>
        </View>
      </View>
    </BackgroundLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 20,
    marginTop: 50,
  },
  buttonContainer: {
    paddingHorizontal: 40,
    paddingBottom: 30,
    paddingTop: 10,
  },
  group: {
    height: 120,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "45%",
    aspectRatio: 1,
    overflow: "hidden",
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },
  titleContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(193, 193, 193, 0.43)",
    paddingTop: "65%",
    padding: 10,
  },
});

export default SelectProductGroup;