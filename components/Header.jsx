import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Chip, Icon } from "react-native-paper";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomContainer}>
        <View style={styles.profile}>
          <Image
            source={require("../assets/images/profile.png")}
            style={{ width: 30, height: 30 }}
          />

          <Text
            style={{
              color: "white",
              fontSize: 14,
              marginLeft: 10,
              fontFamily: "Rubik",
            }}
          >
            MR. AMIT (45 Y/O)
          </Text>
        </View>
        <Chip
          style={styles.chip}
          icon={() => (
            <Ionicons name="information-circle" size={18} color="white" />
          )}
          onPress={() => console.log("Chip Pressed")}
        >
          <Text style={styles.chip}>23 points</Text>
        </Chip>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C91F2",
    padding: 10,
    width: "100%",
    height: 120,
    flexDirection: "column-reverse",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  profile: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  chip: {
    backgroundColor: "rgba(61, 120, 234, 0.5)",
    borderRadius: 50,
    width: "30%",
    color: "white",
  },
  chipText: {
    color: "white",
    fontWeight: "condensed",
    fontSize: 15,
  },
});
