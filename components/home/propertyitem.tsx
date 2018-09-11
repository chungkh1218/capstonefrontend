import * as React from "react";
import { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import { IProperty } from "../../models/models";
import { Navigator } from "react-native-navigation";

interface IPropertyProps extends IProperty {
  navigator: Navigator;
  avWinloss: number;
  catname: string;
  avPrice_sq: number;
  imageUrl: string;
}

export default class PropertyItem extends React.Component<IPropertyProps> {
  private itemsOnPressed = () => {
    console.log(this.props);
    this.props.navigator.push({
      screen: "example.propertyitemdetails", // unique ID registered with Navigation.registerScreen
      title: this.props.catname, // navigation bar title of the pushed screen (optional)
      passProps: { catname: this.props.catname }, // Object that will be passed as props to the pushed screen (optional)
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

  render() {
    console.log(this.props.catname);
    return (
      <TouchableOpacity onPress={this.itemsOnPressed.bind(this)}>
        <View style={styles.homeList}>
          <View style={styles.homeListThumbnail}>
            <Image
              style={{
                flex: 1,
                alignSelf: "stretch",
                width: undefined,
                height: undefined
              }}
              source={{
                uri:
                  "https://www.28hse.com/en/utf8/developer/d298/selfcapture/7zRjsPPexx_large.jpg"
              }}
            />
          </View>
          <View style={styles.homeListContent}>
            {/* <Text>{this.props.imageUrl}</Text> */}
            <Text style={{ fontWeight: "bold" }}>{this.props.catname}</Text>
            <Text>
              ${this.props.avPrice_sq}
              /sq.ft
            </Text>
            <Text>{this.props.imageUrl}</Text>
            <Text
              style={{
                fontSize: 36,
                fontWeight: "bold",
                alignSelf: "flex-end"
              }}
            >
              {this.props.avWinloss}%{/* address: {this.props.addr} */}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  homeList: {
    flex: 1,
    flexDirection: "row",
    width: Dimensions.get("window").width,
    height: 120,
    backgroundColor: "#C8D1E7",
    // padding: 4,
    marginBottom: 4
  },
  homeListThumbnail: {
    flex: 1
    // backgroundColor: "blue"
  },
  homeListContent: {
    flex: 2,
    justifyContent: "space-around",
    fontSize: 16,
    textAlign: "right",
    color: "dimgray",
    padding: 10
    // backgroundColor: "red"
  }
});
