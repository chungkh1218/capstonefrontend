// Login Page
import * as React from "react";
import { Component } from "react";
import { Navigator } from "react-native-navigation";
import { Text, View, StyleSheet, Alert, Dimensions } from "react-native";
import t from "tcomb-form-native";
import { connect } from "react-redux";
import { loginUser, loginFacebook } from "../../redux/actions/AuthAction";
import { IRootState } from "../../redux/store";
import { Button } from "react-native-elements";
import {
  LoginManager,
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from "react-native-fbsdk";
import { IAuthUser } from "../../models/models";

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String
});

const options = {
  order: ["email", "password"],
  fields: {
    email: {
      placeholder: "email@email.com",
      autoCapitalize: "none",
      error:
        "Without and email address how are you going to reset your password when you ..."
    },
    password: {
      placeholder: "12345678",
      autoCapitalize: "none",
      secureTextEntry: true
    }
  },
  StyleSheet: "formStyles"
};

interface ILoginPageProps {
  navigator: Navigator;
  user: IAuthUser;
  login: (email: string, password: string) => Promise<void>;
  fbLogin: (accessToken: string) => Promise<void>;
}

class LoginPage extends Component<ILoginPageProps> {
  handleFBLogin = () => {
    console.log("Facebbok Login handling...");
    LoginManager.logInWithReadPermissions(["public_profile"]).then(
      (result: any) => {
        if (result.isCancelled) {
          alert("Login was cancelled");
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            // console.log(data.accessToken.toString());
            this.props.fbLogin(data.accessToken);
          });
          // alert(
          //   "Login was successful with permissions: " +
          //     result.grantedPermissions.toString()
          // );
          console.log("Result:" + result.grantedPermissions.toString());
        }
      },
      function(error: any) {
        alert("Login failed with error: " + error);
      }
    );
  };

  handleLogin = () => {
    const value = this.refs.form.getValue();
    if (value) {
      this.props.login(value.email, value.password);
    }
  };

  changeInputValue = (value: string) => {
    console.log("Value: " + value);
  };

  render() {
    if (this.props.user.isAuthenticated) {
      this.props.navigator.popToRoot({
        animated: true,
        animationType: "fade"
      });
      Alert.alert("Authenication", "You are login");
    }
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Please login with your email or facebook account
        </Text>
        <Form
          ref="form" // assign a ref
          type={User}
          options={options}
        />
        <Button
          title="Login!"
          onPress={this.handleLogin}
          buttonStyle={{
            borderRadius: 24,
            backgroundColor: "#FF7600",
            marginHorizontal: 0,
            width: Dimensions.get("window").width * 0.5,
            alignSelf: "center",
            margin: 8,
            padding: 12
          }}
        />
        <Button
          title="Login with Facebook!"
          onPress={this.handleFBLogin}
          buttonStyle={{
            borderRadius: 24,
            backgroundColor: "#3B5998",
            marginHorizontal: 0,
            width: Dimensions.get("window").width * 0.5,
            alignSelf: "center",
            margin: 8,
            padding: 12
          }}
        />
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
    login: (email: string, password: string) =>
      dispatch(loginUser(email, password)),

    fbLogin: (accessToken: string) => dispatch(loginFacebook(accessToken))
  };
};

// Connect to store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
