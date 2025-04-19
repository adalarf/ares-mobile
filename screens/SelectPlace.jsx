import { View, StyleSheet } from 'react-native';
import { BackgroundLayout } from '../components/layout/BackgroundLayout';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { CustomButton } from '../components/common/CustomButton';
import { ButtonsContainer } from '../components/common/ButtonsContainer';
import { handleSelect } from '../services/api/handleSelection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SelectPlaceScreen = ({ navigation }) => {
    return (
        <BackgroundLayout>
            <View style={styles.container}>
                <ScreenHeader lines={['Где будут', 'занятия?']} />
                
                <ButtonsContainer>
                    <CustomButton 
                        title="Дома" 
                        onPress={async () => {
                            await AsyncStorage.setItem('training_place', 'Дом');
                            handleSelect({training_place: 'home'}, navigation, 'selectLoad');
                        }} 
                    />
                    <CustomButton 
                        title="На улице" 
                        onPress={async () => {
                            await AsyncStorage.setItem('training_place', 'Зал');
                            handleSelect({training_place: 'outside'}, navigation, 'selectLoad');
                        }}  
                    />
                    <CustomButton 
                        title="Дома/на улице"
                        onPress={async () => {
                            await AsyncStorage.setItem('training_place', 'Дом/улица');
                            handleSelect({training_place: 'mixed'}, navigation, 'selectLoad');
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
