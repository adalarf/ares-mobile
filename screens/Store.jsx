import React, { useEffect } from "react";
import {
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { Image } from "expo-image";
import HeaderWithGems from "../components/HeaderWithGems";
import { get } from "lodash";
import { typography } from "../styles/typography";
import useStore from "../services/store";
import { buyItem, getAvatar, getItems } from "../hooks/useMainRequests";

function Store({ navigation }) {
  const [items, setItems] = React.useState([]);
  const avatar = useStore((state) => state.avatar);

  useEffect(() => {
    getAvatar().then();
    getItems().then((data) => {
      setItems(get(data, "items", []));
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/training-background.png")}
        style={styles.backgroundImage}
        imageStyle={styles.image}
        resizeMode="cover"
      />
      <HeaderWithGems
        leftElement={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/back-icon.png")}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
        }
      />
      <View>
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
            />
          ))}
        </View>
        <View
          style={[
            styles.table,
            {
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              width: Dimensions.get("window").width,
            },
          ]}
        >
          <View
            style={[
              styles.card,
              {
                width: Dimensions.get("window").width / 4 - 20,
                borderTopWidth: 0,
              },
            ]}
          >
            <View style={styles.cardImageContainer}>
              <Image
                source={require("../assets/cross.png")}
                style={styles.image}
              />
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.card,
              {
                width: Dimensions.get("window").width / 4 + 20,
                height: tableHeight,
                borderTopWidth: 0,
                borderBottomWidth: 0,
              },
            ]}
            onPress={() => {
              buyItem(items[0]?.id);
            }}
          >
            <View style={styles.items}>
              <Image
                source={require("../assets/vip-items.png")}
                style={styles.items}
              />
              <View style={styles.priceContainer}>
                <Text style={[typography.bounded, styles.price]}>
                  {items[0]?.price}
                </Text>
                <Image
                  source={require("../assets/gem.png")}
                  style={styles.gem}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.card,
              {
                height: tableHeight,
                borderWidth: 0,
              },
            ]}
            onPress={() => {
              buyItem(items[1]?.id);
            }}
          >
            <View style={styles.items}>
              <Image
                source={require("../assets/premium-items.png")}
                style={styles.items}
              />
              <View style={styles.priceContainer}>
                <Text style={[typography.bounded, styles.price]}>
                  {items[1]?.price}
                </Text>
                <Image
                  source={require("../assets/gem.png")}
                  style={styles.gem}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.card,
              {
                height: tableHeight,
                borderWidth: 0,
              },
            ]}
            onPress={() => {
              buyItem(items[2]?.id);
            }}
          >
            <View style={styles.items}>
              <Image
                source={require("../assets/legendary-items.png")}
                style={styles.items}
              />
              <View style={styles.priceContainer}>
                <Text style={[typography.bounded, styles.price]}>
                  {items[2]?.price}
                </Text>
                <Image
                  source={require("../assets/gem.png")}
                  style={styles.gem}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: avatar,
          }}
          style={styles.avatar}
          cachePolicy={"disk"}
        />
      </View>
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
  gem: {
    width: 15,
    height: 25,
    resizeMode: "cover",
  },
  price: {
    fontSize: 10,
    color: "#FFFFFF",
  },
  avatar: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  avatarContainer: {
    height: tableHeight,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  menuIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  table: {
    height: tableHeight,
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
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
  items: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  priceContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
  },
});

export default Store;