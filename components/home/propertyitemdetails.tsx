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
  View,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { NavigationComponentProps } from "react-native-navigation";
import { Navigation } from "react-native-navigation";
import HistoryList from "../tshistory/historylist";
import { IHistory, IWatchList } from "../../models/models";
import Auth from "../auth/Auth";
import { IRootState } from "../../redux/store";
import { connect } from "react-redux";
import {
  ListHistFromAPIAction,
  GetImgFromAPIAction
} from "../../redux/actions/ListHistoryActions";
import { AddWatchItems } from "../../redux/actions/WatchListAction";
Navigation.registerComponent("example.auth", () => Auth);

interface IHistProps extends NavigationComponentProps {
  isLoading:boolean
  histories: IHistory[];
  // watchList: IWatchList[];
  url: string;
  catname: string;
  loadHistories: (param: string) => void;
  addItems: (reId: number) => void;
}

interface IHistState {
  isLoading:boolean
}

class propertyitemdetails extends Component<IHistProps, IHistState> {
  constructor(props: IHistProps) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    const param = this.props.catname;
    this.props.loadHistories(param);
  }

  // componenetDidUpdate() {
  //   if (this.props.watchList !== this.props.watchList) {
  //     console.log("watchList will be update");
  //     // handleListUpdate(this.props.watchList);
  //   }
  // }

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
    console.log("Add User Favourite: " + this.props.catname);
    // console.log("Add Re ID: " + this.props.histories[0].re_id);
    console.log("Add Re ID: " + this.props.histories[0].re_id);
    this.props.addItems(this.props.histories[0].re_id);
    Alert.alert(`${this.props.catname} is added as your favourite`);
  };

  componentWillReceiveProps(props:any) {
    this.setState({ isLoading: props.isLoading });
  }
  render() {
    const spinner = this.state.isLoading ? (
      <ActivityIndicator size="large" />
    ) : null;
    const uri = this.props.url;
    console.log(this.props.histories);
    console.log(uri);
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Image
              style={{ width: Dimensions.get("window").width, height: 180 }}
              source={{ uri: uri }}
            />
          </View>
          <View>
            {this.state.isLoading ? spinner  : null}
            <HistoryList histories={this.props.histories} />
          </View>
        </ScrollView>
        <View style={styles.buttonGroup}>
          <Button
            color="white"
            title="Bank Valuation"
            onPress={this.goBankPressed}
          />
          <Button
            color="white"
            title="Add Favourite"
            onPress={this.addUserFavourite}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    histories: state.histories.historylist,
    watchList: state.watches.watchList,
    url: state.url.imgurl
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadHistories: (param: string) => {
      dispatch(ListHistFromAPIAction(param));
    },
    addItems: (reId: number) => {
      dispatch(AddWatchItems(reId));
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
    width: Dimensions.get("window").width,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white"
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
    width: Dimensions.get("window").width,
    position: "relative",
    justifyContent: "space-evenly",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#FF9212"
  }
});
