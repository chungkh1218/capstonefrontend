/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, { Component } from "react";
import * as React from "react";
import { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  ImageBackground
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";

interface IAuthRequestProps {
  navigator: Navigator;
}
export default class AuthRequest extends Component<IAuthRequestProps> {
  render() {
    return (
      <ImageBackground
        source={require("../../src/img/AuthRequest_BG.png")}
        style={styles.container}
      >
        <Text style={styles.header}>Authenication </Text>
        <Text style={styles.description}>
          Please Sign Up / Login to try the advance features
        </Text>
        <Button
          title="Login"
          onPress={() =>
            this.props.navigator.push({
              screen: "example.loginPage", // unique ID registered with Navigation.registerScreen
              title: undefined, // navigation bar title of the pushed screen (optional)
              subtitle: undefined, // navigation bar subtitle of the pushed screen (optional)
              titleImage: require("../../src/icons/IC-Remove-Red-Eye-24px.png"), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
              passProps: {}, // Object that will be passed as props to the pushed screen (optional)
              animated: true, // does the push have transition animation or does it happen immediately (optional)
              animationType: "fade", // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
              backButtonTitle: undefined, // override the back button title (optional)
              backButtonHidden: false, // hide the back button altogether (optional)
              navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
              navigatorButtons: {}, // override the nav buttons for the pushed screen (optional)
              // enable peek and pop - commited screen will have `isPreview` prop set as true.
              previewView: undefined, // react ref or node id (optional)
              previewHeight: undefined, // set preview height, defaults to full height (optional)
              previewCommit: true, // commit to push preview controller to the navigation stack (optional)
              previewActions: [
                {
                  // action presses can be detected with the `PreviewActionPress` event on the commited screen.
                  id: "", // action id (required)
                  title: "", // action title (required)
                  style: undefined, // 'selected' or 'destructive' (optional)
                  actions: [] // list of sub-actions
                }
              ]
            })
          }
          buttonStyle={{
            borderRadius: 24,
            backgroundColor: "#FF7600",
            marginHorizontal: 0,
            width: Dimensions.get("window").width * 0.35,
            margin: 8,
            padding: 12
          }}
        />
        <Button
          title="Register"
          onPress={() =>
            this.props.navigator.push({
              screen: "example.signUpPage", // unique ID registered with Navigation.registerScreen
              title: undefined, // navigation bar title of the pushed screen (optional)
              subtitle: undefined, // navigation bar subtitle of the pushed screen (optional)
              titleImage: require("../../src/icons/IC-Remove-Red-Eye-24px.png"), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
              passProps: {}, // Object that will be passed as props to the pushed screen (optional)
              animated: true, // does the push have transition animation or does it happen immediately (optional)
              animationType: "fade", // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
              backButtonTitle: undefined, // override the back button title (optional)
              backButtonHidden: false, // hide the back button altogether (optional)
              navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
              navigatorButtons: {}, // override the nav buttons for the pushed screen (optional)
              // enable peek and pop - commited screen will have `isPreview` prop set as true.
              previewView: undefined, // react ref or node id (optional)
              previewHeight: undefined, // set preview height, defaults to full height (optional)
              previewCommit: true, // commit to push preview controller to the navigation stack (optional)
              previewActions: [
                {
                  // action presses can be detected with the `PreviewActionPress` event on the commited screen.
                  id: "", // action id (required)
                  title: "", // action title (required)
                  style: undefined, // 'selected' or 'destructive' (optional)
                  actions: [] // list of sub-actions
                }
              ]
            })
          }
          buttonStyle={{
            borderRadius: 24,
            backgroundColor: "#FF7600",
            marginHorizontal: 0,
            width: Dimensions.get("window").width * 0.35,
            margin: 8,
            padding: 12
          }}
        />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  // content: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
  header: {
    fontSize: 24,
    color: "black",
    textAlign: "center",
    margin: 10
  },
  description: {
    fontSize: 12,
    color: "grey",
    textAlign: "center",
    margin: 10
  }
});
