import { View, StyleSheet, Image, Text, ImageBackground, Dimensions } from 'react-native';
import { typography } from '../styles/typography';
import { BackgroundLayout } from '../components/layout/BackgroundLayout';


export const TrainingScreen = ({ }) => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../assets/training-background.png')}/>
            <View style={styles.trainingHeader}>
                <Image style={styles.cross} source={require('../assets/cross.png')}/>
                <View>
                    <Text style={[styles.trainingText, typography.bounded]}>Тренировки</Text>
                    <Text style={[styles.trainingText, typography.bounded]}>1 - 2 неделя</Text>
                </View>
                <View style={styles.levelCircle}>
                    <Text style={styles.levelText}>1</Text>
                </View>
            </View>
            
            <View style={styles.trainingsContainer}>
                <View style={styles.trainingContainer}>
                    <View style={styles.trainingImageContainer}>
                        <Text style={[styles.trainingTimeText, typography.bounded]}>~20 мин</Text>
                        <Image style={styles.trainingImage} source={require('../assets/upper.png')}/>
                    </View>
                    <Text style={[styles.trainingNumber, typography.forestSmooth]}>1</Text>
                    <View style={styles.trainingInfoContainer}>
                        <Text style={[styles.trainingText, typography.bounded]}>Верх</Text>
                        <Text style={[styles.trainingTextGray, typography.bounded]}>Понедельник</Text>
                        <Text style={[styles.trainingTextGray, typography.bounded]}>10.04.2025</Text>
                        <View style={styles.gainContainer}>
                            <Text style={[styles.trainingText, typography.bounded]}>50XP</Text>
                            <View style={styles.gemsContainer}>
                                <Text style={[styles.trainingText, typography.bounded]}>50</Text>
                                <Image style={styles.gemIcon} source={require('../assets/gem.png')}/>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.trainingContainer}>
                    <View style={styles.trainingImageContainer}>
                        <Text style={[styles.trainingTimeText, typography.bounded]}>~30 мин</Text>
                        <Image style={styles.trainingImage} source={require('../assets/lower-body.png')}/>
                    </View>
                    <Text style={[styles.trainingNumber, typography.forestSmooth]}>2</Text>
                    <View style={styles.trainingInfoContainer}>
                        <Text style={[styles.trainingText, typography.bounded]}>Низ</Text>
                        <Text style={[styles.trainingTextGray, typography.bounded]}>Среда</Text>
                        <Text style={[styles.trainingTextGray, typography.bounded]}>12.04.2025</Text>
                        <View style={styles.gainContainer}>
                            <Text style={[styles.trainingText, typography.bounded]}>70XP</Text>
                            <View style={styles.gemsContainer}>
                                <Text style={[styles.trainingText, typography.bounded]}>80</Text>
                                <Image style={styles.gemIcon} source={require('../assets/gem.png')}/>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.trainingContainer}>
                    <View style={styles.trainingImageContainer}>
                        <Text style={[styles.trainingTimeText, typography.bounded]}>~25 мин</Text>
                        <Image style={styles.trainingImage} source={require('../assets/upper.png')}/>
                    </View>
                    <Text style={[styles.trainingNumber, typography.forestSmooth]}>3</Text>
                    <View style={styles.trainingInfoContainer}>
                        <Text style={[styles.trainingText, typography.bounded]}>Верх</Text>
                        <Text style={[styles.trainingTextGray, typography.bounded]}>Пятница</Text>
                        <Text style={[styles.trainingTextGray, typography.bounded]}>14.04.2025</Text>
                        <View style={styles.gainContainer}>
                            <Text style={[styles.trainingText, typography.bounded]}>85XP</Text>
                            <View style={styles.gemsContainer}>
                                <Text style={[styles.trainingText, typography.bounded]}>100</Text>
                                <Image style={styles.gemIcon} source={require('../assets/gem.png')}/>
                            </View>
                        </View>
                    </View>
                </View> 


                <View style={styles.trainingContainer}>
                    <View style={styles.trainingImageContainer}>
                        <Text style={[styles.trainingTimeText, typography.bounded]}>~15 мин</Text>
                        <Image style={styles.trainingImage} source={require('../assets/lower-body.png')}/>
                    </View>
                    <Text style={[styles.trainingNumber, typography.forestSmooth]}>4</Text>
                    <View style={styles.trainingInfoContainer}>
                        <Text style={[styles.trainingText, typography.bounded]}>Низ</Text>
                        <Text style={[styles.trainingTextGray, typography.bounded]}>Понедельник</Text>
                        <Text style={[styles.trainingTextGray, typography.bounded]}>10.04.2025</Text>
                        <View style={styles.gainContainer}>
                            <Text style={[styles.trainingText, typography.bounded]}>90XP</Text>
                            <View style={styles.gemsContainer}>
                                <Text style={[styles.trainingText, typography.bounded]}>100</Text>
                                <Image style={styles.gemIcon} source={require('../assets/gem.png')}/>
                            </View>
                        </View>
                    </View>
                </View> 
                


                <View style={styles.trainingContainer}>
                    <View style={styles.trainingImageContainer}>
                        <Text style={[styles.trainingTimeText, typography.bounded]}>~60 мин</Text>
                        <Image style={styles.trainingImage} source={require('../assets/upper.png')}/>
                    </View>
                    <Text style={[styles.trainingNumber, typography.forestSmooth]}>5</Text>
                    <View style={styles.trainingInfoContainer}>
                        <Text style={[styles.trainingText, typography.bounded]}>Верх</Text>
                        <Text style={[styles.trainingTextGray, typography.bounded]}>Понедельник</Text>
                        <Text style={[styles.trainingTextGray, typography.bounded]}>17.04.2025</Text>
                        <View style={styles.gainContainer}>
                            <Text style={[styles.trainingText, typography.bounded]}>110XP</Text>
                            <View style={styles.gemsContainer}>
                                <Text style={[styles.trainingText, typography.bounded]}>130</Text>
                                <Image style={styles.gemIcon} source={require('../assets/gem.png')}/>
                            </View>
                        </View>
                    </View>
                </View> 
                
            </View>

            

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    trainingHeader: {
        top: 55,
        left: 30,
        position: 'absolute',
        width: 343,
        height: 52,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    levelCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFFFFF'
    },
    levelText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    background: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    cross: {
        width: 52,
        height: 52
    },
    trainingText: {
        color: '#FFFFFF',
    },
    trainingTimeText: {
        color: '#bababa',
    },
    trainingTextGray: {
        color: '#bababa',
    },
    trainingsContainer: {
        left: 30,
        top: 120,
        position: 'absolute',
        // flexDirection: 'row',
        // width: 352,
        // height: 161.125,
        // // backgroundColor: 'gray',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // flexWrap: 'wrap'
    },
    trainingContainer: {
        flexDirection: 'row',
        width: 352,
        height: 140.125,
        // backgroundColor: 'gray',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    trainingTime: {
        color: '#FFFFFF'
    },
    trainingImageContainer: {
        alignItems: 'center'
    },
    trainingNumber: {
        fontSize: 40,
        color: '#FFFFFF'
    },
    trainingImage: {
        width: 156,
        height: 110
    },
    trainingTime: {

    },
    trainingInfoContainer: {
        paddingTop: 20,
        height: 140,
        justifyContent: 'space-between',
    },
    gainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: 125
    },
    gemsContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    gemIcon: {
        width: 34,
        height: 34,
        top: 9
    },
});
