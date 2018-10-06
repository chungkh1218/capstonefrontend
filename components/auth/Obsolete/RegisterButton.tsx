import React from "react";
import { View, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const RegisterButton = () => {
  <View>
    <Button
      title="Register"
      onPress={() =>
        this.props.navigator.push({
          screen: "example.signUpPage", // unique ID registered with Navigation.registerScreen
          title: undefined, // navigation bar title of the pushed screen (optional)
          subtitle: undefined, // navigation bar subtitle of the pushed screen (optional)
          titleImage: require("../../src/icons/IC-Remove-Red-Eye-24px.png"), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
          passProps: {}, // Object that will be passed as props to the pushed screen (optional)
          animated: true, // does the push have transition animation or does it happen immediately (optional)
          animationType: "fade", // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
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
        })
      }
      buttonStyle={{
        borderRadius: 24,
        backgroundColor: "#FF7600",
        marginHorizontal: 0,
        width: Dimensions.get("window").width * 0.5,
        margin: 6,
        padding: 8
      }}
    />
  </View>;
};

export default RegisterButton;
