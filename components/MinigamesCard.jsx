import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { typography } from '../styles/typography';

export const MinigamesCard = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('minigames')}>
            <View style={styles.iconContainer}>
                <Image 
                    source={require('../assets/minigames-icon.png')}
                    style={styles.icon}
                    resizeMode="contain"
                />
            </View>
            <Text style={[styles.title, typography.bounded]}>Мини-игры</Text>
            <Image 
                source={require('../assets/minigames.png')}
                style={styles.gamepadImage}
                resizeMode="contain"
            />
        </TouchableOpacity>
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
        marginLeft: 10,
        height: 200,
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
        fontSize: 18,
        marginBottom: 10,
    },
    gamepadImage: {
        width: '100%',
        height: 90,
        alignSelf: 'center',
        marginBottom: 30
    }
}); 