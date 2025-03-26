import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { textStyles } from '../styles/typography';

export const SelectLoadScreen = ({ navigation }) => {
    return (
        <View>
            <ImageBackground source={require('../assets/splash-screen-without-avatar.png')} style={styles.entrance_page}/>
            <View style={styles.selectLoadContainer}>
                <View style={styles.selectLoadTextContainer}>
                    <Text style={textStyles.headerText}>Какая у вас</Text>
                    <Text style={textStyles.headerText}>нагрузка?</Text>
                </View>

                <View style={styles.loadsContainer}>
                    <TouchableOpacity style={styles.loadButton}>
                        <Text style={styles.buttonText}>Физическая нагрузка</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loadButton}>
                        <Text style={styles.buttonText}>Умственная нагрузка</Text>
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
    selectLoadContainer: {
        position: 'absolute',
        justifyContent: 'space-between',
        top: 110,
        width: 269,
        height: 350
    },
    selectLoadTextContainer: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectLoadText: {
        ...textStyles.headerText,
    },
    loadsContainer: {
        top: 50,
        left: Dimensions.get('window').width * 0.15,
        width: 288,
        height: 250,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    loadButton: {
        width: 288,
        height: 104,
        backgroundColor: '#7E7E7E',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#808080",
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        ...textStyles.buttonText,
    }
}) 