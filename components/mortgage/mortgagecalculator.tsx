import * as React from "react";
import { Component } from "react";
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import PropTypes from "prop-types";
import { Button } from "react-native-elements";
// import Header from "./mortgagehead";

interface IMortgageInputProps {}

interface IMortgageInputStates {
  rate: number;
  principal: number;
  years: number;
  response: string;
  completed: boolean;
}

export default class MortgageInput extends React.Component<
  IMortgageInputProps,
  IMortgageInputStates
> {
  constructor(props: IMortgageInputProps) {
    super(props);
    this.state = {
      rate: 2.5,
      principal: 5500000,
      years: 35,
      response: "",
      completed: false
    };
    this.calculate = this.calculate.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      rate: "",
      principal: null,
      years: null,
      response: "",
      completed: false
    });
  }

  calculate() {
    function getMonths(yrs: number) {
      return yrs * 12;
    }

    function convertRate(rate: number) {
      return rate / 100;
    }

    function MonthlyPayments(r: any, p: any, yrs: any) {
      let months = getMonths(yrs);
      let converrate = convertRate(r);
      this.values = function() {
        return { months: months, rate: converrate, principal: p };
      };
      this.total = function() {
        let firstTop = converrate * Math.pow(1 + converrate, months);
        let secondBottom = Math.pow(1 + converrate, months) - 1;
        return Math.round(p * (firstTop / secondBottom));
      };
      this.message = function() {
        return `At a rate of ${r}% with ${months} months of payments and a principal of ${p}, your monthly mortgage payment will be $${this.total()} per month`;
      };
    }
    const mortgage = new MonthlyPayments(
      this.state.rate,
      this.state.principal,
      this.state.years
    );
    this.setState({
      response: mortgage.message(),
      completed: true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 18, alignSelf: "center", color: "#ffffff" }}>
            Mortgage Calculator
          </Text>
        </View>

        <View style={styles.resultGroup}>
          {this.state.completed ? (
            <Text style={{ fontSize: 18, color: "black" }}>
              {this.state.response}
            </Text>
          ) : null}
        </View>

        <View style={styles.inputGroup}>
          <View>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 8 }}
            >
              Rate
            </Text>
            <TextInput
              keyboardType="numeric"
              placeholder="Rate"
              // style={styles.inputs}
              value={this.state.rate.toString()}
              onChangeText={number => this.setState({ rate: number })}
            />
          </View>
          <View>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 8 }}
            >
              Principal
            </Text>
            <TextInput
              keyboardType="numeric"
              placeholder="Principal"
              // style={styles.inputs}
              value={this.state.principal.toString()}
              onChangeText={number => this.setState({ principal: number })}
            />
          </View>

          <View>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 8 }}
            >
              Years
            </Text>
            <TextInput
              keyboardType="numeric"
              placeholder="Years"
              // style={styles.inputs}
              value={this.state.years.toString()}
              onChangeText={number => this.setState({ years: number })}
            />
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <Button
            onPress={this.calculate}
            // style={styles.button}
            title="Calculate"
            accessibilityLabel="Learn more about this purple button"
            buttonStyle={{
              borderRadius: 24,
              backgroundColor: "#FF7600",
              marginHorizontal: 0,
              width: Dimensions.get("window").width * 0.5,
              margin: 6,
              padding: 8
            }}
          />
          <Button
            onPress={this.reset}
            // style={styles.button}
            title="Reset"
            accessibilityLabel="Learn more about this purple button"
            buttonStyle={{
              borderRadius: 24,
              backgroundColor: "#FF7600",
              marginHorizontal: 0,
              width: Dimensions.get("window").width * 0.5,
              margin: 6,
              padding: 8
            }}
          />
          <Button
            onPress={() =>
              this.props.navigator.dismissModal({
                animationType: "slide-up" // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
              })
            }
            // style={styles.button}
            title="Back"
            accessibilityLabel="Learn more about this purple button"
            buttonStyle={{
              borderRadius: 24,
              backgroundColor: "#FF7600",
              marginHorizontal: 0,
              width: Dimensions.get("window").width * 0.5,
              margin: 6,
              padding: 8
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  header: {
    width: Dimensions.get("window").width,
    backgroundColor: "#FF9212",
    padding: 18
  },
  resultGroup: {
    flex: 2,
    width: Dimensions.get("window").width,
    backgroundColor: "#DCDCDC",
    padding: 20
  },
  inputGroup: {
    flex: 3,
    justifyContent: "space-around",
    width: Dimensions.get("window").width,
    // backgroundColor: "green"
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 20
  },
  buttonGroup: {
    flex: 3,
    justifyContent: "space-around",
    alignItems: "center",
    width: Dimensions.get("window").width,
    // backgroundColor: "blue",
    paddingBottom: 80
  }
  // inputs: {
  //   width: 300,
  //   alignSelf: "center",
  //   height: 40,
  //   top: 5,
  //   backgroundColor: "#FFFFFF"
  // }
});
