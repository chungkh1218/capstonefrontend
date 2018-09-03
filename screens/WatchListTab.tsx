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
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import { IRootState } from "../redux/store";

interface IWatchListProps {
  isAuthenticated: boolean;
}

interface IWatchListStates {
  data: Array<{
    re_id: number;
    catfathername: string;
    catname: string;
    my_target_price: string;
    addr: string;
    area: string;
  }>;
}

class WatchList extends React.Component<IWatchListProps, IWatchListStates> {
  constructor(props: IWatchListProps) {
    super(props);

    this.state = {
      data: [
        {
          re_id: 1,
          catfathername: "Kwun Tong",
          catname: "Wah Fat Building ",
          my_target_price: "$5,000,000",
          addr: "8/F Room 11",
          area: "690ft"
        },
        {
          re_id: 2,
          catfathername: "Ho Man Tin",
          catname: "Mantin Heights",
          my_target_price: "$3,600,000",
          addr: "TOWER 7 7/F Room G",
          area: "690ft"
        },
        {
          re_id: 3,
          catfathername: "Tai Kok Tsui",
          catname: "Metro Harbour View",
          my_target_price: "$4,300,000",
          addr: "BLOCK 6 3#/F Room F",
          area: "690ft"
        }
      ]
    };
  }

  public render() {
    if (!this.props.isAuthenticated) {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigator.push({
                screen: "example.auth", // unique ID registered with Navigation.registerScreen
                title: undefined, // navigation bar title of the pushed screen (optional)
                subtitle: undefined, // navigation bar subtitle of the pushed screen (optional)
                titleImage: require("../src/icons/IC-Remove-Red-Eye-24px.png"), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
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
          >
            <Text style={styles.welcome}>Please Sign Up / Login</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigator.push({
                    screen: "example.watchlistitem", // unique ID registered with Navigation.registerScreen
                    title: undefined, // navigation bar title of the pushed screen (optional)
                    subtitle: undefined, // navigation bar subtitle of the pushed screen (optional)
                    passProps: {
                      re_id: item.re_id,
                      catfathername: item.catfathername,
                      catname: item.catname,
                      my_target_price: item.my_target_price,
                      addr: item.addr,
                      area: item.area
                    }, // Object that will be passed as props to the pushed screen (optional)
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
              >
                <View style={styles.homeList}>
                  <Image
                    source={{
                      uri: "https://reactjs.org/logo-og.png"
                    }}
                    style={styles.homeListThumbnail}
                  />
                  <View style={styles.homeListContent}>
                    <Text style={styles.homeListHeader}>{item.catname}</Text>
                    <Text style={styles.homeListItem}>
                      {item.catfathername}
                    </Text>
                    <Text style={styles.homeListItem}>
                      {item.my_target_price}
                    </Text>
                    <Text style={styles.homeListItem}>{item.addr}</Text>
                    <Text style={styles.homeListItem}>{item.area}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.catname}
          />
        </View>
      );
    }
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

// Connect to store
export default connect(mapStateToProps)(WatchList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
    backgroundColor: "aliceblue",
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
    right: 20
  },
  homeListHeader: {
    fontSize: 20,
    fontWeight: "bold"
    // backgroundColor: "green"
  },
  homeListItem: {
    fontSize: 16,
    textAlign: "right"
    // backgroundColor: "red"
  }
});
