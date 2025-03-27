import { StyleSheet, View, Text, Image } from 'react-native';
import { typography } from '../styles/typography';

export const CaloriesBanner = ({ calories = "590 кк" }) => {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.headerContainer}>
                    <Image 
                        source={require('../assets/fire-front-color.png')}
                        style={styles.fireIcon}
                        resizeMode="contain"
                    />
                    <Text style={[styles.title, typography.bounded]}>
                        Сожгли сегодня
                    </Text>
                    <Text style={[styles.calories, typography.bounded]}>
                        {calories}
                    </Text>
                </View>
                <View style={styles.chartContainer}>
                    <Image 
                        source={require('../assets/Chart.png')}
                        style={styles.chart}
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
        padding: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        gap: 10,
    },
    fireIcon: {
        width: 24,
        height: 24,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 24,
        flex: 1,
    },
    calories: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    chartContainer: {
        width: '100%',
        height: 190,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chart: {
        width: '100%',
        height: '100%',
    }
}); 