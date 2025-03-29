import { View, StyleSheet } from 'react-native';
import { BackgroundLayout } from '../components/layout/BackgroundLayout';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { CustomButton } from '../components/common/CustomButton';
import { ButtonsContainer } from '../components/common/ButtonsContainer';

export const SelectPlaceScreen = ({ navigation }) => {
    return (
        <BackgroundLayout>
            <View style={styles.container}>
                <ScreenHeader lines={['Где будут', 'занятия?']} />
                
                <ButtonsContainer>
                    <CustomButton 
                        title="Дома" 
                        onPress={() => navigation.navigate('selectLoad')} 
                    />
                    <CustomButton 
                        title="На улице" 
                        onPress={() => navigation.navigate('selectLoad')} 
                    />
                    <CustomButton 
                        title="Дома/на улице" 
                        onPress={() => navigation.navigate('selectLoad')} 
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
