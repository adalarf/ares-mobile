import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';


export const HomeScreen = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'Bounded': require('../assets/fonts/Bounded-Regular.ttf'),
        'Forest-Smooth': require('../assets/fonts/ForestSmooth.ttf'),
    });

    if (!fontsLoaded) {
      return null;
    }
    
    return (
        <View>
          <ImageBackground source={require('../assets/splash-screen.png')} style={styles.entrance_page}/>
          <TouchableOpacity style={styles.entrance_button} onPress={() => navigation.navigate('authorization')}>
            <Text style={styles.entrance_button_text}>Вход</Text>
        </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    entrance_button: {
      position: 'absolute',
      bottom: 100,
      alignSelf: 'center',
      opacity: 0.7,
      width: 298,
      height: 59,
      backgroundColor: 'gray',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    entrance_button_text: {
      fontFamily: "Bounded",
      fontSize: 20,
      fontWeight: "400",
      fontStyle: "normal",
      letterSpacing: -1.100000023841858,
      textAlign: "center",
      color: "#FFFFFF"
    },
    entrance_page: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }
  });