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
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
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

        <Button
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
        />
      </View>
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
    backgroundColor: "red",
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
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  }
});
