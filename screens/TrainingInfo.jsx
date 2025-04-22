import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { typography } from '../styles/typography';

export const TrainingInfoScreen = ({ route }) => {
    const description = route?.params?.description;
    const image = route?.params?.image;

    return (
        <ImageBackground style={styles.background} source={require('../assets/training-background.png')}>
            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={[styles.headerText, typography.bounded]}>Информация об упражнении</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.characterImage} source={image ? { uri: image } : require('../assets/training-plug.png')} />
                </View>
                <View style={styles.instructionsContainer}>
                    <Text style={[styles.instructionsHeader, typography.bounded]}>Описание:</Text>
                    <Text style={[styles.instructionText, typography.bounded]}>{description || 'Описание отсутствует'}</Text>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});