import * as React from "react";
import { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Linking } from "react-native";
import { List, ListItem } from "react-native-elements";
import MortgageInput from "../components/mortgagecalculator";
import Header from "../components/mortgagehead";
export default class BankValuation extends Component {
  render() {
    return (
      <View>
        <List containerStyle={{ marginBottom: 20 }}>
          {/* HSBC */}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.hsbc.com.hk/zh-hk/personal/mortgages/property-valuation-tool.html"
              )
            }
          >
            <ListItem
              roundAvatar // avatar={{ uri: l.avatar_url }}
              key={"HSBC"}
              title={"HSBC Property Valuation Tool"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.hangseng.com/zh-hk/e-valuation/keyword-search/"
              )
            }
          >
            <ListItem
              roundAvatar // avatar={{ uri: l.avatar_url }}
              key={"HSB"}
              title={"Heng Seng Bank"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://evalhk.dtz.com/e-valuation/DBSV2/Home/Index/cn"
              )
            }
          >
            <ListItem
              roundAvatar // avatar={{ uri: l.avatar_url }}
              key={"DBS"}
              title={"DBS"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.sc.com/hk/borrow/mortgage-planner/property-valuation/"
              )
            }
          >
            <ListItem
              roundAvatar // avatar={{ uri: l.avatar_url }}
              key={"SC"}
              title={"Standard Chartered"}
            />
          </TouchableOpacity>
        </List>

        {/* <ScrollView><MortgageInput/></ScrollView> */}
      </View>
    );
  }
}
