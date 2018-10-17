import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { IProperty } from "../../models/models";
import { Navigator } from "react-native-navigation";

interface IPropertyProps extends IProperty {
  navigator: Navigator;
  avWinloss: number;
  catname: string;
  avPrice_sq: number;
  imageUrl: string;
  re_id: number;
}

export default class PropertyItem extends React.Component<IPropertyProps> {
  private itemsOnPressed = () => {
    this.props.navigator.push({
      screen: "example.propertyitemdetails",
      title: this.props.catname,
      passProps: { catname: this.props.catname },
      animated: true,
      animationType: "slide-horizontal",
      backButtonHidden: false,
      navigatorButtons: {
        rightButtons: [
          {
            id: "addTo",
            title: "Add To"
          }
        ],
        animated: true
      },
      previewCommit: true
    });
  };

  render() {
    return (
      <TouchableOpacity onPress={this.itemsOnPressed.bind(this)}>
        <View style={styles.homeListItem}>
          <View
          // style={
          //   this.props.avWinloss > 100
          //     ? { flex: 1, backgroundColor: "red" }
          //     : { flex: 1, backgroundColor: "#FF9212" }
          // }
          />
          <View style={styles.homeListContent}>
            <Text style={{ color: "black", fontWeight: "bold" }}>
              {this.props.catname}
            </Text>
            <Text style={{ color: "gray" }}>
              ${this.props.avPrice_sq}
              /sq.ft
            </Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                alignSelf: "flex-end"
              }}
            >
              {this.props.avWinloss}%{/* address: {this.props.addr} */}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  homeListItem: {
    flex: 1,
    flexDirection: "row",
    width: Dimensions.get("window").width - 20,
    height: 90,
    backgroundColor: "white",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    borderRadius: 12
  },
  homeListContent: {
    flex: 23,
    justifyContent: "space-around",
    textAlign: "right",
    color: "white",
    padding: 10
  }
});
