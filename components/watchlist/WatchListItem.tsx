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
import { StyleSheet, View, Dimensions, Alert } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { RemoveWatchItems } from "../../redux/actions/WatchListAction";
import { IRootState } from "../../redux/store";
import { connect } from "react-redux";
import axios from "axios";
import Config from "react-native-config";

interface IWatchListItemProps {
  re_id: number;
  address: [
    {
      catname: string;
      catfathername: string;
      avWinloss: number;
      avPrice_sq: string;
    }
  ];

  RemoveItems: (item: any) => void;
}
class WatchListItem extends Component<IWatchListItemProps> {
  constructor(props: IWatchListItemProps) {
    super(props);
  }

  removeFavourite = () => {
    this.props.RemoveItems(this.props.re_id);
    console.log("Remove favourite: " + this.props.re_id);
    this.props.navigator.dismissModal({
      animationType: "slide-down"
    });
    Alert.alert("Remove favourite");
  };

  render() {
    return (
      <View style={styles.container}>
        <Card
          image={
            {
              // uri: this.props.imageUrl
            }
          }
        >
          <Text
            style={{
              width: Dimensions.get("window").width * 0.85,
              marginBottom: 180
            }}
          >
            {/* <Text h4 style={{ fontWeight: "bold" }}>
              {this.props.re_id}
              {"\n"}
            </Text> */}
            {this.props.address.map((item, i) => (
              <Text h4 style={{ fontWeight: "bold" }} key={i}>
                {item.catname}
                {"\n"}
              </Text>
            ))}
            <Text style={{ fontSize: 16, color: "dimgray" }}>
              {this.props.address.map((item, i) => (
                <Text key={i}>
                  {item.catfathername}
                  {"\n"}
                  Winloss: {item.avWinloss}%{"\n"}${item.avPrice_sq}
                  /sq.ft
                </Text>
              ))}
            </Text>
          </Text>
          <View
            style={{
              alignItems: "center"
            }}
          >
            <Button
              backgroundColor="#FF7600"
              buttonStyle={{
                width: Dimensions.get("window").width * 0.5,
                borderRadius: 24,
                marginBottom: 6
              }}
              title="Remove Favourite"
              onPress={this.removeFavourite}
            />
            <Button
              backgroundColor="#FF7600"
              buttonStyle={{
                width: Dimensions.get("window").width * 0.5,
                borderRadius: 24,
                marginBottom: 6
              }}
              title="Go Back"
              onPress={() =>
                this.props.navigator.dismissModal({
                  animationType: "slide-down" // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
                })
              }
            />
          </View>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    watchList: state.watches.watchList
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    RemoveItems: (item: any) => {
      dispatch(RemoveWatchItems(item));
    }
  };
};

// Connect to store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchListItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FACC56"
  }
});
