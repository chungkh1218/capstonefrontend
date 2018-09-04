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
import { Platform, StyleSheet, View, Dimensions, Image } from "react-native";
import { Card, Button, Text } from "react-native-elements";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});
const users = [
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  }
];
interface IWatchListItemProps {
  re_id: number;
  catfathername: string;
  catname: string;
  my_target_price: string;
  addr: string;
  area: string;
  imageUrl: string;
}
export default class WatchListItem extends Component<IWatchListItemProps> {
  constructor(props: IWatchListItemProps) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Card
          image={{
            uri: this.props.imageUrl
          }}
        >
          <Text
            style={{
              width: Dimensions.get("window").width * 0.85,
              marginBottom: 180
            }}
          >
            {/* The idea with React Native Elements is more about component */}
            {/* structure than actual design. */}

            <Text h3 style={{ fontWeight: "bold" }}>
              {this.props.my_target_price}
              {"\n"}
            </Text>
            <Text h4>
              {this.props.catname}
              {"\n"}
            </Text>
            <Text style={{ fontSize: 16, color: "dimgray" }}>
              {this.props.addr} {this.props.catfathername}
            </Text>
            <Text style={{ fontSize: 16, color: "dimgray" }}>
              {"\n"}
              {this.props.area}
            </Text>
          </Text>
          <Button
            icon={{ name: "code" }}
            backgroundColor="#03A9F4"
            buttonStyle={{
              borderRadius: 24,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title="Go Back"
            onPress={() =>
              this.props.navigator.dismissModal({
                animationType: "slide-down" // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
              })
            }
          />
        </Card>
        {/* <View style={styles.imagePanel}>
          <Image
            source={{
              uri:
                "https://images.okay.com/Building/Folder150/1208_634105534157968750.JPG"
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
        </View> */}
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
