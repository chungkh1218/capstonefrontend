import * as React from "react";
import { Component } from "react";
import { FlatList } from "react-native";

import PropertyItem from "./propertyitem";
import { IProperty } from "../../models/models";
import { Navigator } from "react-native-navigation";
interface IPropertyListProp {
  properties: IProperty[];
  navigator: Navigator;
  
}

export default class PropertyList extends Component<IPropertyListProp> {
  render() {
    console.log(this.props.properties);
    return (
      <FlatList
        data={this.props.properties}
        renderItem={({ item }) => (
          <PropertyItem
            navigator={this.props.navigator}
            avWinloss={item.avWinloss}
            catname={item.catname}
            avPrice_sq={item.avPrice_sq}
          />
        )}
        keyExtractor={(item, index) => index}
      />
    );
  }
}
