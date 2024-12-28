import React, { useState } from "react";
import { TouchableOpacity, SafeAreaView, Text, StyleSheet } from "react-native";

const Home = () => {
  const [output, setOutput] = useState("");

  const commands = ["cd ~/raspberry_pi_server", "python test.py"];

  const handlePress = () => {
    fetch("http://192.168.1.113:3000/run-command", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ commands: commands }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handling the response data
        if (Array.isArray(data)) {
          // Join all output/error into a single string
          setOutput(data.map((item) => item.output || item.error).join("\n"));
        } else {
          setOutput(data.output || data.error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      <Text>{output}</Text>
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

export default Home;
