import AsyncStorage from '@react-native-async-storage/async-storage';


export const handleSelect = async (dataObject, navigation, nextScreen) => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      if (dataObject.hasOwnProperty("load")) {
        await AsyncStorage.setItem('isFilledParameters', 'filled');
      }
      if (!token) {
        Alert.alert('Ошибка', 'Токен не найден');
        return;
      }

      const response = await fetch('http://10.0.2.2:8000/stats/stats', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(dataObject),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке пола');
      }

      navigation.navigate(nextScreen);
    } catch (error) {
      console.error(error);
      Alert.alert('Ошибка', 'Не удалось отправить данные. Попробуйте снова.');
    }
  };