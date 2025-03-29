import { View, StyleSheet } from 'react-native';
import { BackgroundLayout } from '../components/layout/BackgroundLayout';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { CustomButton } from '../components/common/CustomButton';
import { ButtonsContainer } from '../components/common/ButtonsContainer';

export const SelectLoadScreen = ({ navigation }) => {
    return (
        <BackgroundLayout>
            <View style={styles.container}>
                <ScreenHeader lines={['Какая у вас', 'нагрузка?']} />
                
                <ButtonsContainer>
                    <CustomButton 
                        title="Физическая нагрузка" 
                        onPress={() => navigation.navigate('mainPage')} 
                    />
                    <CustomButton 
                        title="Умственная нагрузка" 
                        onPress={() => navigation.navigate('mainPage')} 
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
