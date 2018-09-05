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
  Platform,
  StyleSheet,
  Text,
  View,
  AlertIOS,
  Alert,
  Image,
  Button
} from "react-native";
import { List, ListItem } from "react-native-elements";
import { NavigationComponentProps } from "react-native-navigation";
import { Navigation } from "react-native-navigation";
import HistoryList from '../components/tshistory/historylist'
import {IHistory} from '../models/models'
import Auth from "../components/auth/Auth";
import {IRootState} from '../redux/store'
import {connect} from "react-redux"
import {ListHistFromAPIAction}from'../redux/actions/ListHistoryActions'
import homeStyles from'../src/styles/style'
Navigation.registerComponent("example.auth", () => Auth);


const instructions = Platform.select({
  ios: "Please fill in the valuation form.",
  android: "Please fill in the valuation form."
});

interface IHistProps extends NavigationComponentProps{
  histories:IHistory[];
  catname:string;
  loadHistories:(param:string)=>void
}


// type Props = {};
 class Valuation extends Component<IHistProps> {
   constructor(props: IHistProps) {
     super(props);

     //  this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
   }

   componentWillMount() {
     const param = this.props.catname;
     this.props.loadHistories(param);
   }

   goBankPressed = () => {
     this.props.navigator.push({
       screen: "example.bankvaluation", // unique ID registered with Navigation.registerScreen
       title: undefined, // navigation bar title of the pushed screen (optional)
       passProps: {}, // Object that will be passed as props to the pushed screen (optional)
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
   //  static navigatorButtons = { rightButtons: [{ icon: require("../src/icons/IC-Favorite-Border-24px.png"), id: "favorite" }, { // title: "Mark favorite", // for a textual button, provide the button title (label) // for icon button, provide the local image asset name // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
   //        id: "favorite", testID: "e2e_rules", disabled: true, disableIconTint: true, showAsAction: "ifRoom", buttonColor: "blue", buttonFontSize: 14, buttonFontWeight: "600" }] }; // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked // optional, used to locate this view in end-to-end tests // optional, used to disable the button (appears faded and doesn't interact) // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar. // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically) // Set font size for the button (can also be used in setButtons function to set different button style programatically) // Set font weight for the button (can also be used in setButtons function to set different button style programatically)

   //  onNavigatorEvent(event: any) {
   //    // this is the onPress handler for the two buttons together
   //    if (event.type == "NavBarButtonPress") {
   //      // this is the event type for button presses
   //      if (event.id == "favorite") {
   //        // AlertIOS.alert("NavBar", "Favorite button pressed");
   //        Alert.alert(
   //          "Alert Title",
   //          "My Alert Msg",
   //          [
   //            {
   //              text: "Ask me later",
   //              onPress: () => console.log("Ask me later pressed")
   //            },
   //            {
   //              text: "Cancel",
   //              onPress: () => console.log("Cancel Pressed"),
   //              style: "cancel"
   //            },
   //            { text: "OK", onPress: () => console.log("OK Pressed") }
   //          ],
   //          { cancelable: false }
   //        );
   //      }
   //    }
   //  }
   render() {
     return <View>
         <Text style={homeStyles.propertylist}>{this.props.catname}</Text>
         <Image style={{ width: 300, height: 300  }} source={{ uri: "https://openclipart.org/image/800px/svg_to_png/70417/home-clipart.png" }} />
         <HistoryList histories={this.props.histories} />
         <Button title="Get Bank Valuation" onPress={this.goBankPressed} />
       </View>;
   }

   //  private onPressedHistory = () =>{
   //    this.props.pressed()
   //  }
 }
 

  const mapStateToProps =(state:IRootState)=>{
    return{
      histories:state.histories.historylist
    }
  }

  const mapDispatchToProps =(dispatch:any) =>{
    return{
      loadHistories: (param:string) =>{
        dispatch(ListHistFromAPIAction(param))
      }
    };
  }
 
export default connect (mapStateToProps, mapDispatchToProps)(Valuation)
