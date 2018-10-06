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
import { StyleSheet, View } from "react-native";

import { IRootState } from "../redux/store";
import { connect } from "react-redux";
import { IAuthUser } from "../models/models";
import AuthRequest from "../components/auth/AuthRequest";
import UserProfile from "../components/auth/UserProfile";

interface IUserTapProps {
  user: IAuthUser;
  navigator: any;
}

class User extends Component<IUserTapProps> {
  render() {
    return (
      <View style={styles.container}>
        {this.props.user.isAuthenticated ? (
          <UserProfile
            navigator={this.props.navigator}
            user={this.props.user}
          />
        ) : (
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

export default connect(mapStateToProps)(User);

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
