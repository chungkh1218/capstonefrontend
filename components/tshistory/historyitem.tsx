import * as React from "react";
import { Component } from "react";
import { Text, View } from "react-native";
import { IHistory } from "../../models/models";
import homeStyles from "../../src/styles/style";

export default class HistoryItem extends Component<IHistory> {
  render() {
    return (
      <View style={homeStyles.item}>
        <Text>{this.props.addr}</Text>
        {this.props.transactions.map((item: any, index) => (
          <View key={index.toString()}>
            <Text>
              WINLOSS: {item.winloss}%{"\n"}
              Tran.price:$
              {item.price_value}
              {"\n"}
              Tran.date:
              {item.date}
            </Text>
          </View>
        ))}
      </View>
    );
  }
}
