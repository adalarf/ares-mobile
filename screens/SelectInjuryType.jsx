import React, { useEffect, useState } from "react";
import { BackgroundLayout } from "../components/layout/BackgroundLayout";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { styles } from "./SelectLoad";
import { ScreenHeader } from "../components/common/ScreenHeader";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";
import {
  getMuscleGroups,
  postInjuries,
  sendWorkoutPlan,
} from "../hooks/useMainRequests";
import useStore from "../services/store";

function SelectInjuryType({ navigation }) {
  const muscleGroups = useStore((state) => state.muscle_groups);
  const [injuries, setInjuries] = useState([]);

  useEffect(() => {
    getMuscleGroups();
  }, []);

  const isExistingInjury = (groupId) => {
    return injuries.some((injury) => injury.id === groupId);
  };

  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <ScreenHeader lines={["Выберите", " группу"]} />
        <ScrollView
          style={customStyles.list}
          contentContainerStyle={customStyles.containerStyle}
          showsVerticalScrollIndicator={false}
        >
          {muscleGroups.map((group) => (
            <CustomButtonWithGradientBorder
              key={group.id}
              borderWidth={isExistingInjury(group.id) ? 2 : 0}
              onPress={() => {
                if (isExistingInjury(group.id)) {
                  setInjuries((prevState) =>
                    prevState.filter((injury) => injury.id !== group.id),
                  );
                } else {
                  setInjuries((prevState) => [...prevState, group]);
                }
              }}
            >
              <View style={styles.textContainer}>
                <Text style={styles.mainText}>{group.name}</Text>
              </View>
            </CustomButtonWithGradientBorder>
          ))}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <CustomButtonWithGradientBorder
            title={"Далее"}
            onPress={async () => {
              await postInjuries(injuries.map((injury) => injury.name));
              await sendWorkoutPlan(navigation);
            }}
          />
        </View>
      </View>
    </BackgroundLayout>
  );
}

const customStyles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 20,
  },
  list: {
    flexGrow: 1,
    marginTop: 20,
    width: "100%",
    height: "60%",
  },
});

export default SelectInjuryType;