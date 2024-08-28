import Header from "@/components/Header";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  return (
    <>
      <Header />
      <View style={{ flex: 1, backgroundColor: "fff" }}>
        <View style={styles.container}>
          <View style={styles.midContainer}>
            <Image
              source={require("../../assets/images/check.png")}
              style={styles.profileImage}
            />
            <Text style={styles.scoreText}>YOUR SCORE</Text>
            <Text style={styles.scoreValue}>7/10 Points</Text>

            <View style={styles.resultsContainer}>
              <View style={styles.TestContainer}>
                <Image
                  source={require("../../assets/images/labTest.png")}
                  style={styles.profileImage}
                />
                <Text style={styles.sectionTitle}>LAB TEST</Text>
                <Text style={styles.sectionValue}>2/5 Points</Text>
              </View>
              <View style={styles.TestContainer}>
                <Image
                  source={require("../../assets/images/diagnosis.png")}
                  style={styles.profileImage}
                />
                <Text style={styles.sectionTitle}>DIAGNOSIS</Text>

                <Text style={styles.sectionValue}>5/5 Points</Text>
              </View>
            </View>
          </View>
          <Button mode="contained" style={styles.button}>
            <Text style={{ fontSize: 16, fontFamily: "Rubik-medium" }}>
              NEXT PATIENT{" "}
            </Text>
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
  },
  midContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  resultsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
    marginVertical: 22,
  },
  profileImage: {
    width: 30,
    height: 30,
  },
  scoreText: {
    fontSize: 15,
    marginVertical: 10,
    fontFamily: "Rubik-semiBold",
  },
  scoreValue: { fontSize: 25, fontFamily: "Rubik-bold" },

  TestContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    fontFamily: "Rubik-semiBold",
  },
  sectionValue: {
    fontSize: 14,
    fontFamily: "Rubik-light",
  },
  button: {
    backgroundColor: "#1C91F2",
    marginBottom: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    shadowColor: "#1961B4",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
});

export default ProfileScreen;
