import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://10.0.2.2:8000';

export const authService = {
    async login(email, password) {
        try {
            const response = await axios.post(`${BASE_URL}/auth/login`, {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });

            if (response.status === 200) {
                const token = response.data.token || response.data.access_token;
                if (token) {
                    await AsyncStorage.setItem('authToken', token);
                    return { success: true };
                }
            }
            return { success: false, error: 'Токен не получен от сервера' };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    async register(email, password) {
        try {
            const response = await axios.post(`${BASE_URL}/auth/register`, {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });

            if (response.status === 200) {
                const token = response.data.token || response.data.access_token;
                if (token) {
                    await AsyncStorage.setItem('authToken', token);
                    return { success: true };
                }
            }
            return { success: false, error: 'Токен не получен от сервера' };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}; 