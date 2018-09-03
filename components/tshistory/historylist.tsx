import * as React from "react";
import { Component } from "react";
import { FlatList } from "react-native";

import HistoryItem from "./historyitem";
import { IHistory } from "../../models/models";

interface IHistoryListProp {
  histories: IHistory[];
}

export default class HistoryList extends Component<IHistoryListProp> {
private keyExtractor=(item:any,index:number) => item.id
  render() {
    return (
      <FlatList
        data={this.props.histories}
        renderItem={({ item,index }) => (
          <HistoryItem
            re_id={item.re_id}
            addr={item.addr}
            catfathername={item.catfathername}
            transactions={item.transactions}
            keyExtractor={this.keyExtractor}
          />
        )}
        
      />
    );
  }
}
