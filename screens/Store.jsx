import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

function Store({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/training-background.png")}
        style={styles.backgroundImage}
        imageStyle={styles.image}
        resizeMode="cover"
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/back-icon.png")}
            style={styles.menuIcon}
          />
        </TouchableOpacity>

        <View style={styles.gemsContainer}>
          <Text style={styles.gemsCount}>100</Text>
          <Image source={require("../assets/gem.png")} style={styles.gemIcon} />
        </View>

        <View style={styles.levelCircle}>
          <Text style={styles.levelText}>1</Text>
        </View>
      </View>
      <View style={styles.table}>
        {Array.from({ length: 16 }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.card,
              index < 4 && { borderTopWidth: 0 },
              index >= 12 && { borderBottomWidth: 0 },
              index % 4 === 0 || index % 4 === 3
                ? {
                    width: Dimensions.get("window").width / 4 - 20,
                  }
                : {
                    width: Dimensions.get("window").width / 4 + 20,
                  },
            ]}
          >
            <View style={styles.cardImageContainer} />
          </View>
        ))}
      </View>
      <Image style={styles.avatar} source={require("../assets/avatar.png")} />
    </View>
  );
}

const tableHeight = Dimensions.get("screen").height / 3;

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    width: Dimensions.get("window").width,
    minHeight: Dimensions.get("screen").height,
  },
  avatar: {
    height: tableHeight,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 40,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    height: 100,
  },
  menuIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  gemsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  gemsCount: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  gemIcon: {
    width: 46,
    height: 46,
    marginTop: 5,
    marginLeft: -10,
    resizeMode: "contain",
  },
  levelCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  levelText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  table: {
    height: tableHeight,
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "white",
  },
  card: {
    height: tableHeight / 4,
    width: Dimensions.get("window").width / 4,
    borderColor: "rgba(255, 255, 255, 0.06)",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImageContainer: {
    height: tableHeight / 4 - 4,
    width: tableHeight / 4 - 4,
    borderRadius: tableHeight / 4,
    backgroundColor: "rgba(239, 239, 239, 0.39)",
  },
});

export default Store;