import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import { textStyles } from '../styles/typography';
import { CustomInput } from '../components/common/CustomInput';
import { CustomButton } from '../components/common/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export const AuthorizationScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleAuth = async () => {
        if (!email || !password) {
            Alert.alert('Ошибка', 'Пожалуйста, заполните все поля');
            return;
        }

        setIsLoading(true);

        try {
            const BASE_URL = 'http://10.0.2.2:8000';
            
            try {
                const loginResponse = await axios.post(`${BASE_URL}/auth/login`, {
                    email,
                    password
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                });

                console.log('Login Response:', loginResponse.data);

                if (loginResponse.status === 200) {
                    const token = loginResponse.data.token || loginResponse.data.access_token;
                    if (token) {
                        await AsyncStorage.setItem('authToken', token);
                        navigation.navigate('selectGender');
                    } else {
                        console.log('Response data:', loginResponse.data);
                        Alert.alert('Ошибка', 'Токен не получен от сервера');
                    }
                }
            } catch (loginError) {
                const registerResponse = await axios.post(`${BASE_URL}/auth/register`, {
                    email,
                    password
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                });

                console.log('Register Response:', registerResponse.data);

                if (registerResponse.status === 200) {
                    const token = registerResponse.data.token || registerResponse.data.access_token;
                    if (token) {
                        Alert.alert('Успех', 'Регистрация прошла успешно');
                        await AsyncStorage.setItem('authToken', token);
                        navigation.navigate('selectGender');
                    } else {
                        console.log('Response data:', registerResponse.data);
                        Alert.alert('Ошибка', 'Токен не получен от сервера');
                    }
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

    return (
        <View>
            <ImageBackground source={require('../assets/home-blured.png')} style={styles.entrance_page}/>
            <View style={styles.authContainer}>
                <View style={styles.authorizationTextContainer}>
                    <Text style={textStyles.headerText}>Авторизация</Text>
                    <Text style={textStyles.headerText}>/</Text>
                    <Text style={textStyles.headerText}>Вход</Text>
                </View>
                <View style={styles.inputContainer}>
                    <CustomInput
                        placeholder="Логин"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <CustomInput
                        placeholder="Пароль"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
                <CustomButton 
                    title="Далее"
                    onPress={handleAuth}
                    disabled={isLoading}
                    style={styles.buttonNext}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    entrance_page: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    authContainer: {
        position: 'absolute',
        justifyContent: 'space-between',
        top: 110,
        width: 298,
        height: 300
    },
    authorizationTextContainer: {
      width: Dimensions.get('window').width,
      justifyContent: 'center',
      alignItems: 'center'
    },
    authorizationText: {
        fontSize: 44,
        color: "#FFFFFF"
    },
    inputContainer: {
        width: '85%',
        gap: 15,
        top: 70,
        left: 55,
    },
    buttonNext: {
        top: 90,
        left: 55,
        width: 298,
        height: 59,
        fontSize: 14,
        color: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#808080",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
    },
    nextButtonContainer: {
        position: 'absolute',
        top: Dimensions.get('window').height * 0.55,
        width: '85%',
        left: '50%',
        transform: [{ translateX: '-42.5%' }],
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
    }
  });