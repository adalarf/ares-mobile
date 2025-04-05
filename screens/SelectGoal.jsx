import { View, StyleSheet } from 'react-native';
import { BackgroundLayout } from '../components/layout/BackgroundLayout';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { CustomButton } from '../components/common/CustomButton';
import { ButtonsContainer } from '../components/common/ButtonsContainer';
import { handleSelect } from '../services/api/handleSelection';


export const SelectGoalScreen = ({ navigation }) => {
    return (
        <BackgroundLayout>
            <View style={styles.container}>
                <ScreenHeader lines={['Цель', 'тренировки:']} />
                
                <ButtonsContainer>
                    <CustomButton 
                        title="Похудение" 
                        onPress={() => handleSelect({ goal: 'weight_loss' }, navigation, 'selectActivity')} 
                    />
                    <CustomButton 
                        title="Набор мышц" 
                        onPress={() => handleSelect({ goal: 'muscle_gain' }, navigation, 'selectActivity')} 
                    />
                    <CustomButton 
                        title="Повышение активности" 
                        onPress={() => handleSelect({ goal: 'increase_activity' }, navigation, 'selectActivity')}
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
