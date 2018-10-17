import React from "react";
import { View, ActivityIndicator, StyleSheet, Platform } from "react-native";

const ProgressBar = () => (
  <View style={styles.progressBar}>
    <ActivityIndicator
      size="large"
      color={Platform.OS === "ios" ? "#EA0000" : "white"}
    />
  </View>
);

const styles = StyleSheet.create({
  progressBar: {
    flex: 1,
    justifyContent: "center"
  }
});

export default ProgressBar;
