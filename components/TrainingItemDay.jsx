import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { typography } from '../styles/typography';

export const TrainingItemDay = ({ image, date, xp, gems, navigation, exercise }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('trainingExample', { exercise })}>
            <View style={styles.trainingContainer}>
                <View style={styles.trainingImageContainer}>
                    <Image style={styles.trainingImage} source={image} />
                </View>
                <View style={styles.trainingInfoContainer}>
                    <Text style={[styles.trainingTextGray, typography.bounded]}>{date}</Text>
                    <View style={styles.gainContainer}>
                        <Text style={[styles.trainingText, typography.bounded]}>{xp}XP</Text>
                        <View style={styles.gemsContainer}>
                            <Text style={[styles.trainingText, typography.bounded]}>{gems}</Text>
                            <Image style={styles.gemIcon} source={require('../assets/gem.png')} />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    trainingContainer: {
        flexDirection: 'row',
        width: 352,
        height: 140.125,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    trainingImageContainer: {
        alignItems: 'center',
    },
    trainingImage: {
        width: 175,
        height: 119,
    },
    trainingInfoContainer: {
        paddingTop: 20,
        height: 140,
        justifyContent: 'space-evenly',
        width: 150,
    },
    gainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: 125,
    },
    gemsContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    gemIcon: {
        width: 34,
        height: 34,
        top: 9,
    },
    trainingText: {
        color: '#FFFFFF',
    },
    trainingTextGray: {
        color: '#bababa',
    },
});