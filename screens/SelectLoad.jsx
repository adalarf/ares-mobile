import { View, StyleSheet } from 'react-native';
import { BackgroundLayout } from '../components/layout/BackgroundLayout';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { CustomButton } from '../components/common/CustomButton';
import { ButtonsContainer } from '../components/common/ButtonsContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService } from '../services/api/authService';
import axios from 'axios';

const sendWorkoutPlan = async (load, navigation) => {
    try {
        const token = await authService.get_token();
        const trainingLevel = await AsyncStorage.getItem('training_level');
        const goal = await AsyncStorage.getItem('goal');
        const trainingPlace = await AsyncStorage.getItem('training_place');

        const response = await axios.post('http://10.0.2.2:8000/training/workout_plan', {
            training_level: trainingLevel,
            goal: goal,
            training_place: trainingPlace,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            navigation.navigate('mainPage');
        } else {
            console.error('Failed to send workout plan:', response.status);
        }
    } catch (error) {
        console.error('Error sending workout plan:', error);
    }
};

export const SelectLoadScreen = ({ navigation }) => {
    return (
        <BackgroundLayout>
            <View style={styles.container}>
                <ScreenHeader lines={['Какая у вас', 'нагрузка?']} />
                
                <ButtonsContainer>
                    <CustomButton 
                        title="Физическая нагрузка" 
                        onPress={() => sendWorkoutPlan('physical', navigation)} 
                    />
                    <CustomButton 
                        title="Умственная нагрузка" 
                        onPress={() => sendWorkoutPlan('intellegentive', navigation)} 
                    />
                </ButtonsContainer>
            </View>
        </BackgroundLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'space-between',
        top: 110,
        width: 269,
        height: 350
    }
});
