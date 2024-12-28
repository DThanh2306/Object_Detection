import React, { useState } from "react";
import { TouchableOpacity, SafeAreaView, Text, StyleSheet } from "react-native";

const Home = () => {
  const [output, setOutput] = useState("");

  const handlePress = () => {
    fetch("http://192.168.1.113:3000/run-command", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ command: 'echo "Hello World"' }),
    })
      .then((response) => response.json())
      .then((data) => {
        setOutput(data.output);
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
