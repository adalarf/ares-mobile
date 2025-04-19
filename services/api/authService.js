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
                const refreshToken = response.data.refresh_token;
                if (token) {
                    await AsyncStorage.setItem('authToken', token);
                }
                if (refreshToken) {
                    await AsyncStorage.setItem('refreshToken', refreshToken);
                }
                if (token && refreshToken) {
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
                const refreshToken = response.data.refresh_token;
                if (token) {
                    await AsyncStorage.setItem('authToken', token);
                }
                if (refreshToken) {
                    await AsyncStorage.setItem('refreshToken', refreshToken);
                }
                if (token && refreshToken) {
                    return { success: true };
                }
            }
            return { success: false, error: 'Токен не получен от сервера' };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    async refresh_tokens() {
        try {
            const refreshToken = await AsyncStorage.getItem('refreshToken');
            if (!refreshToken) {
                return { success: false, error: 'Refresh token not found' };
            }
            const response = await axios.post(`${BASE_URL}/auth/refresh`, null, {
                params: { refresh_token: refreshToken },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            if (response.status === 200) {
                const token = response.data.token || response.data.access_token;
                const newRefreshToken = response.data.refresh_token;
                if (token) {
                    await AsyncStorage.setItem('authToken', token);
                }
                if (newRefreshToken) {
                    await AsyncStorage.setItem('refreshToken', newRefreshToken);
                }
                if (token && newRefreshToken) {
                    return { success: true };
                }
            }
            return { success: false, error: 'Не удалось обновить токены' };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    async get_token() {
        try {
            const token = await AsyncStorage.getItem('authToken');
            if (!token) return null;
            // Проверка срока действия токена
            const payload = token.split('.')[1];
            const decoded = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
            const now = Math.floor(Date.now() / 1000);
            if (decoded.exp && decoded.exp > now) {
                return token;
            } else {
                // access_token просрочен, пробуем обновить
                const refreshResult = await authService.refresh_tokens();
                if (refreshResult.success) {
                    return await AsyncStorage.getItem('authToken');
                } else {
                    return null;
                }
            }
        } catch (e) {
            return null;
        }
    }
};