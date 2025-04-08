import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { TrainingHeader } from '../components/TrainingHeader';
import { TrainingItemDay } from '../components/TrainingItemDay';

export const TrainingDayScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../assets/training-background.png')} />
            <TrainingHeader title="Упражнение дня" subtitle="- 20 мин 160 ккал" />
            <View style={styles.trainingsContainer}>
                <TrainingItemDay
                    image={require('../assets/pushup.png')}
                    date="1. Отжимания 10x3"
                    xp={10}
                    gems={10}
                    navigation={navigation}
                />
                <TrainingItemDay
                    image={require('../assets/squats.png')}
                    date="2. Приседания 20x3"
                    xp={10}
                    gems={10}
                />
                <TrainingItemDay
                    image={require('../assets/lunges.png')}
                    date="3. Выпады 10x2"
                    xp={10}
                    gems={10}
                />
                <TrainingItemDay
                    image={require('../assets/twisting.png')}
                    date="4. Скручивания 10x3"
                    xp={10}
                    gems={10}
                />
                <TrainingItemDay
                    image={require('../assets/swings.png')}
                    date="5. Махи ногами 15x3"
                    xp={10}
                    gems={10}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    background: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    trainingsContainer: {
        left: 30,
        top: 120,
        position: 'absolute',
    },
});