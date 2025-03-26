import { View, StyleSheet, Dimensions } from 'react-native';

export const ButtonsContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 50,
        left: Dimensions.get('window').width * 0.15,
        width: 288,
        height: 230,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}); 