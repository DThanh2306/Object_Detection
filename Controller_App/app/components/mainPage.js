import React, { useState } from "react";
import { TouchableOpacity, SafeAreaView, Text, StyleSheet } from "react-native";
import WifiManager from "react-native-wifi-reborn";

const MainPage = () => {
  const [output, setOutput] = useState("");
  const [state, setState] = useState("Start");
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);

  const startCommands = ["python test.py", "echo 'Thai dep trai'"];
  const stopCommands = ["python stop_test.py"];

  const connectToRPiWiFi = async () => {
    const ssid = "Fureiii";
    const password = "thaiphuong2604";

    try {
      await WifiManager.connectToProtectedSSID(ssid, password, false);
      setConnected(true);
    } catch (error) {
      console.error("Lỗi kết nối WiFi:", error);
    }
  };

  const handlePress = () => {
    setLoading(true);

    connectToRPiWiFi();

    if (connected) {
      fetch("http://192.168.1.109:3000/run-command", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          commands: state == "Start" ? startCommands : stopCommands,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);

          if (data && Array.isArray(data)) {
            setOutput(data.map((item) => item.output || item.error).join("\n"));
          } else if (data && (data.output || data.error)) {
            setOutput(data.output || data.error);
          } else {
            setOutput("Unexpected server response.");
          }

          setState((prev) => (prev === "Start" ? "Stop" : "Start"));
        })
        .catch((error) => {
          setLoading(false);

          console.error("Error fetching:", error);
          setOutput("Unable to connect to the server. Please try again later.");
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={[styles.button, loading && { opacity: 0.7 }]}
        onPress={handlePress}
        disabled={loading}
      >
        <Text style={styles.buttonText}>{loading ? "Loading..." : state}</Text>
      </TouchableOpacity>
      <Text style={{ padding: 20 }}>{output}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  button: {
    backgroundColor: "#6200ea",
    borderRadius: 200,
    width: 400,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Lato_700Bold",
    fontSize: 24,
  },
});

export default MainPage;
