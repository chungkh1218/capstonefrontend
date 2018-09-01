// Login Page
import * as React from "react";
import { Component } from "react";
import { Navigator } from "react-native-navigation";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import FbIcon from "react-native-vector-icons/FontAwesome";
import t = require("tcomb-form-native");
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  authAction,
  SWITCH_AUTHSTATUS
} from "../../components/auth/authAction";
import { IRootState } from "../../redux/store";

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean
});

const options = {
  order: ["email", "username", "password", "terms"],
  fields: {
    email: {
      placeholder: "email@email.com",
      error:
        "Without and email address how are you going to reset your password when you ..."
    },
    username: { placeholder: "Your name" },
    password: { placeholder: "12345678" },
    terms: { label: "Agree to Terms" }
  },
  StyleSheet: "formStyles"
};

interface ISignUpPageProps {
  navigator: Navigator;
  isAuthenticated: boolean;
  signup: () => void;
}

class SignUpPage extends Component<ISignUpPageProps> {
  handleSubmit = () => {
    const value = this.refs.form.getValue();
    this.props.signup();
    console.log("value: ", value);
    console.log("It is you auth status: ", this.props.isAuthenticated);
    if (this.props.isAuthenticated) {
      this.props.navigator.popToRoot({
        animated: true,
        animationType: "fade"
      });
    }
  };

  changeInputValue = (value: string) => {
    console.log("Value: " + value);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>This is a sign-up page!</Text>
        <Text style={styles.instructions}>
          Please sign-up with your email or facebook account
        </Text>
        <Form ref="form" type={User} options={options} />
        <Button title="Sign Up!" onPress={this.handleSubmit} />
        <TouchableOpacity>
          <FbIcon name="facebook" size={30} />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch: Dispatch<authAction>) => {
  return {
    signup: () =>
      dispatch({
        type: SWITCH_AUTHSTATUS
      })
  };
};

// Connect to store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F5FCFF"
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
