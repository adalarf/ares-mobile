import React, { useEffect } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomButtonWithGradientBorder from "../components/common/CustomButtonWithGradientBorder";
import { createRequest } from "../hooks/useMainRequests";
import { get } from "lodash";

function BlitzPoll({
  navigation,
  route: {
    params: { data },
  },
}) {
  const [questions] = React.useState(data?.questions || []);
  const [question, setQuestion] = React.useState(questions[0]);
  const [index, setIndex] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          // Optional: Handle time up here
          let wrongAnswer = get(question, "answers", []).find(
            (answer) => !answer.is_right,
          );
          if (index < questions.length - 1) {
            setQuestion(questions[index + 1]);
            setIndex(index + 1);
            setTimeLeft(20);
            sendAnswer(get(wrongAnswer, "answer_id", 0));
          } else {
            sendAnswer(get(wrongAnswer, "answer_id", 0), true);
            clearInterval(timer);
            return 0;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [index]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")} : ${String(secs).padStart(2, "0")}`;
  };

  const handleAnswer = async (answer_id) => {
    console.log("BlitzPoll answer_id", answer_id);

    if (index < questions.length - 1) {
      await sendAnswer(answer_id);
      setQuestion(questions[index + 1]);
      setIndex(index + 1);
      setTimeLeft(20);
    } else {
      console.log("BlitzPoll last question_id", question.question_id);
      await sendAnswer(answer_id, true);
    }
  };

  const sendAnswer = async (answer_id, isLast = false) => {
    try {
      let response = await createRequest("blitz/answer", "POST", {
        answer_id,
        question_id: question.question_id,
        blitz_poll_id: data.blitz_poll_id,
      });
      if (response.status === 200) {
        console.log("Answer sent successfully");
        // Optional: Handle successful answer submission
        let data = await response.json();
        console.log("Answer data:", data);
        if (isLast) {
          navigation.navigate("pollComplete", {
            poll_stats: get(data, "poll_stats", {}),
          });
        }
      }
    } catch (error) {
      console.log("Error sending answer:", error);
    }
  };

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
        <Text style={styles.gemsCount}>Блиц опрос</Text>
        <View style={{ width: 32 }} />
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
    height: Dimensions.get("screen").height,
  },
  menuIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
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