import { useState } from 'react';
import { Alert } from 'react-native';
import { authService } from '../services/api/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const useAuth = (navigation) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleAuth = async (email, password) => {
        if (!email || !password) {
            Alert.alert('Ошибка', 'Пожалуйста, заполните все поля');
            return;
        }

        setIsLoading(true);

        try {
            const loginResult = await authService.login(email, password);
            const isFilledParameters = await AsyncStorage.getItem('isFilledParameters')
            
            if (loginResult.success) {
                await AsyncStorage.setItem('isLoggedIn', 'true');
                if (isFilledParameters == null) {
                    navigation.navigate('selectGender');
                }
                else {
                    navigation.navigate('selectGender');
                }
            } else {
                const registerResult = await authService.register(email, password);
                
                if (registerResult.success) {
                    await AsyncStorage.setItem('isLoggedIn', 'true');
                    navigation.navigate('selectGender');
                } else {
                    Alert.alert('Ошибка', registerResult.error);
                }
            }
        } catch (error) {
            console.error('Error details:', {
                message: error.message,
                response: error.response?.data
            });
            Alert.alert(
                'Ошибка', 
                `Произошла ошибка при подключении к серверу: ${error.message}`
            );
        } finally {
            setIsLoading(false);
        }
    };

    return { handleAuth, isLoading };
}; 