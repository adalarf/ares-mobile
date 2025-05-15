import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { authService } from "../services/api/authService";
import { get } from "lodash";

function ProfileCard() {
  const [data, setData] = React.useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const token = await authService.get_token();
      const response = await fetch("http://51.250.36.219:8000/stats/info", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setData(data);
      console.log("Data from API:", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ paddingTop: 20 }}>
      <Image style={styles.corona} source={require("../assets/corona.png")} />
      <View style={styles.container}>
        <BlurView intensity={20} tint="dark" style={styles.blur}>
          <View style={styles.mainContent}>
            <View style={styles.gemsContainer}>
              <Text style={styles.gemsCount}>{get(data, "gems", 0)}</Text>
              <Image
                source={require("../assets/gem.png")}
                style={styles.gemIcon}
              />
            </View>
            <View style={styles.progress}>
              <View style={styles.circle}>
                <Text style={styles.level}>{get(data, "level", 0)}</Text>
              </View>
              <LinearGradient
                style={{
                  width: "100%",
                  height: `${(get(data, "experience_current", 0) / get(data, "experience_to_next_level", 1)) * 100}%`,
                }}
                colors={["#E691C054", "#FF008C"]}
              />
            </View>
            <LinearGradient
              style={styles.avatar}
              colors={[
                "#FFEB00",
                "#FFEB00",
                "#FC9B5F",
                "#F849C1",
                "#FF00A1",
              ].reverse()}
              start={[0, 0]}
              end={[1, 0]}
            >
              <LinearGradient
                colors={["#CEC016", "#FFEB00", "#FC9B5F", "#F849C1", "#FF00A1"]}
                start={[0, 0]}
                end={[1, 0]}
                style={{ flex: 1, borderRadius: 999, overflow: "hidden" }}
              >
                <BlurView intensity={50} tint="dark" style={{ flex: 1 }}>
                  <Image
                    source={require("../assets/ava.png")}
                    style={styles.ava}
                  />
                </BlurView>
              </LinearGradient>
            </LinearGradient>
          </View>
          <View style={styles.info}>
            <View style={styles.infoCard}>
              <Text style={styles.infoText}>21 год</Text>
              <Text style={styles.infoText}>180см</Text>
              <Text style={styles.infoText}>80кг</Text>
            </View>
          </View>
        </BlurView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    overflow: "hidden",
  },
  blur: {
    padding: 10,
  },
  corona: {
    position: "absolute",
    width: 82,
    height: 50,
    zIndex: 1,
    left: "50%",
    resizeMode: "contain",
    transform: "translate(-50%, -50%)",
  },
  mainContent: {
    flexDirection: "row",
    gap: 20,
  },
  progress: {
    width: 54,
    height: 230,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: "#fff",
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  circle: {
    position: "absolute",
    left: 4,
    top: 4,
    width: 44,
    height: 44,
    borderRadius: 22,
    borderColor: "#fff",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  level: {
    fontFamily: "Bounded-Regular",
    fontSize: 20,
    color: "#fff",
  },
  avatar: {
    width: 200,
    height: 180,
    borderRadius: 999,
    padding: 6,
  },
  ava: {
    width: "100%",
    height: "100%",
  },
  info: {
    height: 50,
    width: "100%",
  },
  infoCard: {
    position: "absolute",
    height: 40,
    width: 230,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    overflow: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.21)",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  infoText: {
    fontFamily: "Bounded-Regular",
    fontSize: 14,
    color: "#fff",
  },
  gemsContainer: {
    position: "absolute",
    right: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  gemsCount: {
    color: "#FFFFFF",
    fontFamily: "Bounded-Regular",
    fontSize: 20,
  },
  gemIcon: {
    width: 46,
    height: 46,
    marginTop: 5,
    marginLeft: -10,
    resizeMode: "contain",
  },
});
export default ProfileCard;