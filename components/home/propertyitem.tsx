import * as React from "react";
import { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button, Image } from "react-native";
import { IProperty } from "../../models/models";
import homeStyles from "../../src/styles/style";

export default class PropertyItem extends Component<IProperty> {
  render() {
    console.log(this.props.addr);
    return (
      <View style={homeStyles.homeListItem}>
        {/* <Image
                    style={{ width: 100, height: 100 }}
                    // source={{
                    //     uri: item.picture.thumbnail
                    // }} */}

        <Text style={homeStyles.item}>
          {this.props.catname}
          {/* address: {this.props.addr} */}
        </Text>
      </View>
    );
  }
}
