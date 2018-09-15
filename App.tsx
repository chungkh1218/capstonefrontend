// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import * as React from "react";
// import { Navigation } from "react-native-navigation";
// import LandingPage from "./components/auth/LandingPage";
// import Home from "./screens/HomeTab";
// import WatchList from "./screens/WatchListTab";
// import User from "./screens/UserTab";

// Navigation.registerComponent("example.landingpage", () => LandingPage);
// Navigation.registerComponent("example.home", () => Home);
// Navigation.registerComponent("example.watchlist", () => WatchList);
// Navigation.registerComponent("example.user", () => User);

// class App {
//   constructor() {
//     // Constructor
//   }

//   static initialApp() {
//     Navigation.startSingleScreenApp({
//       screen: {
//         screen: "landingpage",
//         navigatorStyle: {
//           navBarBackgroundColor: "#9EF8E4"
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
