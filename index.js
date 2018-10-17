/** @format */

// import {AppRegistry} from 'react-native';
// import "./App";
// import {name as appName} from './app.json';
// AppRegistry.registerComponent(appName, () => App);

import { Navigation } from "react-native-navigation";

import LandingPage from "./components/auth/LandingPage";
import Home from "./screens/HomeTab";
import Valuation from "./components/home/propertyitemdetails";

import User from "./screens/UserTab";
import LoginPage from "./components/auth/LoginPage";
import SignUpPage from "./components/auth/SignUpPage";

import WatchList from "./screens/WatchListTab";
// import WatchListItem from "./components/watchlist/WatchListItem";
import WatchListItemDetail from "./components/watchlist/WatchListItemDetail";

import { Provider } from "react-redux";
import PropertyList from "./components/home/propertylist";
import SearchBar from "./components/home/searchbar";
import { createReduxStore } from "./redux/store";
import HistoryList from "./components/tshistory/historylist";
import BankValution from "./components/valuation/bankvaluation";
import MortgageCalculator from "./components/mortgage/mortgagecalculator";
import WebViewExample from "./components/valuation/WebViewExample";

const store = createReduxStore();
const navigatorStyle = {
  navBarTranslucent: true,
  // drawUnderNavBar: true,
  navBarTextColor: "white",
  navBarButtonColor: "white",
  statusBarTextColorScheme: "light",
  drawUnderTabBar: true
};
// Navigation.registerComponent("example.app", () => App, store, Provider);
// Navigation.registerComponent(
//   "example.watchlistitem",
//   () => WatchListItem,
//   store,
//   Provider
// );
Navigation.registerComponent(
  "example.mortgagecalculator",
  () => MortgageCalculator,
  store,
  Provider
);
Navigation.registerComponent(
  "example.WebViewExample",
  () => WebViewExample,
  store,
  Provider
);
Navigation.registerComponent("example.bankvaluation", () => BankValution);
Navigation.registerComponent(
  "example.landingpage",
  () => LandingPage,
  store,
  Provider
);
Navigation.registerComponent("example.home", () => Home, store, Provider);
Navigation.registerComponent(
  "example.watchlist",
  () => WatchList,
  store,
  Provider
);
Navigation.registerComponent(
  "example.watchlistitemdetail",
  () => WatchListItemDetail,
  store,
  Provider
);
Navigation.registerComponent(
  "example.propertyitemdetails",
  () => Valuation,
  store,
  Provider
);
Navigation.registerComponent("example.user", () => User, store, Provider);
Navigation.registerComponent(
  "example.loginPage",
  () => LoginPage,
  store,
  Provider
);
Navigation.registerComponent(
  "example.signUpPage",
  () => SignUpPage,
  store,
  Provider
);
Navigation.registerComponent(
  "example.propertylist",
  () => PropertyList,
  store,
  Provider
);
Navigation.registerComponent(
  "example.searchbar",
  () => SearchBar,
  store,
  Provider
);
Navigation.registerComponent(
  "example.store",
  () => createReduxStore,
  store,
  Provider
);

Navigation.startTabBasedApp({
  tabs: [
    {
      label: "Home",
      screen: "example.home",
      icon: require("./src/icons/IC-Home-24px.png"),
      title: "Home",
      navigatorStyle,
      navigatorButtons: {
        // rightButtons: [
        //   {
        //     id: "search",
        //     title: "Search"
        //   }
        // ]
      }
    },
    {
      label: "WatchList",
      screen: "example.watchlist",
      icon: require("./src/icons/IC-Remove-Red-Eye-24px.png"),
      title: "Watch List",
      navigatorStyle
    },
    {
      label: "User",
      screen: "example.user",
      icon: require("./src/icons/IC-Verified-User-24px.png"),
      title: "User",
      navigatorStyle
    }
  ],
  tabsStyle: {
    tabBarButtonColor: "#FFAE12",
    tabBarSelectedButtonColor: "#FF9212",
    tabBarBackgroundColor: "#FACC56",
    initialTabIndex: 0
  },
  appStyle: {
    orientation: "portrait",
    bottomTabBadgeTextColor: "red",
    bottomTabBadgeBackgroundColor: "green"
  },

  passProps: {},
  animationType: "slide-down"
});
