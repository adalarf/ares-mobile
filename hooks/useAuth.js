import { useState } from 'react';
import { Alert } from 'react-native';
import { authService } from '../services/api/authService';

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
            
            if (loginResult.success) {
                navigation.navigate('selectGender');
            } else {
                const registerResult = await authService.register(email, password);
                
                if (registerResult.success) {
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