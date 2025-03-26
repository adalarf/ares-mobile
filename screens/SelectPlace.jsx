import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { textStyles } from '../styles/typography';

export const SelectPlaceScreen = ({ navigation }) => {
    return (
        <View>
            <ImageBackground source={require('../assets/splash-screen-without-avatar.png')} style={styles.entrance_page}/>
            <View style={styles.selectPlaceContainer}>
                <View style={styles.selectPlaceTextContainer}>
                    <Text style={textStyles.headerText}>Где будут</Text>
                    <Text style={textStyles.headerText}>занятия?</Text>
                </View>

                <View style={styles.placesContainer}>
                    <TouchableOpacity style={styles.placeButton} onPress={() => navigation.navigate('selectLoad')}>
                        <Text style={styles.buttonText}>Дома</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.placeButton} onPress={() => navigation.navigate('selectLoad')}>
                        <Text style={styles.buttonText}>На улице</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.placeButton} onPress={() => navigation.navigate('selectLoad')}>
                        <Text style={styles.buttonText}>Дома/на улице</Text>
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
    selectPlaceContainer: {
        position: 'absolute',
        justifyContent: 'space-between',
        top: 110,
        width: 269,
        height: 350
    },
    selectPlaceTextContainer: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectPlaceText: {
        ...textStyles.headerText,
    },
    placesContainer: {
        top: 50,
        left: Dimensions.get('window').width * 0.15,
        width: 288,
        height: 352,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeButton: {
        width: 288,
        height: 104,
        borderWidth: 1,
        borderColor: "#808080",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "7E7E7E",
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        ...textStyles.buttonText,
    }
}) 