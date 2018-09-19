import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 18, alignSelf: "center", color: "#D3D3D3" }}>
        Mortgage Calculator
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: 400,
    backgroundColor: "#0033cc",
    justifyContent: "center"
  }
});

export default Header;
