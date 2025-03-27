import { StyleSheet, View, Text, Image } from 'react-native';
import { typography } from '../styles/typography';

export const DirectoryCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image 
                    source={require('../assets/directory-icon.png')}
                    style={styles.icon}
                    resizeMode="contain"
                />
            </View>
            <Text style={[styles.title, typography.bounded]}>Справочник</Text>
            <Image 
                source={require('../assets/book.png')}
                style={styles.bookImage}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '48%',
        padding: 20,
        borderRadius: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
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
        fontSize: 14,
        marginBottom: 10,
    },
    bookImage: {
        width: '80%',
        height: 80,
        alignSelf: 'center',
    }
}); 