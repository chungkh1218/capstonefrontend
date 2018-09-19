import * as React from "react";
import { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
  ScrollView
} from "react-native";
import { Linking } from "react-native";
import MortgageInput from "../components/mortgage/mortgagecalculator";
import Header from "../components/mortgage/mortgagehead";
import { Button } from "react-native-elements";
interface IBankValuationProps {}
interface IBankValuationState {
  data: Array<{
    name: string;
    url: string;
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
          url: "../src/img/hsbc_logo.png"
        },
        {
          name: "Hang Seng Bank",
          url: "../src/img/hsb_logo.png"
        },
        {
          name: "DBS",
          url: "../src/img/dbs_logo.png"
        },
        {
          name: "Standard Chartered",
          url: "../src/img/sc_logo.png"
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
                <Text style={{ padding: 20, fontSize: 18 }}>{item.name}</Text>
                {/* <Image
                  style={{ width: 80, height: 80, backgroundColor: "red" }}
                  source={{ uri: item.url.toString() }}
                  source={require(item.url.toString())}
                /> */}
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
  homeListThumbnail: {
    flex: 1
  },
  homeListContent: {
    flex: 2,
    justifyContent: "space-around",
    textAlign: "right",
    color: "white",
    padding: 10
  }
});
