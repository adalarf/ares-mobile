import { View, StyleSheet } from 'react-native';
import { BackgroundLayout } from '../components/layout/BackgroundLayout';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { CustomButton } from '../components/common/CustomButton';
import { ButtonsContainer } from '../components/common/ButtonsContainer';
import { handleSelect } from '../services/api/handleSelection';


export const SelectLoadScreen = ({ navigation }) => {
    return (
        <BackgroundLayout>
            <View style={styles.container}>
                <ScreenHeader lines={['Какая у вас', 'нагрузка?']} />
                
                <ButtonsContainer>
                    <CustomButton 
                        title="Физическая нагрузка" 
                        onPress={() => handleSelect({load: 'physical'}, navigation, 'mainPage')} 
                    />
                    <CustomButton 
                        title="Умственная нагрузка" 
                        onPress={() => handleSelect({load: 'intellegentive'}, navigation, 'mainPage')} 
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
