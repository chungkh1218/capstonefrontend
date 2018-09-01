// Login Page
import * as React from "react";
import { Component } from "react";
import { Navigator } from "react-native-navigation";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import t from "tcomb-form-native";
import { connect } from "react-redux";
import { loginUser, authAction } from "../auth/authAction";
import { IRootState } from "../../redux/store";
import { Dispatch } from "redux";
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
      error:
        "Without and email address how are you going to reset your password when you ..."
    },
    password: { placeholder: "12345678" }
  },
  StyleSheet: "formStyles"
};

interface ILoginPageProps {
  navigator: Navigator;
  isAuthenicated: boolean;
  loginUser: (email: string, password: string) => Promise<void>;
  // loginUser: () => void;
}

class LoginPage extends Component<ILoginPageProps> {
  handleSubmit = () => {
    // do the things
    const value = this.refs.form.getValue(); // use that ref to get the form value
    this.props.loginUser(value.email, value.password);
    console.log("value: ", value);
    if (this.props.isAuthenicated) {
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
        <Text style={styles.welcome}>This is a login page!</Text>
        <Text style={styles.instructions}>
          Please login with your email or facebook account
        </Text>
        <Form
          ref="form" // assign a ref
          type={User}
          options={options}
        />
        <Button title="Login!" onPress={this.handleSubmit} />
      </View>
    );
  }
}
const mapStateToProps = (state: IRootState) => {
  return {
    isAuthenicated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loginUser: (email: string, password: string) =>
      dispatch(loginUser(email, password))
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
