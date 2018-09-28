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
import Auth from "./components/auth/Auth";
import LoginPage from "./components/auth/LoginPage";
import SignUpPage from "./components/auth/SignUpPage";
import WatchList from "./screens/WatchListTab";
import WatchListItem from "./components/watchlist/WatchListItem";
import { Provider } from "react-redux";
import PropertyList from "./components/home/propertylist";
import SearchBar from "./components/home/searchbar";
import { createReduxStore } from "./redux/store";
import HistoryList from "./components/tshistory/historylist";
import BankValution from "./components/valuation/bankvaluation";
import MortgageCalculator from "./components/mortgage/mortgagecalculator";

const store = createReduxStore();

Navigation.registerComponent(
  "example.mortgagecalculator",
  () => MortgageCalculator,
  store,
  Provider
);

Navigation.registerComponent(
  "example.watchlistitem",
  () => WatchListItem,
  store,
  Provider
);
Navigation.registerComponent("example.bankvaluation", () => BankValution);
// Navigation.registerComponent("example.app", () => App, store, Provider);
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
  "example.propertyitemdetails",
  () => Valuation,
  store,
  Provider
);
Navigation.registerComponent("example.user", () => User, store, Provider);
Navigation.registerComponent("example.auth", () => Auth);
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
      titleImage: require("./src/icons/IC-Home-24px.png"),
      navigatorStyle: {
        screenBackgroundColor: "#97A9D4"
      }
    },
    // {
    //   label: "Valuation",
    //   screen: "example.valuation",
    //   icon: require("./src/icons/IC-Attach-Money-24px.png"),
    //   title: "Valuation",
    //   navigatorStyle: {
    //     screenBackgroundColor: "#97A9D4"
    //   }
    // },
    {
      label: "WatchList",
      screen: "example.watchlist",
      icon: require("./src/icons/IC-Remove-Red-Eye-24px.png"),
      title: "WatchList",
      navigatorStyle: {
        screenBackgroundColor: "#97A9D4"
      }
    },
    {
      label: "User",
      screen: "example.user",
      icon: require("./src/icons/IC-Verified-User-24px.png"),
      title: "User",
      navigatorStyle: {
        screenBackgroundColor: "#97A9D4"
      }
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
