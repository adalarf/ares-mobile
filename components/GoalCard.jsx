import { StyleSheet, View, Text, Image } from 'react-native';
import { typography } from '../styles/typography';

export const GoalCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image 
                    source={require('../assets/clip.png')}
                    style={styles.icon}
                    resizeMode="contain"
                />
            </View>
            <Text style={[styles.title, typography.bounded]}>Ваша цель</Text>
            <Text style={[styles.subtitle, typography.bounded]}>
                Снижение массы тела
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        borderRadius: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        marginRight: 10,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        width: 20,
        height: 20,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        marginBottom: 5,
    },
    subtitle: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 14,
    }
}); 