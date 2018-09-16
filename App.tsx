// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import * as React from "react";
// import { AsyncStorage } from "react-native";
// import { Navigation } from "react-native-navigation";
// // import { navigatorStyle } from "./screens/styles/common";

// import LandingPage from "./components/auth/LandingPage";
// import Home from "./screens/HomeTab";
// import WatchList from "./screens/WatchListTab";
// import User from "./screens/UserTab";

// import { createReduxStore } from "./redux/store";
// // import { loginSuccess } from "./redux/actions/AuthAction";
// import { Provider } from "react-redux";

// const store = createReduxStore();

// Navigation.registerComponent(
//   "example.landingpage",
//   () => LandingPage,
//   store,
//   Provider
// );
// Navigation.registerComponent("example.home", () => Home, store, Provider);
// Navigation.registerComponent(
//   "example.watchlist",
//   () => WatchList,
//   store,
//   Provider
// );
// Navigation.registerComponent("example.user", () => User, store, Provider);

// class App {
//   constructor() {
//     // Constructor
//     // AsyncStorage.getItem("token").then((token: string | null) => {
//     //   if (token) {
//     // [CODE REVIEW] check profile, if ok, store profile to redux. if not ok (401), pop to login page
//     // store.dispatch(getUserProfile(token));
//     // refresh token ?
//     // store.dispatch(loginSuccess(token));
//     // App.loginApp(token); // redirect to home page
//     //   } else {
//     App.initialApp(); // if no prev token -> need to login
//     //   }
//     // });
//   }

//   static initialApp() {
//     Navigation.startSingleScreenApp({
//       screen: {
//         screen: "landingpage",
//         navigatorStyle: {
//           //   navBarBackgroundColor: "#9EF8E4"
//         },
//         appStyle: {
//           hideBackButtonTitle: true
//         }
//       }
//     });
//   }

//   static loginApp(token: string) {
//     Navigation.startTabBasedApp({
//       tabs: [
//         {
//           label: "Home",
//           screen: "example.home",
//           icon: require("./src/icons/IC-Home-24px.png"),
//           title: "Home",
//           titleImage: require("./src/icons/IC-Home-24px.png"),
//           navigatorStyle: {
//             screenBackgroundColor: "#97A9D4"
//           }
//         },
//         {
//           label: "WatchList",
//           screen: "example.watchlist",
//           icon: require("./src/icons/IC-Remove-Red-Eye-24px.png"),
//           title: "WatchList",
//           navigatorStyle: {
//             screenBackgroundColor: "#97A9D4"
//           }
//         },
//         {
//           label: "User",
//           screen: "example.user",
//           icon: require("./src/icons/IC-Verified-User-24px.png"),
//           title: "User",
//           navigatorStyle: {
//             screenBackgroundColor: "#97A9D4"
//           }
//         }
//       ],
//       tabsStyle: {
//         tabBarButtonColor: "#7AAA57",
//         tabBarSelectedButtonColor: "#4B7A29",
//         tabBarBackgroundColor: "#B6DA9C",
//         initialTabIndex: 0
//       },
//       appStyle: {
//         orientation: "portrait",
//         bottomTabBadgeTextColor: "red",
//         bottomTabBadgeBackgroundColor: "green"
//       },

//       passProps: {},
//       animationType: "slide-down"
//     });
//   }
// }

// export default App;
// new App();
