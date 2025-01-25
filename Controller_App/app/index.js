import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MainPage from "./components/mainPage";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainPage />
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
});

export default Home;
