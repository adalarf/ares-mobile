import { View, StyleSheet } from 'react-native';
import { BackgroundLayout } from '../components/layout/BackgroundLayout';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { CustomButton } from '../components/common/CustomButton';
import { ButtonsContainer } from '../components/common/ButtonsContainer';
import { handleSelect } from '../services/api/handleSelection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SelectGoalScreen = ({ navigation }) => {
    return (
        <BackgroundLayout>
            <View style={styles.container}>
                <ScreenHeader lines={['Цель', 'тренировки:']} />
                
                <ButtonsContainer>
                    <CustomButton 
                        title="Похудение" 
                        onPress={async () => {
                            await AsyncStorage.setItem('goal', 'weight_loss');
                            handleSelect({ goal: 'weight_loss' }, navigation, 'selectActivity');
                        }} 
                    />
                    <CustomButton 
                        title="Набор мышц" 
                        onPress={async () => {
                            await AsyncStorage.setItem('goal', 'muscle_gain');
                            handleSelect({ goal: 'muscle_gain' }, navigation, 'selectActivity');
                        }} 
                    />
                    <CustomButton 
                        title="Повышение активности" 
                        onPress={async () => {
                            await AsyncStorage.setItem('goal', 'increase_activity');
                            handleSelect({ goal: 'increase_activity' }, navigation, 'selectActivity');
                        }}
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
