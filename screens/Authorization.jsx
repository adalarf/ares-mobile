import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { textStyles } from '../styles/typography';
import { CustomInput } from '../components/common/CustomInput';


export const AuthorizationScreen = ({ navigation }) => {
    return (
        <View>
            <ImageBackground source={require('../assets/home-blured.png')} style={styles.entrance_page}/>
            <View style={styles.authContainer}>
                <View style={styles.authorizationTextContainer}>
                    <Text style={textStyles.headerText}>Авторизация</Text>
                    <Text style={textStyles.headerText}>/</Text>
                    <Text style={textStyles.headerText}>Вход</Text>
                </View>
                <View style={styles.inputContainer}>
                    <CustomInput
                        placeholder="Логин"
                    />
                    <CustomInput
                        placeholder="Пароль"
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate('selectGender')}>
                    <Text style={textStyles.buttonText}>Далее</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


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
    authorizationText: {
        fontSize: 44,
        color: "#FFFFFF"
    },
    inputContainer: {
        width: '85%',
        gap: 15,
        top: 70,
        left: 55,
    },
    buttonNext : {
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
        backgroundColor: "7E7E7E",
        alignSelf: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center'
    },
    nextButtonContainer: {
        position: 'absolute',
        top: Dimensions.get('window').height * 0.55,
        width: '85%',
        left: '50%',
        transform: [{ translateX: '-42.5%' }],
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
    }
  });