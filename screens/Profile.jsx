import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import ProfileCard from "../components/ProfileCard";

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/training-background.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/back-icon.png")}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/burger-menu.png")}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <ProfileCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    height: 100,
    width: "100%",
    zIndex: 2,
  },
  menuIcon: {
    width: 32,
    height: 32,
  },
  content: {
    padding: 20,
  },
});

export default Profile;