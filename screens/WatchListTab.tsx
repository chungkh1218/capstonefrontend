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
import { StyleSheet, View, Dimensions } from "react-native";
import { connect } from "react-redux";
import { IRootState } from "../redux/store";
import { ListWatchItems } from "../redux/actions/WatchListAction";
import { IAuthUser, IWatchList } from "../models/models";
import { WatchListList } from "../components/watchlist/WatchListList";
import AuthRequest from "../components/auth/AuthRequest";

interface IWatchListProps {
  user: IAuthUser;
  watchList: IWatchList[];
  ListItems: () => void;
  navigator: any;
}

class WatchList extends React.Component<IWatchListProps> {
  constructor(props: IWatchListProps) {
    super(props);
  }

  public render() {
    console.log(this.props.watchList, String(new Date()));
    if (!this.props.user.isAuthenticated) {
      return (
        <View style={styles.container}>
          <AuthRequest navigator={this.props.navigator} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <WatchListList
            navigator={this.props.navigator}
            watchList={this.props.watchList}
          />
        </View>
      );
    }
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    user: state.auth.user,
    watchList: state.watches.watchList
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ListItems: () => {
      dispatch(ListWatchItems());
    }
  };
};

// Connect to store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  homeList: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: 120,
    padding: 20
  },
  homeListThumbnail: {
    width: 120,
    height: 120,
    position: "absolute",
    left: 0
  },
  homeListContent: {
    position: "absolute",
    right: 20,
    letterSpacing: 10
  },
  homeListHeader: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    letterSpacing: 1
  },
  homeListItem: {
    fontSize: 16,
    textAlign: "right",
    color: "dimgray"
    // backgroundColor: "red"
  }
});
