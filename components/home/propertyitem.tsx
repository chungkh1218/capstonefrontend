import * as React from "react";
import { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
    Image,
    TouchableOpacity

} from "react-native";
import {IProperty} from'../../models/models'
import homeStyles from'../../src/styles/style'
import Valuation from "../../screens/ValuationTab";
import {Navigator} from 'react-native-navigation'


interface IPropertyProps extends IProperty{
    navigator : Navigator
    // avWinloss: any
    // catname: any
    // avPrice_sq: any
}

export default class PropertyItem extends React.Component< IPropertyProps>{

    private itemsOnPressed = () =>{
        console.log(this.props)
        this.props.navigator.push({
            screen: 'example.valuation', // unique ID registered with Navigation.registerScreen
            title: undefined, // navigation bar title of the pushed screen (optional)
            passProps:{catname:this.props.catname},// Object that will be passed as props to the pushed screen (optional)
            animated: true, // does the push have transition animation or does it happen immediately (optional)
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
            backButtonTitle: undefined, // override the back button title (optional)
            backButtonHidden: false, // hide the back button altogether (optional)
            navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
            navigatorButtons: {}, // override the nav buttons for the pushed screen (optional)
            // enable peek and pop - commited screen will have `isPreview` prop set as true.
            previewView: undefined, // react ref or node id (optional)
            previewHeight: undefined, // set preview height, defaults to full height (optional)
            previewCommit: true, // commit to push preview controller to the navigation stack (optional)
            previewActions: [{ // action presses can be detected with the `PreviewActionPress` event on the commited screen.
                id: '', // action id (required)
                title: '', // action title (required)
                style: undefined, // 'selected' or 'destructive' (optional)
                actions: [], // list of sub-actions
            }],
        });
    }

    render(){
        console.log(this.props.avWinloss)
        return(
            <TouchableOpacity
                onPress={this.itemsOnPressed.bind(this)}    >   
                <View style={homeStyles.homeListItem}>

                
                {/* <Image
                    style={{ width: 100, height: 100 }}
                    // source={{
                    //     uri: item.picture.thumbnail
                    // }} */}

                
                <Text style={homeStyles.item}>
                    {this.props.catname}{"\n"}
                    Average Price /sq.feet: ${this.props.avPrice_sq}{"\n"}
                    WinLoss: {this.props.avWinloss}%
                    {/* address: {this.props.addr} */}
                </Text>
                
            </View>
            </TouchableOpacity>
 
        )
      
        }
 
   }



