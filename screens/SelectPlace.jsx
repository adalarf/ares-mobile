import { View, StyleSheet } from 'react-native';
import { BackgroundLayout } from '../components/layout/BackgroundLayout';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { CustomButton } from '../components/common/CustomButton';
import { ButtonsContainer } from '../components/common/ButtonsContainer';
import { handleSelect } from '../services/api/handleSelection';


export const SelectPlaceScreen = ({ navigation }) => {
    return (
        <BackgroundLayout>
            <View style={styles.container}>
                <ScreenHeader lines={['Где будут', 'занятия?']} />
                
                <ButtonsContainer>
                    <CustomButton 
                        title="Дома" 
                        onPress={() => handleSelect({training_place: 'home'}, navigation, 'selectLoad')} 
                    />
                    <CustomButton 
                        title="На улице" 
                        onPress={() => handleSelect({training_place: 'outside'}, navigation, 'selectLoad')}  
                    />
                    <CustomButton 
                        title="Дома/на улице"
                        onPress={() => handleSelect({training_place: 'mixed'}, navigation, 'selectLoad')}  
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
