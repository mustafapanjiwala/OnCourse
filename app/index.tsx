// app/splash.tsx
import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/(tabs)");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.logoText}>ONCOURSE</Text>
      </View>
      <Text style={styles.welcomeText}>ASSIGNMENT</Text>
      {/* <TouchableOpacity
        style={{ width: "90%", height: 50, backgroundColor: "white" }}
      >
        <Text>Enter</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#167ADF",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
  },
  logoText: {
    fontSize: 52,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Rubik-xBold",
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "500",
    color: "white",
    fontFamily: "Rubik-bold",
  },
});

export default Splash;
