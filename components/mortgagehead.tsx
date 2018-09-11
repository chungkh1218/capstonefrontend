import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 18, alignSelf: 'center', color: "#grey" }}>
        Mortgage Calculator
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: 400,
    backgroundColor: "lightblue",
    justifyContent: "center",

   
  }
});

export default Header;
