/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from "react";
import { Component } from "react";
// import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

interface IWatchListItemProps {
  re_id: number;
  catfathername: string;
  catname: string;
  my_target_price: string;
  addr: string;
  area: string;
}
export default class WatchListItem extends Component<IWatchListItemProps> {
  constructor(props: IWatchListItemProps) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imagePanel}>
          <Image
            source={{
              uri: "https://reactjs.org/logo-og.png"
            }}
            style={{ width: 256, height: 256 }}
          />
        </View>
        <View style={styles.userPanel}>
          <Text style={styles.instructions}>{this.props.re_id}</Text>
          <Text style={styles.instructions}>{this.props.catname}</Text>
          <Text style={styles.instructions}>{this.props.catfathername}</Text>
          <Text style={styles.instructions}>{this.props.area}</Text>
          <Text style={styles.instructions}>{this.props.addr}</Text>
          <Text style={styles.instructions}>{this.props.my_target_price}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  imagePanel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: 100,
    backgroundColor: "red"
  },
  userPanel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: 100,
    backgroundColor: "beige"
  }
});
