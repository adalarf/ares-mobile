import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { typography } from '../../styles/typography';


export const CustomButtonUnmuted = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={[styles.container, style]}
        >
            <Text style={[styles.buttonText, typography.bounded]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        borderRadius: 10,
        overflow: 'hidden',
    },
    blur: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    }
}); 