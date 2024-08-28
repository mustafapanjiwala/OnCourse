// app/chat/index.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { io } from "socket.io-client";
import Header from "@/components/Header";
import { Button, IconButton } from "react-native-paper";

const ChatScreen = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "receive",
      message:
        "Hi, Dr. Shreya. Good to see you.  I've been having a persistent cough lately, and I've noticed I'm losing weight without trying. I'm a bit concerned because I've been a smoker for many years.",
    },
  ]);
  const [error, setError] = useState("");

  useEffect(() => {
    const newSocket = io("http://localhost:8080");
    setSocket(newSocket);

    newSocket.on("response", (data) => {
      if (data.success) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "receive", message: data.message },
        ]);
      } else {
        // Handle error
        setError(data.message);
      }
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    setMessages([...messages, { type: "send", message: message }]);
    socket.emit("message", message);
    setMessage("");
  };

  return (
    <>
      <Header />
      <View
        style={{
          flex: 1,

          backgroundColor: "#fff",
        }}
      >
        <View style={styles.container}>
          {error ? ( // Display the error if it exists
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}
          <FlatList
            data={messages}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.messageContainer,
                  item.type === "send"
                    ? styles.messageSend
                    : styles.messageReceived,
                ]}
              >
                {item.type === "send" ? (
                  <View
                    style={[
                      styles.messageHeader,
                      { justifyContent: "flex-end" },
                    ]}
                  >
                    <Text
                      style={[
                        styles.messageText,
                        { color: "rgba(16, 24, 40, 0.5)" },
                      ]}
                    >
                      YOU
                    </Text>
                    <Image
                      source={require("../../assets/images/you.png")}
                      style={{ width: 30, height: 30, marginLeft: 5 }}
                    />
                  </View>
                ) : (
                  <View style={styles.messageHeader}>
                    <Image
                      source={require("../../assets/images/aiDoctor.png")}
                      style={{ width: 30, height: 30, marginRight: 5 }}
                    />
                    <Text
                      style={[
                        styles.messageText,
                        { color: "rgba(16, 24, 40, 0.5)" },
                      ]}
                    >
                      SENIOR AI DOCTOR
                    </Text>
                  </View>
                )}

                <Text style={styles.messageText}>{item.message}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              paddingHorizontal: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextInput
              style={styles.input}
              value={message}
              onChangeText={setMessage}
              placeholder="Enter your response"
            />

            <IconButton
              icon="send"
              iconColor="#fff"
              size={25}
              onPress={sendMessage}
              style={styles.sendButton}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    width: "90%",
    //Android
    //IOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 0.5,
  },
  messageContainer: {
    marginVertical: 4,
    padding: 8,
    borderRadius: 8,
    maxWidth: "80%",
    display: "flex",
  },
  messageHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  messageSend: {
    alignSelf: "flex-end",
  },
  messageReceived: {
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 16,
    fontFamily: "Rubik",
  },
  errorContainer: {
    padding: 8,
    backgroundColor: "#f8d7da", // Red background for the error alert
    borderRadius: 8,
    marginBottom: 8,
  },
  errorText: {
    color: "#721c24", // Dark red text color for the error
  },
  sendButton: {
    backgroundColor: "#2563EB",
  },
});

export default ChatScreen;
