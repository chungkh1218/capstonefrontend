import * as React from "react";
import { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Image
} from "react-native";
import { Linking } from "react-native";
import { Button } from "react-native-elements";
import WebViewExample from "./WebViewExample";
interface IBankValuationProps {
  navigator: any;
}
interface IBankValuationState {
  data: Array<{
    name: string;
    url: string;
    src: any;
  }>;
}
export default class BankValuation extends Component<
  IBankValuationProps,
  IBankValuationState
> {
  constructor(props: IBankValuationProps) {
    super(props);
    this.state = {
      data: [
        {
          name: "HSBC",
          url:
            "https://www.hsbc.com.hk/personal/mortgages/property-valuation-tool.html",
          src: require("../../src/img/hsbc_logo.png")
        },
        {
          name: "Hang Seng Bank",
          url: "https://www.hangseng.com/en-hk/e-valuation/address-search/#",
          src: require("../../src/img/hsb_logo.png")
        },
        {
          name: "DBS",
          url: "https://evalhk.dtz.com/e-valuation/DBSV2/Home/Index/en",
          src: require("../../src/img/dbs_logo.png")
        },
        {
          name: "Standard Chartered",
          url:
            "https://www.sc.com/hk/borrow/mortgage-planner/property-valuation/",
          src: require("../../src/img/sc_logo.png")
        }
      ]
    };
  }

  _openWebView = (uri: string) => {
    this.props.navigator.push({
      screen: "example.WebViewExample", // unique ID registered with Navigation.registerScreen
      title: undefined, // navigation bar title of the pushed screen (optional)
      subtitle: undefined, // navigation bar subtitle of the pushed screen (optional)
      passProps: {
        uri: uri
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
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                // Linking.openURL(item.url);
                this._openWebView(item.url);
              }}
            >
              <View style={styles.homeList}>
                <Text style={styles.homeListContent}>{item.name}</Text>
                <View style={styles.homeListThumbnail}>
                  <Image
                    style={{
                      alignSelf: "center",
                      width: 150,
                      height: 150
                    }}
                    source={item.src}
                    resizeMode="cover"
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, key) => String(key)}
        />
      </View>

      /* <Button
           title="Mortgage Calculator"
           onPress={() =>
             this.props.navigator.showModal({
               screen: "example.mortgagecalculator", // unique ID registered with Navigation.registerScreen
               title: "Modal", // title of the screen as appears in the nav bar (optional)
               passProps: {}, // simple serializable object that will pass as props to the modal (optional)
               navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
               animationType: "slide-up" // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
             })
           }
           buttonStyle={{
             borderRadius: 18,
             backgroundColor: "#FF9212",
             marginHorizontal: 0,
             width: Dimensions.get("window").width * 0.5,
             alignSelf: "center",
             margin: 8,
             padding: 12
           }}
         /> */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  homeList: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width,
    height: 90,
    backgroundColor: "white",
    marginBottom: 6,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25
  },
  homeListContent: {
    padding: 20,
    fontSize: 18
  },
  homeListThumbnail: {
    width: Dimensions.get("window").width * 0.25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  }
});
