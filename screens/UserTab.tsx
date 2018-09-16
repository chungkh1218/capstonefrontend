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
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
  Text
} from "react-native";
import { Button } from "react-native-elements";
import { NavigationComponentProps } from "react-native-navigation";

import Icon from "react-native-vector-icons/FontAwesome";
import { IRootState } from "../redux/store";
import { logoutUser } from "../redux/actions/AuthAction";
import { connect } from "react-redux";
import { IAuthUser } from "../models/models";
import AuthRequest from "../components/auth/AuthRequest";
import UserProfile from "../components/auth/UserProfile";

interface IUserTapProps extends NavigationComponentProps {
  user: IAuthUser;
  logout: () => void;
}

class User extends Component<IUserTapProps> {
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
      <View style={styles.container}>
        {this.props.user.isAuthenticated ? (
          <UserProfile navigator={this.props.navigator} />
        ) : (
          // <Button
          //   title="Logout!"
          //   onPress={this.handleLogout}
          //   buttonStyle={{
          //     backgroundColor: "#FF7600",
          //     marginHorizontal: 0,
          //     width: Dimensions.get("window").width,
          //     padding: 22
          //   }}
          // />
          <AuthRequest navigator={this.props.navigator} />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    user: state.auth.user
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
)(User);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
