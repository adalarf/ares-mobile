import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./Home";
import { AuthorizationScreen } from "./Authorization";
import { SelectGenderScreen } from "./SelectGender";
import { SelectGoalScreen } from "./SelectGoal";
import { SelectActivityScreen } from "./SelectActivity";
import { SelectParametersScreen } from "./SelectParameters";
import { SelectPlaceScreen } from "./SelectPlace";
import { SelectLoadScreen } from "./SelectLoad";
import { MainPage } from "./MainPage";
import { SettingsScreen } from "./Settings";
import { TrainingScreen } from "./Training";
import { TrainingDayScreen } from "./TrainingDay";
import { TrainingExampleScreen } from "./TrainingExample";
import { MiniGamesScreen } from "./MiniGames";
import { ExerciseTypesScreen } from "./ExerciseTypes";
import { ExercisesScreen } from "./Exercises";
import { TrainingInfoScreen } from "./TrainingInfo";
import { TrainingCompleteScreen } from "./TrainingComplete";
import BlitzInfo from "./BlitzInfo";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BlitzPoll from "./BlitzPoll";
import Profile from "./Profile";
import Store from "./Store";
import Nutrition from "./Nutrition";
import { StatusBar } from "react-native";
import NutritionDishes from "./NutritionDishes";

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="home" component={HomeScreen} />
    <Stack.Screen name="authorization" component={AuthorizationScreen} />
    <Stack.Screen name="selectGender" component={SelectGenderScreen} />
    <Stack.Screen name="selectGoal" component={SelectGoalScreen} />
    <Stack.Screen name="selectActivity" component={SelectActivityScreen} />
    <Stack.Screen name="selectParameters" component={SelectParametersScreen} />
    <Stack.Screen name="selectPlace" component={SelectPlaceScreen} />
    <Stack.Screen name="selectLoad" component={SelectLoadScreen} />
    <Stack.Screen name="mainPage" component={MainPage} />
    <Stack.Screen name="settings" component={SettingsScreen} />
    <Stack.Screen name="training" component={TrainingScreen} />
    <Stack.Screen name="trainingDay" component={TrainingDayScreen} />
    <Stack.Screen name="trainingExample" component={TrainingExampleScreen} />
    <Stack.Screen name="trainingComplete" component={TrainingCompleteScreen} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="mainPage" component={MainPage} />
    <Stack.Screen name="settings" component={SettingsScreen} />
    <Stack.Screen name="exerciseTypes" component={ExerciseTypesScreen} />
    <Stack.Screen name="exercises" component={ExercisesScreen} />
    <Stack.Screen name="trainingInfo" component={TrainingInfoScreen} />
    <Stack.Screen name="minigames" component={MiniGamesScreen} />
    <Stack.Screen name="home" component={HomeScreen} />
    <Stack.Screen name="authorization" component={AuthorizationScreen} />
    <Stack.Screen name="selectGender" component={SelectGenderScreen} />
    <Stack.Screen name="selectGoal" component={SelectGoalScreen} />
    <Stack.Screen name="selectActivity" component={SelectActivityScreen} />
    <Stack.Screen name="selectParameters" component={SelectParametersScreen} />
    <Stack.Screen name="selectPlace" component={SelectPlaceScreen} />
    <Stack.Screen name="selectLoad" component={SelectLoadScreen} />
    <Stack.Screen name="training" component={TrainingScreen} />
    <Stack.Screen name="trainingDay" component={TrainingDayScreen} />
    <Stack.Screen name="trainingExample" component={TrainingExampleScreen} />
    <Stack.Screen name="trainingComplete" component={TrainingCompleteScreen} />
    <Stack.Screen name="blitzInfo" component={BlitzInfo} />
    <Stack.Screen name="blitzPoll" component={BlitzPoll} />
    <Stack.Screen name="profile" component={Profile} />
    <Stack.Screen name="store" component={Store} />
    <Stack.Screen name="nutrition" component={Nutrition} />
    <Stack.Screen name="nutritionDishes" component={NutritionDishes} />
  </Stack.Navigator>
);

export const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("authToken");
      setIsAuthenticated(!!token);
      setCheckingAuth(false);
    };
    checkAuth();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor={"transparent"}
      />
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};