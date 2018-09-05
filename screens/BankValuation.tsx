import * as React from "react";
import { Component } from "react";
import {Text,View,Button} from "react-native"
import { Linking } from "react-native";

export default class BankValuation extends Component{
    render(){
        return <View>
            <View>
              <Text style={{ color: "blue" }} onPress={() => Linking.openURL("https://www.hsbc.com.hk/zh-hk/personal/mortgages/property-valuation-tool.html")}>
                HSBC Property Valuation Tool
              </Text>
            </View>
            <View>
              <Text style={{ color: "blue" }} onPress={() => Linking.openURL("https://www.hangseng.com/zh-hk/e-valuation/keyword-search/")}>
                Heng Seng Bank
              </Text>
            </View>
            <View>
              <Text style={{ color: "blue" }} onPress={() => Linking.openURL("https://evalhk.dtz.com/e-valuation/DBSV2/Home/Index/cn")}>
                DBS
              </Text>
            </View>
            <View>
              <Text style={{ color: "blue" }} onPress={() => Linking.openURL("https://www.sc.com/hk/borrow/mortgage-planner/property-valuation/")}>
                Standard Chartered
              </Text>
            </View>
          </View>;
    }
}