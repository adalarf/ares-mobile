import { TextInput, StyleSheet, View, Dimensions } from "react-native";
import { BlurView } from "expo-blur";
import { typography } from "../../styles/typography";


export const CustomInput = ({ placeholder, ...props }) => {
  return (
    <View style={styles.container}>
      <BlurView style={styles.blur} intensity={20} tint="light">
        <TextInput
          style={[styles.input, typography.bounded]}
          placeholder={placeholder}
          placeholderTextColor="#FFFFFF"
          {...props}
        />
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 80,
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
  },
  blur: {
    flex: 1,
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    color: "#FFFFFF",
    fontSize: 16,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
});