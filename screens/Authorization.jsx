import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import { textStyles } from "../styles/typography";
import { CustomInput } from "../components/common/CustomInput";
import { useAuth } from "../hooks/useAuth";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const AuthorizationScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleAuth, isLoading } = useAuth(navigation);
  const { top, bottom } = useSafeAreaInsets();

  const onSubmit = () => handleAuth(email, password);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/home-blured.png")}
        style={styles.entrance_page}
      >
        <View
          style={[
            styles.authContainer,
            { paddingTop: top + 30, paddingBottom: bottom },
          ]}
        >
          <View style={styles.authorizationTextContainer}>
            <Text style={textStyles.headerText}>Авторизация</Text>
            <Text style={textStyles.headerText}>/</Text>
            <Text style={textStyles.headerText}>Вход</Text>
          </View>
          <View style={styles.inputContainer}>
            <CustomInput
              placeholder="Логин"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <CustomInput
              placeholder="Пароль"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <CustomButtonWithGradientBorder
            title="Далее"
            onPress={onSubmit}
            disabled={isLoading}
            style={styles.buttonNext}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  entrance_page: {
    width: "100%",
    height: "100%",
  },
  authContainer: {
    flex: 1,
  },
  authorizationTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  authorizationText: {
    fontSize: 44,
    color: "#FFFFFF",
  },
  inputContainer: {
    width: "100%",
    gap: 15,
    top: 70,
    alignItems: "center",
  },
  buttonNext: {
    top: 90,
    width: 298,
    height: 59,
    fontSize: 14,
    color: "#FFFFFF",
    borderColor: "#808080",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
  },
  nextButtonContainer: {
    position: "absolute",
    top: Dimensions.get("window").height * 0.55,
    width: "85%",
    left: "50%",
    transform: [{ translateX: "-42.5%" }],
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
  },
});