import { StyleSheet, View, ImageBackground, ScrollView, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const SettingsScreen = ({ navigation }) => {
    const handleLogout = async () => {
        await AsyncStorage.removeItem('authToken');
        await AsyncStorage.removeItem('refreshToken');
        navigation.navigate('home');
    };

    return (
        <View>
            <ImageBackground 
                source={require('../assets/main-page.png')} 
                style={styles.backgroundImage}
                imageStyle={styles.image}
                resizeMode="cover" />

            <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('mainPage')}>
                        <Image 
                            source={require('../assets/back-icon.png')} 
                            style={styles.menuIcon}
                        />
                    </TouchableOpacity>
                
                    <View style={styles.gemsContainer}>
                        <Text style={styles.gemsCount}>Настройки</Text>
                        </View>
                
                        <View style={styles.levelCircle}>
                            <Text style={styles.levelText}>1</Text>
                        </View>
                    </View>
            <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.scrollView}>
                <TouchableOpacity style={styles.settingsButton}><Text style={styles.settingsButtonText}>Тема</Text></TouchableOpacity>
                <TouchableOpacity style={styles.settingsButton}><Text style={styles.settingsButtonText}>Уведомления</Text></TouchableOpacity>
                <TouchableOpacity style={styles.settingsButton}><Text style={styles.settingsButtonText}>Подписки</Text></TouchableOpacity>
                <TouchableOpacity style={styles.settingsButton}><Text style={styles.settingsButtonText}>Язык</Text></TouchableOpacity>
                <TouchableOpacity style={styles.settingsButton}><Text style={styles.settingsButtonText}>Изменение цели</Text></TouchableOpacity>
                <TouchableOpacity style={styles.settingsButton}><Text style={styles.settingsButtonText}>Аккаунт</Text></TouchableOpacity>
                <TouchableOpacity style={styles.settingsButton}><Text style={styles.settingsButtonText}>Настройка тренировки</Text></TouchableOpacity>
                <TouchableOpacity style={styles.settingsButton}><Text style={styles.settingsButtonText}>Замеры</Text></TouchableOpacity>
                <TouchableOpacity style={styles.settingsButton}><Text style={styles.settingsButtonText}>Регистрация или вход</Text></TouchableOpacity>
                <TouchableOpacity style={styles.settingsButton}><Text style={styles.settingsButtonText}>Рассказать другу</Text></TouchableOpacity>
                <TouchableOpacity style={styles.settingsButton} onPress={handleLogout}><Text style={styles.settingsButtonText}>Выход</Text></TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    header: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 60,
        height: 100,
        width: 412
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    menuIcon: {
        width: 32,
        height: 32,
        resizeMode: 'contain'
    },
    gemsCount: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    levelCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFFFFF'
    },
    levelText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    scrollView: {
        position: 'absolute',
        top: 140,
        width: '100%',
        height: '100%',
    },
    scrollContainer: {
        paddingBottom: 40,
        alignItems: 'center',
    },
    settingsButton: {
        width: 320,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(255,255,255,0.15)',
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    settingsButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '400',
    },
});