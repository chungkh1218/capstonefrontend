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

interface IWatchListItemProps {
  re_id: number;
  catfathername: string;
  catname: string;
  my_target_price: string;
  addr: string;
  area: string;
  imageUrl: string;

  RemoveItems: (item: any) => void;
}
class WatchListItem extends Component<IWatchListItemProps> {
  constructor(props: IWatchListItemProps) {
    super(props);
  }

  removeFavourite = () => {
    console.log("Remove favourite");
    // Update State of WatchList

    this.props.navigator.dismissModal({
      animationType: "slide-down"
    });
    Alert.alert("Remove favourite");
  };

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
            <Text h4 style={{ fontWeight: "bold" }}>
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
            backgroundColor="red"
            buttonStyle={{
              borderRadius: 24,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title="Remove Favourite"
            onPress={this.removeFavourite}
          />
          <Button
            icon={{ name: "code" }}
            backgroundColor="#304A8B"
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
      </View>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    watchList: state.watchList.watchList
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
    backgroundColor: "#97A9D4"
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
    backgroundColor: "#304A8B"
  }
});
