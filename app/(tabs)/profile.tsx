import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function OrderScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Profile screen.</Text>
      <View className="w-full h-1 bg-blue-200" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
