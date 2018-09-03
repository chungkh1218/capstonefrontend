// Login Page
import * as React from "react";
import { Component } from "react";
import { Navigator } from "react-native-navigation";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import FbIcon from "react-native-vector-icons/FontAwesome";
import t = require("tcomb-form-native");
import { connect } from "react-redux";
import { signUpUser } from "../../redux/actions/AuthAction";
import { IRootState } from "../../redux/store";

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  email: t.String,
  phone: t.String,
  password: t.String,
  special_user: t.Boolean
});

const options = {
  order: ["name", "email", "phone", "password", "special_user"],
  fields: {
    name: {
      placeholder: "Your name",
      autoCapitalize: "none"
    },
    email: {
      placeholder: "email@email.com",
      autoCapitalize: "none",
      error:
        "Without and email address how are you going to reset your password when you ..."
    },
    phone: { placeholder: "98765432" },
    password: {
      placeholder: "12345678",
      autoCapitalize: "none",
      secureTextEntry: true
    },
    special_user: { placeholder: "false" }
  },
  StyleSheet: "formStyles"
};

interface ISignUpPageProps {
  navigator: Navigator;
  isAuthenticated: boolean;
  signup: (
    name: string,
    email: string,
    phone: string,
    password: string,
    special_user: boolean
  ) => Promise<void>;
}

class SignUpPage extends Component<ISignUpPageProps> {
  handleSubmit = () => {
    const value = this.refs.form.getValue();
    if (value) {
      this.props.signup(
        value.name,
        value.email,
        value.phone,
        value.password,
        value.special_user
      );
    }
    console.log("value: ", value);
    console.log("It is you auth status: ", this.props.isAuthenticated);
  };

  changeInputValue = (value: string) => {
    console.log("Value: " + value);
  };

  render() {
    if (this.props.isAuthenticated) {
      this.props.navigator.popToRoot({
        animated: true,
        animationType: "fade"
      });
      Alert.alert("Authenication", "You are signed up");
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>This is a sign-up page!</Text>
        <Text style={styles.instructions}>
          Please sign-up with your email or facebook account
        </Text>
        <Form ref="form" type={User} options={options} />
        <Button title="Sign Up!" onPress={this.handleSubmit} />
        {/* <TouchableOpacity>
          <FbIcon name="facebook" size={30} />
        </TouchableOpacity> */}
      </View>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    signup: (
      name: string,
      email: string,
      phone: string,
      password: string,
      special_user: boolean
    ) => dispatch(signUpUser(name, email, phone, password, special_user))
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
