import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { typography } from '../styles/typography';

export const BMIBanner = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={[styles.title, typography.bounded]}>
                        BMI (индекс массы и тела)
                    </Text>
                    <Text style={[styles.subtitle, typography.bounded]}>
                        У тебя нормальный вес
                    </Text>
                </View>
                <View style={styles.chartContainer}>
                    <Image 
                        source={require('../assets/Banner-Pie.png')}
                        style={styles.pieChart}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    textContainer: {
        flex: 1,
        marginRight: 20,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 21,
        marginBottom: 8,
    },
    subtitle: {
        color: '#FFFFFF',
        fontSize: 15,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#FF3B81',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 20,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    chartContainer: {
        position: 'relative',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pieChart: {
        width: 180,
        height: 180,
        position: 'absolute',
    },
    bmiValue: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    }
}); 