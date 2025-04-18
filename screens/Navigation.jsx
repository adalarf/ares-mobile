import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './Home';
import { AuthorizationScreen } from './Authorization';
import { SelectGenderScreen } from './SelectGender';
import { SelectGoalScreen } from './SelectGoal';
import { SelectActivityScreen } from './SelectActivity';
import { SelectParametersScreen } from './SelectParameters';
import { SelectPlaceScreen } from './SelectPlace';
import { SelectLoadScreen } from './SelectLoad';
import { MainPage } from './MainPage';
import { TrainingScreen } from './Training';
import { TrainingDayScreen } from './TrainingDay';
import { TrainingExampleScreen } from './TrainingExample';
import { TrainingInfoScreen } from './TrainingInfo';
import { TrainingCompleteScreen } from './TrainingComplete';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
    <Stack.Screen name="training" component={TrainingScreen} />
    <Stack.Screen name="trainingDay" component={TrainingDayScreen} />
    <Stack.Screen name="trainingExample" component={TrainingExampleScreen} />
    <Stack.Screen name="trainingComplete" component={TrainingCompleteScreen} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="mainPage" component={MainPage} />
    <Stack.Screen name="training" component={TrainingScreen} />
    <Stack.Screen name="trainingDay" component={TrainingDayScreen} />
    <Stack.Screen name="trainingExample" component={TrainingExampleScreen} />
    <Stack.Screen name="trainingComplete" component={TrainingCompleteScreen} />
  </Stack.Navigator>
);

export const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('authToken');
      setIsAuthenticated(!!token);
      setCheckingAuth(false);
    };
    checkAuth();
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
      <AuthStack></AuthStack>
    </NavigationContainer>
  );
};