import React from "react";
import { View, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const ContinueButton = ({}) => {
  <View>
    <Button
      title="Continue"
      onPress={() =>
        Navigation.dismissModal({
          screen: "example.landingpage",
          title: "landing",
          passProps: {},
          navigatorStyle: {},
          navigatorButton: {}
        })
      }
      buttonStyle={{
        borderRadius: 24,
        backgroundColor: "#FF7600",
        marginHorizontal: 0,
        width: Dimensions.get("window").width * 0.5,
        margin: 6,
        padding: 8
      }}
    />
  </View>;
};

export default ContinueButton;
