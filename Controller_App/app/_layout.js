import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import * as Font from "expo-font";
import { Stack } from "expo-router";

export default function Layout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Lato_400Regular,
        Lato_700Bold,
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "Lato_700Bold", // Use Lato Bold for the header title
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home page",
          headerTitleAlign: "center",
          headerStyle: {
            // Customize your header style here if needed
          },
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  regularText: {
    fontFamily: "Lato_400Regular",
    fontSize: 24,
  },
  boldText: {
    fontFamily: "Lato_700Bold",
    fontSize: 24,
  },
});
