import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';


export const AuthorizationScreen = ({ navigation }) => {
    return (
        <View>
            <ImageBackground source={require('../assets/home-blured.png')} style={styles.entrance_page}/>
            <View style={styles.authContainer}>
                <View style={styles.authorizationTextContainer}>
                    <Text style={styles.authorizationText}>Авторизация</Text>
                    <Text style={styles.authorizationText}>/</Text>
                    <Text style={styles.authorizationText}>Вход</Text>
                </View>
                <View style={styles.authFields}>
                    <TextInput placeholder='пароль' style={styles.authField}/>
                    <TextInput placeholder='почта' style={styles.authField}/>
                    <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate('selectGender')}>
                        <Text>Далее</Text>
                    </TouchableOpacity>
                </View>
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
    authFields: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 218
    },
    authField: {
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
    },
    buttonNext : {
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
        alignSelf: 'center'
    }
  });