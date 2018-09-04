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
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Button } from "react-native-elements";

type Props = {};
export default class Auth extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Property Valuation!</Text>
        {/* <Text style={styles.instructions}>Please login or signup!</Text> */}
        {/* <Button
          title="Continue"
          onPress={() =>
            this.props.navigator.pop({
              animated: true, // does the pop have transition animation or does it happen immediately (optional)
              animationType: "fade" // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
            })
          }
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        /> */}
        <View style={styles.buttonPanel}>
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
            icon={{ name: "diff-renamed", type: "octicon" }}
            buttonStyle={{
              borderRadius: 24,
              backgroundColor: "green",
              marginHorizontal: 0,
              width: Dimensions.get("window").width * 0.85,
              margin: 8,
              padding: 12
            }}
          />
          <Button
            title="Sign Up"
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
            icon={{ name: "diff-added", type: "octicon" }}
            buttonStyle={{
              borderRadius: 24,
              backgroundColor: "blue",
              marginHorizontal: 0,
              width: Dimensions.get("window").width * 0.85,
              margin: 8,
              padding: 12
            }}
          />
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5
//   }
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  title: {
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    padding: 80,
    margin: 10
  },
  buttonPanel: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20
  }
});
