import * as React from "react";
import { Component } from "react";
import { View, TouchableHighlight, StyleSheet, Dimensions } from "react-native";

import ModalDropdown from "react-native-modal-dropdown";

const ntoptions = [
  "Tuen Mun",
  "Yuen Long",
  "ShaTin",
  "Tai Po",
  "Sai Kung",
  "Clearwater Bay",
  "Ma On Shan",
  "Tseung Kwan O",
  "Fo Tan",
  "Sheung Shui",
  "Tai Wai",
  "Fan Ling",
  "Tin Shui Wai",
  "Tsuen Wan",
  "Kwai Chung",
  "Tsing Yi",
  "Kwai Fong",
  "Tung Chung"
];
const kloptions = [
  "Yau Tong",
  "Nam Tin",
  "Ngau Tau Kok",
  "Kwun Tong",
  "San Po Kong",
  "Kowloon Bay",
  "Wong Tai Sin",
  "Diamond Hill",
  "Kowloon City",
  "Kowloon Tong",
  "Ho Man Tin",
  "Yau Yat Tsuen",
  "Sham Shui Po",
  "Shek Kip Mei",
  "Lai Chi Kok",
  "Cheung Sha Wan",
  "Mei Foo",
  "Lai King",
  "Tai Kok Tsui",
  "Olympic",
  "Kowloon Station",
  "Prince Edward",
  "Mong Kok",
  "Yau Ma Tei",
  "Tsim Sha Tsui",
  "Jordan",
  "Hung Hom",
  "Whampoa"
];
const hkoptions = [
  "Island West",
  "Central",
  "Sheung Wan",
  "Mid - Level",
  "Wan Chai",
  "Causeway Bay",
  "Tin Hau",
  "Tai Hang",
  "North Point",
  "Fortress Hill",
  "Quarry Bay",
  "TaiKoo",
  "Sai WanHo",
  "Shau Kei Wan",
  "Heng Fa Chuen",
  "Chai Wan",
  "Shek O",
  "Aberdeen",
  "Island South"
];
const lantauoptions = [
  "Ma Wan",
  "Discovery Bay",
  "Tung Chung",
  "South Lantau Island",
  "Peng Chau",
  "Tai O",
  "Lamma Island",
  "Cheung Chau",
  "Other Islands"
];

const allLocations = ntoptions
  .concat(kloptions)
  .concat(hkoptions)
  .concat(lantauoptions);

interface IDistrictbuttonProp {
  onModalPressed: (value: string) => void;
}

interface IDistrictButtonState {
  value: string;
  modalVisible: boolean;
}

export default class ModalExample extends Component<
  IDistrictbuttonProp,
  IDistrictButtonState
> {
  constructor(props: IDistrictbuttonProp) {
    super(props);
    this.state = {
      modalVisible: false,
      value: ""
    };
    this.onSelectedItem = this.onSelectedItem.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible = (visible: any) => {
    this.setState({ modalVisible: visible });
  };

  onSelectedItem = (index: number, value: string) => {
    //  const districtvalue = value;
    this.setState({ value: value });
    this.props.onModalPressed(value);
    console.log(value);
  };

  public render() {
    return (
      <View>
        {/* <Text style={styles.narrative}>
          You are currently searching for :{this.state.value}{" "}
        </Text> */}
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={{ backgroundColor: "#FFC08A" }}>
            <ModalDropdown
              style={styles.dropdown}
              options={ntoptions}
              defaultValue="New Territories"
              textStyle={styles.buttontext}
              dropdownTextStyle={styles.buttontext}
              dropdownStyle={styles.listeditem}
              onSelect={(index, value) => this.onSelectedItem(index, value)}
            />
          </TouchableHighlight>
          <TouchableHighlight style={{ backgroundColor: "#FFE0D4" }}>
            <ModalDropdown
              style={styles.dropdown}
              options={kloptions}
              defaultValue="Kowloon"
              textStyle={styles.buttontext}
              dropdownTextStyle={styles.buttontext}
              dropdownStyle={styles.listeditem}
              onSelect={(index, value) => this.onSelectedItem(index, value)}
            />
          </TouchableHighlight>
          <TouchableHighlight style={{ backgroundColor: "#FFC08A" }}>
            <ModalDropdown
              style={styles.dropdown}
              options={hkoptions}
              defaultValue="HK Island"
              textStyle={styles.buttontext}
              dropdownTextStyle={styles.buttontext}
              dropdownStyle={styles.listeditem}
              onSelect={(index, value) => this.onSelectedItem(index, value)}
            />
          </TouchableHighlight>
          <TouchableHighlight style={{ backgroundColor: "#FFE0D4" }}>
            <ModalDropdown
              style={styles.dropdown}
              options={lantauoptions}
              defaultValue="Lantau"
              textStyle={styles.buttontext}
              dropdownTextStyle={styles.buttontext}
              dropdownStyle={styles.listeditem}
              onSelect={(index, value) => this.onSelectedItem(index, value)}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  dropdown: {
    width: Dimensions.get("window").width * 0.25,
    padding: 10
    // backgroundColor: "#FFC08A"
  },
  buttontext: {
    fontSize: 16,
    alignSelf: "center"
  },
  listeditem: {
    width: Dimensions.get("window").width,
    height: 300,
    borderColor: "#FFC08A",
    borderWidth: 2,
    borderRadius: 3,
    alignItems: "center",
    backgroundColor: "#FFE0D4"
  },
  narrative: {
    alignItems: "center"
  }
});
