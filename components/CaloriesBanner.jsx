import { StyleSheet, View, Text, Image } from 'react-native';
import { typography } from '../styles/typography';

export const CaloriesBanner = ({ calories = "0 кк" }) => {
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
        marginBottom: 10,
        gap: 10,
    },
    fireIcon: {
        width: 36,
        height: 36,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 21,
        flex: 1,
    },
    calories: {
        color: '#FFFFFF',
        fontSize: 21,
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