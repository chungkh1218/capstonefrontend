import * as React from "react";
import { Component } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import { IHistory } from "../../models/models";
// import homeStyles from "../../src/styles/style";

export default class HistoryItem extends Component<IHistory> {
  render() {
    // console.log(this.props.transactions[0]);
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {this.props.addr}
          </Text>
          {/* <View key={this.props.transactions[0].ht_id}>
            <Text style={{ lineHeight: 26 }}>
              Tran.price:$
              {this.props.transactions[0].price_value}
              {"\n"}
              Tran.date:
              {this.props.transactions[0].date}
              {"\n"}
              WINLOSS: {this.props.transactions[0].winloss}%
            </Text>
          </View> */}

          {this.props.transactions.map((item: any, index) => (
            <View
              style={{
                paddingTop: 8
              }}
              key={index.toString()}
            >
              <Text>
                WINLOSS: {item.winloss}%{"\n"}
                Tran.price:$
                {item.price_value}
                {"\n"}
                Tran.date:
                {item.date}
                {"\n"}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white"
  },
  item: {
    backgroundColor: "white",
    fontSize: 16,
    textAlign: "center",
    padding: 20,
    margin: 4,
    width: Dimensions.get("window").width * 0.95,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25
  }
});
