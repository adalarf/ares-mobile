import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { CustomButton } from '../components/common/CustomButton';
import { BackgroundLayout } from '../components/layout/BackgroundLayout';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { ButtonsContainer } from '../components/common/ButtonsContainer';

export const SelectActivityScreen = ({ navigation }) => {
    return (
        <BackgroundLayout>
            <View style={styles.container}>
                <ScreenHeader lines={['Какая у тебя', 'активность?']} />
                
                <ButtonsContainer>
                    <CustomButton 
                        title="0-2000 шагов" 
                        onPress={() => navigation.navigate('selectParameters')} 
                    />
                    <CustomButton 
                        title="2000-5000 шагов" 
                        onPress={() => navigation.navigate('selectParameters')} 
                    />
                    <CustomButton 
                        title="5000-10000 шагов" 
                        onPress={() => navigation.navigate('selectParameters')} 
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
