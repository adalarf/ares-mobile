import { StyleSheet, View, Text, Image } from 'react-native';
import { typography } from '../styles/typography';
import { LinearGradient } from 'expo-linear-gradient';

export const DailyTasksCard = () => {
    return (
        <LinearGradient
            colors={['#8B3B8B', '#FFD700']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <Image 
                        source={require('../assets/exercises.png')}
                        style={styles.icon}
                        resizeMode="contain"
                    />
                </View>
                <Text style={[styles.title, typography.bounded]}>
                    Ежедневные задания
                </Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        height: 100,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        gap: 10,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 14,
    }
}); 