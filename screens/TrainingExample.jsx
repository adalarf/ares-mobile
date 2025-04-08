import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { typography } from '../styles/typography';
import { useNavigation } from '@react-navigation/native';

export const TrainingExampleScreen = () => {
    const navigation = useNavigation();
    const [timeLeft, setTimeLeft] = useState(60);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsRunning(false);
            navigation.navigate('trainingComplete');
        }
        return () => clearInterval(timer);
    }, [isRunning, timeLeft, navigation]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`;
    };

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../assets/training-background.png')} />
            <View style={styles.headerContainer}>
                <Text style={[styles.headerText, typography.bounded]}>Отжимания</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.characterImage} source={require('../assets/pushup.png')} />
                <TouchableOpacity style={styles.infoButton} onPress={() => navigation.navigate('TrainingInfo')}>
                    <Image style={styles.infoIcon} source={require('../assets/info.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
                <Text style={[styles.infoText, typography.bounded]}>Подход</Text>
                <Text style={[styles.infoText, typography.bounded]}>1/3</Text>
            </View>
            <View style={styles.timerContainer}>
                <Text style={[styles.timerText, typography.bounded]}>{formatTime(timeLeft)}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.stopButton} onPress={() => setIsRunning(false)}>
                    <Text style={[styles.buttonText, typography.bounded]}>Стоп</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.startButton} onPress={() => setIsRunning(true)}>
                    <Text style={[styles.buttonText, typography.bounded]}>Старт</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    headerContainer: {
        position: 'absolute',
        top: 50,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        color: '#FFFFFF',
    },
    imageContainer: {
        marginTop: 100,
        alignItems: 'center',
        position: 'relative',
    },
    characterImage: {
        width: 355,
        height: 355,
    },
    infoButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 30,
        height: 30,
    },
    infoIcon: {
        width: '100%',
        height: '100%',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 20,
    },
    infoText: {
        fontSize: 18,
        color: '#FFFFFF',
    },
    timerContainer: {
        marginTop: 20,
    },
    timerText: {
        fontSize: 36,
        color: '#FFFFFF',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 30,
    },
    stopButton: {
        backgroundColor: '#D3D3D3',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    startButton: {
        backgroundColor: '#32CD32',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFFFFF',
    },
});