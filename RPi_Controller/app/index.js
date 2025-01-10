import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { Stack } from "expo-router";
import { useState } from "react";

import styles from "../styles/Home.styles";

const Home = () => {
  const [message, setMessage] = useState("Welcome to Raspberry Pi Controller!");
  const [pressState, setPressState] = useState(false);

  const handlePress = () => {
    setPressState(!pressState);

    if (pressState) {
      setMessage("You have pressed the button");
    } else {
      setMessage("Welcome to Raspberry Pi Controller!");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/raspberry_background.jpg")} // Hình nền từ thư mục assets
      style={styles.background}
      resizeMode="cover" // Hiển thị hình nền bao phủ toàn bộ màn hình
    >
      <SafeAreaView style={styles.container}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Raspberry Pi Controller", // Tiêu đề trên header
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#F06292", // Màu nền khác
            },
            headerTintColor: "#fff", // Màu chữ khác
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: "800",
            },
            headerShadowVisible: false,
          }}
        />

        <View>
          <Text style={styles.text}>{message}</Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={handlePress} // Hàm xử lý khi nhấn nút
            style={styles.button}
          >
            <Image
              source={require("../assets/raspberry_icon.png")} // Hình ảnh nội bộ
              style={styles.image} // Kích thước của hình ảnh
            />
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
