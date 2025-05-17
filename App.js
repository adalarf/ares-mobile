import { Navigation } from "./screens/Navigation";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Bounded: require("./assets/fonts/Bounded-Regular.ttf"),
    "Forest-Smooth": require("./assets/fonts/ForestSmooth.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Navigation />;
}