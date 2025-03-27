import { StyleSheet, View, Text, Image } from 'react-native';
import { typography } from '../styles/typography';

export const AvatarCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image 
                    source={require('../assets/avatar-icon.png')}
                    style={styles.icon}
                    resizeMode="contain"
                />
            </View>
            <Image 
                source={require('../assets/avatar.png')}
                style={styles.avatarImage}
                resizeMode="contain"
            />
            <Text style={[styles.title, typography.bounded]}>Поменять аватара</Text>
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
        height: 420,
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
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
    },
    avatarImage: {
        width: '100%',
        height: 150,
        alignSelf: 'center',
    }
}); 