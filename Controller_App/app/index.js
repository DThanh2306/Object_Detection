import React from "react";
import { TouchableOpacity, SafeAreaView, Text, StyleSheet } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
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
    borderRadius: 200, // This makes the button circular
    width: 400, // Adjust the size as needed
    height: 400, // Adjust the size as needed
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10, // Adds a shadow for Android
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Lato_700Bold",
    fontSize: 24,
  },
});

export default Home;
