// import * as React from "react";
const WEBVIEW_REF = "WEBVIEW_REF";
import React, { Component } from "react";
import {
  View,
  WebView,
  StyleSheet,
  Text,
  Dimensions,
  ActivityIndicator,
  Platform,
  TouchableOpacity
} from "react-native";
import ProgressBar from "../_global/ProgressBar";

interface WebViewExampleProps {
  uri: string;
}
interface WebViewExampleStates {
  canGoBack: boolean;
}

class WebViewExample extends Component<
  WebViewExampleProps,
  WebViewExampleStates
> {
  constructor(props: WebViewExampleProps) {
    super(props);

    this.state = {
      canGoBack: false
    };
  }

  _ActivityIndicatorLoadingView() {
    return (
      <ActivityIndicator
        color="#009688"
        size="large"
        style={styles.ActivityIndicatorStyle}
      />
    );
  }

  _onNavigationStateChange(navState: any) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }

  _onBack() {
    this.refs[WEBVIEW_REF].goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={styles.WebViewStyle}
          ref={WEBVIEW_REF}
          source={{
            uri: this.props.uri
          }}
          onNavigationStateChange={this._onNavigationStateChange.bind(this)}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          renderLoading={this._ActivityIndicatorLoadingView}
          startInLoadingState={true}
        />
        <View style={styles.topbar}>
          <TouchableOpacity
            disabled={!this.state.canGoBack}
            onPress={this._onBack.bind(this)}
          >
            <Text
              style={
                this.state.canGoBack
                  ? styles.topbarText
                  : styles.topbarTextDisabled
              }
            >
              Go Back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default WebViewExample;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
    // flex: 1,
    // paddingTop: 15 /* Padding to push below the navigation bar */,
    // backgroundColor: "#F5FCFF"
  },
  progressBar: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  WebViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: Platform.OS === "ios" ? 20 : 0
  },
  ActivityIndicatorStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  topbar: {
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  topbarText: {
    color: "black"
  },
  topbarTextDisabled: {
    color: "gray"
  }
});
