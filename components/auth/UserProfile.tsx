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
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  Alert
} from "react-native";
import { Button } from "react-native-elements";
import { IAuthUser } from "../../models/models";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/AuthAction";
import { IRootState } from "../../redux/store";

interface IUserProfileProps {
  navigator: any;
  user: IAuthUser;
  logout: () => void;
}

class UserProfile extends Component<IUserProfileProps> {
  constructor(props: IUserProfileProps) {
    super(props);
  }

  handleLogout = () => {
    this.props.logout();
    if (this.props.user.isAuthenticated) {
      Alert.alert("Authenication", "You are signed out");
    }
    this.props.navigator.popToRoot({
      animated: true,
      animationType: "fade"
    });
  };

  render() {
    return (
      <ImageBackground
        source={require("../../src/img/Logout_BG.png")}
        style={styles.container}
      >
        <Text style={styles.header}>
          Hi, {this.props.user.username}. {"\n"} Welcome to Property Prince.
          {"\n"}
          We can you to find your ideal property investment here.
        </Text>

        <Text style={styles.description}>
          Email:
          {this.props.user.email}
        </Text>

        <Button
          title="Logout!"
          onPress={this.handleLogout}
          buttonStyle={{
            borderRadius: 24,
            backgroundColor: "#FF7600",
            marginHorizontal: 0,
            width: Dimensions.get("window").width * 0.35,
            margin: 8,
            padding: 12
          }}
        />
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    // user: state.auth.user
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => {
      dispatch(logoutUser());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  header: {
    fontSize: 16,
    lineHeight: 24,
    color: "black",
    textAlign: "center",
    margin: 10
  },
  description: {
    fontSize: 12,
    color: "grey",
    textAlign: "center",
    margin: 10
  }
});
