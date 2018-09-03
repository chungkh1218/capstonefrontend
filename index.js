/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// AppRegistry.registerComponent(appName, () => App);

import { Navigation } from "react-native-navigation";

import App from "./App";
import LandingPage from "./components/auth/LandingPage";
import Home from "./screens/HomeTab";
import Valuation from "./screens/ValuationTab";
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

const store = createReduxStore();

Navigation.registerComponent("example.watchlistitem", () => WatchListItem);
Navigation.registerComponent("example.app", () => App, store, Provider);
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
  "example.valuation",
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
      title: "Home"
    },
    {
      label: "Valuation",
      screen: "example.valuation",
      icon: require("./src/icons/IC-Attach-Money-24px.png"),
      title: "Valuation"
    },
    {
      label: "WatchList",
      screen: "example.watchlist",
      icon: require("./src/icons/IC-Remove-Red-Eye-24px.png"),
      title: "WatchList"
    },
    {
      label: "User",
      screen: "example.user",
      icon: require("./src/icons/IC-Verified-User-24px.png"),
      title: "User"
    }
  ],
  tabsStyle: {
    tabBarButtonColor: "#ffff00",
    tabBarSelectedButtonColor: "#ff9900",
    tabBarBackgroundColor: "#551A8B",
    initialTabIndex: 0
  },
  appStyle: {
    orientation: "portrait",
    bottomTabBadgeTextColor: "red",
    bottomTabBadgeBackgroundColor: "green",
    backButtonImage: require("./src/icons/IC-Account-Circle-18px.png")
  },

  passProps: {},
  animationType: "slide-down"
});
