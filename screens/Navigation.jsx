import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './Home';
import { AuthorizationScreen } from './Authorization';
import { SelectGenderScreen } from './SelectGender';


const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="authorization" component={AuthorizationScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="selectGender" component={SelectGenderScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}