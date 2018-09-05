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
import { StyleSheet, View, Text, Dimensions } from "react-native";

import { NavigationComponentProps } from "react-native-navigation";
import { IRootState } from "../../redux/store";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";
import { Button } from "react-native-elements";
import FBLoginButton from "./FBLoginButton";
const FBSDK = require("react-native-fbsdk");
const { LoginManager } = FBSDK;
// ...

// Attempt a login using the Facebook login dialog,
// asking for default permissions.
// LoginManager.logInWithReadPermissions(["public_profile"]).then(
//   function(result: any) {
//     if (result.isCancelled) {
//       alert("Login was cancelled");
//     } else {
//       alert(
//         "Login was successful with permissions: " +
//           result.grantedPermissions.toString()
//       );
//     }
//   },
//   function(error: any) {
//     alert("Login failed with error: " + error);
//   }
// );
interface ILandingPageProps extends NavigationComponentProps {}

class LandingPage extends Component<ILandingPageProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Property Valuation</Text>
        <View style={styles.buttonPanel}>
          {/* Continue */}
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
            icon={{
              name: "versions",
              type: "octicon"
            }}
            buttonStyle={{
              borderRadius: 24,
              backgroundColor: "#F9BA32",
              marginHorizontal: 0,
              width: Dimensions.get("window").width * 0.85,
              margin: 8,
              padding: 12
            }}
          />

          {/* Sign Up */}
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

          {/* Login */}
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
          {/* <FBLoginButton /> */}
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state: IRootState) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);

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
    // backgroundColor: "yellow"
  },
  // instructions: {
  //   textAlign: "center",
  //   color: "#333333",
  //   marginBottom: 5
  // },
  buttonPanel: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20
    // backgroundColor: "red"
  }
});
