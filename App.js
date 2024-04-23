import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Crashes from "appcenter-crashes";
import Analytics from "appcenter-analytics";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title="Button 1"
        onPress={() => {
          Analytics.trackEvent("Button1", { yogi: "pressed" });
        }}
      />
      <Button
        title="Button 2"
        onPress={() => {
          Analytics.trackEvent("Button2", { yogi: "pressed" });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
