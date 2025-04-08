import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { TrainingHeader } from '../components/TrainingHeader';
import { TrainingItem } from '../components/TrainingItem';

export const TrainingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../assets/training-background.png')} />
            <TrainingHeader title="Тренировки" subtitle="1 - 2 неделя" />
            <View style={styles.trainingsContainer}>
                <TrainingItem
                    time="~20 мин"
                    image={require('../assets/upper.png')}
                    number={1}
                    title="Верх"
                    day="Понедельник"
                    date="10.04.2025"
                    xp={50}
                    gems={50}
                    navigation={navigation}
                />
                <TrainingItem
                    time="~30 мин"
                    image={require('../assets/lower-body.png')}
                    number={2}
                    title="Низ"
                    day="Среда"
                    date="12.04.2025"
                    xp={70}
                    gems={80}
                    navigation={navigation}
                />
                <TrainingItem
                    time="~25 мин"
                    image={require('../assets/upper.png')}
                    number={3}
                    title="Верх"
                    day="Пятница"
                    date="14.04.2025"
                    xp={85}
                    gems={100}
                    navigation={navigation}
                />
                <TrainingItem
                    time="~15 мин"
                    image={require('../assets/lower-body.png')}
                    number={4}
                    title="Низ"
                    day="Понедельник"
                    date="10.04.2025"
                    xp={90}
                    gems={100}
                />
                <TrainingItem
                    time="~60 мин"
                    image={require('../assets/upper.png')}
                    number={5}
                    title="Верх"
                    day="Понедельник"
                    date="17.04.2025"
                    xp={110}
                    gems={130}
                    navigation={navigation}
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
