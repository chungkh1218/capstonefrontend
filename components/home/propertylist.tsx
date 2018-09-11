import * as React from "react";
import { Component } from "react";
import { FlatList } from "react-native";

import PropertyItem from "./propertyitem";
import { IProperty } from "../../models/models";
import { Navigator } from "react-native-navigation";
import Config from "react-native-config";
interface IPropertyListProp {
  properties: IProperty[];
  navigator: Navigator;
  
}

export default class PropertyList extends Component<IPropertyListProp> {
  private photoSearch = (keyWord: string) => {
    console.log("Using " + keyWord + "as keyword to search");
    let value = keyWord;
    let imageLink = "";
    let photoreference = "";
    // const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${keyWord}&key=AIzaSyAWhKz6APT6ExkjDLpvmvKfBNpSlx983yk`;
    // fetch(url)
    //   .then(res => res.json())
    //   .then(resTxt => {
    //     console.log(resTxt.results[0].reference);
    //     photoreference = resTxt.results[0].reference;
    //     imageLink = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoreference}&key=AIzaSyAWhKz6APT6ExkjDLpvmvKfBNpSlx983yk`;
    //     console.log("Image Link: " + imageLink);
    //     value = imageLink;
    //   })
    //   .catch(err => {
    //     console.log("Error: " + err);
    //   });

    return value;
  };
  render() {
   
    // // let items = Object.keys(this.props.properties)[0] === "0" ? this.props.properties : [this.props.properties]
     
    let ltem= this.props.properties.sort(function(a,b) {
      return parseInt(b.avWinloss,10) > parseInt(a.avWinloss) ? 1
      :parseInt(b.avWinloss,10) < parseInt(a.avWinloss,10) ? -1
      : 0;
    })

    return (
      <FlatList
        data={this.props.properties}
        renderItem={({ item }) => (
          <PropertyItem
            navigator={this.props.navigator}
            avWinloss={item.avWinloss}
            catname={item.catname}
            avPrice_sq={item.avPrice_sq}
            imageUrl={this.photoSearch(item.catname)}
          />
        )}
        keyExtractor={item => item.catname}
      />
    );
  }
}
