import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { typography } from '../styles/typography';

export const TrainingInfoScreen = () => {
    return (
        <ImageBackground style={styles.background} source={require('../assets/training-background.png')}>
            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={[styles.headerText, typography.bounded]}>Отжимания</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.characterImage} source={require('../assets/pushup.png')} />
                </View>
                <View style={styles.instructionsContainer}>
                    <Text style={[styles.instructionsHeader, typography.bounded]}>Инструкция к отжиманиям:</Text>
                    <Text style={[styles.instructionText, typography.bounded]}>
                        1. Исходное положение
                        {'\n'}Встаньте в планку: руки прямые на ширине плеч, ладони под плечами. Тело образует прямую линию от головы до пят. Ноги вместе или слегка расставлены.
                    </Text>
                    <Text style={[styles.instructionText, typography.bounded]}>
                        2. Опускание
                        {'\n'}На вдохе согните локти, приближая грудь к полу. Локти направляйте под углом 45° от тела. Не прогибайте поясницу — держите пресс и ягодицы напряженными.
                    </Text>
                    <Text style={[styles.instructionText, typography.bounded]}>
                        3. Глубина
                        {'\n'}Опуститесь до комфортного уровня (минимум — угол в локтях 90°). Если сложно, начните с отжиманий с коленей.
                    </Text>
                    <Text style={[styles.instructionText, typography.bounded]}>
                        4. Подъем
                        {'\n'}На выдохе усилием груди и трицепсов вытолкните тело вверх, сохраняя прямое положение. Не блокируйте локти в верхней точке.
                    </Text>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        color: '#333333',
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    characterImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    instructionsContainer: {
        marginTop: 10,
    },
    instructionsHeader: {
        fontSize: 18,
        color: '#333333',
        marginBottom: 10,
    },
    instructionText: {
        fontSize: 16,
        color: '#555555',
        marginBottom: 15,
    },
    background: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});