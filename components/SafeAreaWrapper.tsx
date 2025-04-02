import React from "react";
import { StyleSheet, StatusBar, ViewStyle } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

interface SafeAreaWrapperProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function SafeAreaWrapper({
  children,
  style,
}: SafeAreaWrapperProps) {
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent
        backgroundColor="#3b82f6"
        barStyle="light-content"
      />
      <SafeAreaView style={[styles.safeArea, style]}>{children}</SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "transparent", // Transparent to show the status bar
  },
});
