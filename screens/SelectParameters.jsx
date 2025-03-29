import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { textStyles } from '../styles/typography';
import { CustomInput } from '../components/common/CustomInput';
import { CustomButton } from '../components/common/CustomButton';

export const SelectParametersScreen = ({ navigation }) => {
    return (
        <View>
            <ImageBackground source={require('../assets/home-blured.png')} style={styles.entrance_page}/>
            <View style={styles.authContainer}>
                <View style={styles.authorizationTextContainer}>
                    <Text style={textStyles.headerText}>Параметры</Text>
                </View>
                <View style={styles.inputContainer}>
                    <CustomInput
                        placeholder="Рост"
                        keyboardType="numeric"
                    />
                    <CustomInput
                        placeholder="Вес"
                        keyboardType="numeric"
                    />
                </View>

                <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate('selectPlace')}>
                    <Text style={textStyles.buttonText}>Далее</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    entrance_page: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    authContainer: {
        position: 'absolute',
        justifyContent: 'space-between',
        top: 110,
        width: 298,
        height: 300
    },
    authorizationTextContainer: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '85%',
        gap: 15,
        top: 70,
        left: 55,
    },
    buttonNext: {
        top: 90,
        left: 55,
        width: 298,
        height: 59,
        fontSize: 14,
        color: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#808080",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
    }
}); 