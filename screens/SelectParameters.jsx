import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { textStyles } from '../styles/typography';

export const SelectParametersScreen = ({ navigation }) => {
    return (
        <View>
            <ImageBackground source={require('../assets/splash-screen-without-avatar.png')} style={styles.entrance_page}/>
            <View style={styles.selectParametersContainer}>
                <View style={styles.selectParametersTextContainer}>
                    <Text style={textStyles.headerText}>Напиши</Text>
                    <Text style={textStyles.headerText}>о себе</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Рост"
                        placeholderTextColor="#FFFFFF"
                    />

                    <TextInput 
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Вес"
                        placeholderTextColor="#FFFFFF"
                    />

                    <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('selectPlace')}>
                        <Text style={textStyles.buttonText}>Далее</Text>
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
    selectParametersContainer: {
        position: 'absolute',
        justifyContent: 'space-between',
        top: 110,
        width: 269,
        height: 350
    },
    selectParametersTextContainer: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectParametersText: {
        ...textStyles.headerText,
    },
    inputContainer: {
        top: 50,
        left: Dimensions.get('window').width * 0.15,
        width: 288,
        height: 352,
        alignItems: 'center',
        gap: 20
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#7E7E7E',
        borderRadius: 10,
        paddingHorizontal: 15,
        color: '#FFFFFF',
        fontSize: 16
    },
    nextButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#7E7E7E',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    nextButtonText: {
        ...textStyles.buttonText,
    }
}) 