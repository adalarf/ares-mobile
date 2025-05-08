import React, { useEffect } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";

function BlitzPoll({
  navigation,
  route: {
    params: { data },
  },
}) {
  const [questions] = React.useState(data?.questions || []);
  const [question, setQuestion] = React.useState(questions[0]);
  const [timeLeft, setTimeLeft] = React.useState(300);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Optional: Handle time up here
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")} : ${String(secs).padStart(2, "0")}`;
  };

  const handleAnswer = async (answer_id) => {
    console.log("BlitzPoll answer_id", answer_id);
    const questionIndex = questions.findIndex(
      (i) => i?.question_id === question?.question_id,
    );
    if (questionIndex < questions.length - 1) {
      setQuestion(questions[questionIndex + 1]);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/training-background.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.header}>
        <Ionicons
          name="close"
          size={30}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.gemsCount}>Блиц опрос</Text>
        <View style={{ width: 30 }} />
      </View>
      <View style={styles.gemsContainer}>
        <Text style={styles.gemsCount}>
          {questions.findIndex(
            (i) => i?.question_id === question?.question_id,
          ) + 1}
          /{questions.length}
        </Text>
        <ScrollView
          bounces={false}
          contentContainerStyle={{ paddingTop: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.question}>{question?.text}</Text>
          <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
          <View style={styles.answersContainer}>
            {question?.answers?.map((answer, index) => (
              <CustomButtonWithGradientBorder
                style={styles.button}
                key={"answer" + index}
                title={answer?.text}
                onPress={() => handleAnswer(answer?.answer_id)}
              />
            ))}
          </View>
        </ScrollView>
      </View>
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
  gemsCount: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  gemsContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  question: {
    color: "#FFFFFF",
    fontSize: 32,
    fontFamily: "Bounded-Regular",
    textAlign: "center",
  },
  answersContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 20,
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    width: "48%",
    marginBottom: 10,
  },
  timer: {
    color: "#FFFFFF",
    fontSize: 37,
    fontFamily: "Bounded-Regular",
    textAlign: "center",
    marginTop: 20,
    paddingVertical: 40,
  },
});

export default BlitzPoll;