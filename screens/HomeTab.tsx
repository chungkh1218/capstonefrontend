/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, { Component } from "react";
import * as React from "react";
import { Component } from "react";
import { Text,View, ScrollView, StyleSheet } from "react-native";

import { NavigationComponentProps } from "react-native-navigation";
import ModalExample from "../components/home/districtbotton";
import SearchBar from "../components/home/searchbar";
import PropertyList from "../components/home/propertylist";
// import styles from "../src/styles/style";
import { IUser } from "../models/models";
import { IProperty } from "../models/models";
import { IRootState } from "../redux/store";
import { SearchPropFromAPIAction } from "../redux/actions/SearchActions";
// import { ModalSearchPropFromAPIAction } from "../redux/actions/SearchActions";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";
import SplashScreen from "react-native-splash-screen";
interface IHomeProps extends NavigationComponentProps {
  properties: IProperty[];
  // loadProperties: (search?: string) => void;
  isAuthenticated: boolean;
  // catname: string;
  loadProperties: (search?: string, condition?: string) => void;

  // onButtonLoadProperties:(value?:string)=>void
}
interface IHomeStates {
  language: string;
}



class Home extends Component<IHomeProps> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      language: "Java"
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }
  componentWillMount() {
    if (!this.props.isAuthenticated) {
      this.props.navigator.showModal({
        screen: "example.landingpage", // unique ID registered with Navigation.registerScreen
        navigatorStyle: {
          screenBackgroundColor: "#304A8B"
        }
      });
    }
    this.props.loadProperties("Central", "district");
    // this.props.onButtonLoadProperties();
  }



  render() {
    if (this.props.isAuthenticated) {
      this.props.navigator.dismissModal({
        screen: "example.landingpage" // unique ID registered with Navigation.registerScreen
      });
    }
    return (
      <View style={styles.container}>
        <View style={styles.searchbar}>
          <SearchBar onSearchChange={this.onSearchBarChanged} />
        </View>
         {/* <Text>You are currently searching for : </Text> */}
        <ModalExample
          onModalPressed={value => {
            this.props.loadProperties(value, "district");
          }}
        />
        <ScrollView>
          <PropertyList
            navigator={this.props.navigator}
            properties={this.props.properties}
          />
        </ScrollView>

      </View>
    );
  }


  private onSearchBarChanged = (search: string, condition: string) => {
    this.props.loadProperties(search, condition);
    
  };
}
const mapStateToProps = (state: IRootState) => {
  return {
    properties: state.properties.propertylist,
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadProperties: (search?: string, condition?: string) => {
      dispatch(SearchPropFromAPIAction(search, condition));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97A9D4"
  }
});
