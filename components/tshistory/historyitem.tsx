import * as React from "react";
import { Component } from "react";
import { Text,
        View} from 'react-native';
import {IHistory} from '../../models/models'

export default class HistoryItem extends Component <IHistory>{
    render(){
        return <View>
            <Text>
              {this.props.addr}
              {"\n"}
              {this.props.transactions[0].date}
              {"\n"}
              {this.props.transactions[0].price_value}
              {"\n"}
              {this.props.transactions[0].winloss}
            </Text>
          </View>;
    }
} 