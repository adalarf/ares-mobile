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


const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="authorization" component={AuthorizationScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="selectGender" component={SelectGenderScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="selectGoal" component={SelectGoalScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="selectActivity" component={SelectActivityScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="selectParameters" component={SelectParametersScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="selectPlace" component={SelectPlaceScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="selectLoad" component={SelectLoadScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="mainPage" component={MainPage} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}