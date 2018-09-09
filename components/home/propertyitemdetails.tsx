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
import { View, Button, Alert, StyleSheet, ScrollView } from "react-native";
import { NavigationComponentProps } from "react-native-navigation";
import { Navigation } from "react-native-navigation";
import HistoryList from "../tshistory/historylist";
import { IHistory } from "../../models/models";
import Auth from "../auth/Auth";
import { IRootState } from "../../redux/store";
import { connect } from "react-redux";
import { ListHistFromAPIAction } from "../../redux/actions/ListHistoryActions";
import { AddWatchItems } from "../../redux/actions/WatchListAction";
Navigation.registerComponent("example.auth", () => Auth);

interface IHistProps extends NavigationComponentProps {
  histories: IHistory[];
  catname: string;
  loadHistories: (param: string) => void;
  addWatchItems: () => void;
}

class propertyitemdetails extends Component<IHistProps> {
  constructor(props: IHistProps) {
    super(props);
  }

  componentWillMount() {
    const param = this.props.catname;
    this.props.loadHistories(param);
  }

  goBankPressed = () => {
    this.props.navigator.push({
      screen: "example.bankvaluation", // unique ID registered with Navigation.registerScreen
      title: undefined, // navigation bar title of the pushed screen (optional)
      passProps: {}, // Object that will be passed as props to the pushed screen (optional)
      animated: true, // does the push have transition animation or does it happen immediately (optional)
      animationType: "slide-horizontal", // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
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
    });
  };

  addUserFavourite = () => {
    console.log("Add User Favourite" + this.props.catname);
    this.props.addWatchItems();
    Alert.alert(`${this.props.catname} is added as your favourite`);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <HistoryList histories={this.props.histories} />
        </ScrollView>
        <View style={styles.buttonGroup}>
          <Button title="Bank Valuation" onPress={this.goBankPressed} />
          <Button title="Add Favourite" onPress={this.addUserFavourite} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    histories: state.histories.historylist,
    watchList: state.watchList.watchList
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadHistories: (param: string) => {
      dispatch(ListHistFromAPIAction(param));
    },
    addWatchItems: () => {
      dispatch(AddWatchItems());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(propertyitemdetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
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
  buttonGroup: {
    position: "relative",
    flexDirection: "row",
    padding: 10
  }
});
