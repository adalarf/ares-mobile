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
import BlitzPoll from "./BlitzPoll";
import Profile from "./Profile";
import Store from "./Store";
import Nutrition from "./Nutrition";
import { StatusBar } from "react-native";
import NutritionDishes from "./NutritionDishes";
import SelectIntensity from "./SelectIntensity";
import SelectFoodRestrictions from "./SelectFoodRestrictions";
import SelectProductGroup from "./SelectProductGroup";
import LaunchScreen from "./LaunchScreen";
import NavigationService from "../services/navigationService";
import { PollComplete } from "./PollComplete";
import SelectInjuries from "./SelectInjuries";
import SelectInjuryType from "./SelectInjuryType";

const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName={"launch"}
  >
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
    <Stack.Screen name="selectIntensity" component={SelectIntensity} />
    <Stack.Screen name="selectProductGroup" component={SelectProductGroup} />
    <Stack.Screen
      name="selectFoodRestrictions"
      component={SelectFoodRestrictions}
    />
    <Stack.Screen name="pollComplete" component={PollComplete} />
    <Stack.Screen name="launch" component={LaunchScreen} />
    <Stack.Screen name="selectInjuries" component={SelectInjuries} />
    <Stack.Screen name="selectInjuryType" component={SelectInjuryType} />
  </Stack.Navigator>
);

export const Navigation = () => {
  return (
    <NavigationContainer ref={NavigationService._navigator}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor={"transparent"}
      />
      <MainStack />
    </NavigationContainer>
  );
};