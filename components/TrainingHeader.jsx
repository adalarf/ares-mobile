import { View, Image, Text, StyleSheet } from 'react-native';
import { typography } from '../styles/typography';
import PropTypes from 'prop-types';

export const TrainingHeader = ({ title = 'Тренировки', subtitle = '1 - 2 неделя' }) => {
    return (
        <View style={styles.trainingHeader}>
            <Image style={styles.cross} source={require('../assets/cross.png')} />
            <View>
                <Text style={[styles.trainingText, typography.bounded]}>{title}</Text>
                <Text style={[styles.trainingText, typography.bounded]}>{subtitle}</Text>
            </View>
            <View style={styles.levelCircle}>
                <Text style={styles.levelText}>1</Text>
            </View>
        </View>
    );
};

TrainingHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    trainingHeader: {
        top: 55,
        left: 30,
        position: 'absolute',
        width: 343,
        height: 52,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    levelCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    levelText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    cross: {
        width: 52,
        height: 52,
    },
    trainingText: {
        color: '#FFFFFF',
    },
});