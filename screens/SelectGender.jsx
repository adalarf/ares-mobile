import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import { textStyles } from '../styles/typography';
import { handleSelect } from '../services/api/handleSelection';

export const SelectGenderScreen = ({ navigation }) => {
    return (
        <View>
            <ImageBackground source={require('../assets/home-blured.png')} style={styles.entrance_page}/>
            <View style={styles.selectGenderContainer}>
                <View style={styles.selectGenderTextContainer}>
                    <Text style={styles.selectGenderText}>Выбрать</Text>
                    <Text style={styles.selectGenderText}>пол:</Text>
                </View>

                <View style={styles.genderSelectionContainer}>
                    <TouchableOpacity style={styles.genderContainer} onPress={() => handleSelect({ gender: 'female' }, navigation, 'selectGoal')}>
                        <Image source={require('../assets/woman-gender.png')} style={styles.genderImage} />
                        <Text style={textStyles.buttonText}>Женский</Text>
                    </TouchableOpacity>textStyles
                    <TouchableOpacity style={styles.genderContainer} onPress={() => handleSelect({ gender: 'male' }, navigation, 'selectGoal')}>
                        <Image source={require('../assets/man-gender.png')} style={styles.genderImage} />
                        <Text style={textStyles.buttonText}>Мужской</Text>
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
    selectGenderContainer: {
        position: 'absolute',
        justifyContent: 'space-between',
        top: 110,
        width: 269,
        height: 350
    },
    selectGenderTextContainer: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectGenderText: {
        fontSize: 44,
        color: "#FFFFFF",
    },
    genderImage: {
        width: 93,
        height: 118
    },
    genderName: {
        fontSize: 14,
        color: "#FFFFFF",
        textAlign: 'center'
    },
    genderSelectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: 70
    }
})
