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
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Image,
  AlertIOS,
  TextInput,
  Button,
  ActivityIndicator,
  ScrollView
} from "react-native";

import { NavigationComponentProps } from "react-native-navigation";
import ModalExample from "../components/home/districtbotton";
import SearchBar from "../components/home/searchbar";
import PropertyList from "../components/home/propertylist";
import styles from "../src/styles/style";
import { IUser } from "../models/models";
import { IProperty } from "../models/models";
import { IRootState } from "../redux/store";
import { SearchPropFromAPIAction } from "../redux/actions/SearchActions";
import {ModalSearchPropFromAPIAction} from '../redux/actions/SearchActions'
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";
import SplashScreen from "react-native-splash-screen";
interface IHomeProps extends NavigationComponentProps {
  properties: IProperty[];
  catname:string;
  loadProperties: (search?: string, condition?: string) => void;
  // onButtonLoadProperties:(value?:string)=>void
}

/*  interface IHomeStates {
  loading: boolean;
  error: any;
  refreshing: boolean;
  page: number;
  seed: number;
  data: Array<IUser>;
  

}
*/
// type Props = {};
class Home extends Component<IHomeProps> {
  constructor(props: IHomeProps) {
    super(props);
  }
  /*
    this.state = {
      loading: false,
      error: null,
      refreshing: false,
      page: 1,
      seed: 1,
      data: [],
  
   
    };
  }
*/
  componentDidMount() {
    SplashScreen.hide();
  }
  componentWillMount() {
    this.props.navigator.showModal({
      screen: "example.landingpage" // unique ID registered with Navigation.registerScreen
    });
    this.props.loadProperties('Central', 'district');
    // this.props.onButtonLoadProperties();
  }

  itemsOnPressed = (catname: string) => {
    this.props.navigator.push({
      screen: "example.valuation", // unique ID registered with Navigation.registerScreen
      title: undefined, // navigation bar title of the pushed screen (optional)
      passProps: { catname: catname }, // Object that will be passed as props to the pushed screen (optional)
      animated: true, // does the push have transition animation or does it happen immediately (optional)
      animationType: "slide-horizontal", // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
      backButtonTitle: undefined, // override the back button title (optional)
      backButtonHidden: false, // hide the back button altogether (optional)
      navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
      navigatorButtons: {}, // override the nav buttons for the pushed screen (optional)
      // enable peek and pop - commited screen will have `isPreview` prop set as true.
      previewView: undefined, // react ref or node id (optional)
      previewHeight: undefined, // set preview height, defaults to full height (optional)
      previewCommit: true, // commit to push preview controller to the navigation stack (optional)
      previewActions: [
        {
          // action presses can be detected with the `PreviewActionPress` event on the commited screen.
          id: "", // action id (required)
          title: "", // action title (required)
          style: undefined, // 'selected' or 'destructive' (optional)
          actions: [] // list of sub-actions
        }
      ]
    });
  };
  /*
  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=10`;
    console.log("Result: " + JSON.stringify(url));

    this.setState({ loading: true });

    setTimeout(() => {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            data:
              page === 1 ? res.results : [...this.state.data, ...res.results],
            error: res.error || null,
            loading: false,
            refreshing: false
          });
        })
        .catch(error => {
          this.setState({ error, loading: false });
        });
    }, 1500);
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE"
        }}
      />
    );
  };
*/

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchbar}>
          <SearchBar onSearchChange={this.onSearchBarChanged} />
        </View>
        <ModalExample
          onModalPressed={value => {
            this.props.loadProperties(value, 'district');
          }}
        />
        <ScrollView>
          <PropertyList
            navigator={this.props.navigator}
            properties={this.props.properties}
          />
        </ScrollView>
        {/*     <View style={styles.homePanel} />
         
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigator.switchToTab({
                  tabIndex: 1 // Here is the tab index
                })
              }
            >
              <View style={styles.homeListItem}>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{
                    uri: item.picture.thumbnail
                  }}
                />
                <Text style={styles.item}>
                  Name: {`${item.name.first} ${item.name.last}`}
                  {"\n"}
                  Email: {item.email}
                </Text>
              </View>
            </TouchableOpacity>
          )} 
          
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
          
        />*/}
      </View>
    );
  }

  // private onModalLoadProperties =(value:string)=>{
  // this.props.onButtonLoadProperties(value);
  // ;
  // }
  private onSearchBarChanged = (search: string, condition: string) => {
    this.props.loadProperties(search, condition);
  };
}
const mapStateToProps = (state: IRootState) => {
  return {
    properties: state.properties.propertylist
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadProperties: (search?: string, condition?: string) => {
      dispatch(SearchPropFromAPIAction(search, condition))
    }
  };
};




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

