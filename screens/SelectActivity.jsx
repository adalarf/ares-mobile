import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { CustomButton } from '../components/common/CustomButton';
import { BackgroundLayout } from '../components/layout/BackgroundLayout';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { ButtonsContainer } from '../components/common/ButtonsContainer';
import { handleSelect } from '../services/api/handleSelection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SelectActivityScreen = ({ navigation }) => {
    return (
        <BackgroundLayout>
            <View style={styles.container}>
                <ScreenHeader lines={['Какая у тебя', 'активность?']} />
                
                <ButtonsContainer>
                    <CustomButton 
                        title="0-2000 шагов" 
                        onPress={async () => {
                            await AsyncStorage.setItem('training_level', 'low');
                            handleSelect({ activity: 'low' }, navigation, 'selectParameters');
                        }} 
                    />
                    <CustomButton 
                        title="2000-5000 шагов" 
                        onPress={async () => {
                            await AsyncStorage.setItem('training_level', 'middle');
                            handleSelect({ activity: 'middle' }, navigation, 'selectParameters');
                        }} 
                    />
                    <CustomButton 
                        title="5000-10000 шагов" 
                        onPress={async () => {
                            await AsyncStorage.setItem('training_level', 'high');
                            handleSelect({ activity: 'high' }, navigation, 'selectParameters');
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
