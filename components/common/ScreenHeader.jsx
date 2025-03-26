import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { textStyles } from '../../styles/typography';

export const ScreenHeader = ({ lines }) => {
    return (
        <View style={styles.headerContainer}>
            {lines.map((line, index) => (
                <Text key={index} style={textStyles.headerText}>{line}</Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center'
    }
}); 