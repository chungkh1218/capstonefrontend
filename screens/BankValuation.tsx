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
import MortgageInput from "../components/mortgagecalculator";
import Header from "../components/mortgagehead";
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
          url:
            "https://www.hsbc.com.hk/zh-hk/personal/mortgages/property-valuation-tool.html"
        },
        {
          name: "Hang Seng Bank",
          url:
            "https://www.hsbc.com.hk/zh-hk/personal/mortgages/property-valuation-tool.html"
        },
        {
          name: "DBS",
          url:
            "https://www.hsbc.com.hk/zh-hk/personal/mortgages/property-valuation-tool.html"
        },
        {
          name: "Standard Chartered",
          url:
            "https://www.hsbc.com.hk/zh-hk/personal/mortgages/property-valuation-tool.html"
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

                <Image
                  style={{ width: 20, height: 20 }}
                  source={{
                    uri:
                      "http://logok.org/wp-content/uploads/2014/06/HSBC_logo-880x660.png"
                  }}
                />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, key) => String(key)}
        />
        {/* <ScrollView><MortgageInput/></ScrollView> */}
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
