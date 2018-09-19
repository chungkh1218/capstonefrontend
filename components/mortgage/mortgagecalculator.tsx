import * as React from "react";
import { Component } from "react";
import { StyleSheet, Button, Text, View, TextInput } from "react-native";
import PropTypes from "prop-types";
import Header from "./mortgagehead";

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
      rate: 0,
      principal: 0,
      years: 0,
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
      <View
      //   style={styles.container}
      >
        <Header />
        {this.state.completed ? (
          <View
          //    style={styles.results}
          >
            <Text style={{ fontSize: 14, color: "black" }}>
              {this.state.response}
            </Text>
          </View>
        ) : null}
        <TextInput
          keyboardType="numeric"
          placeholder="Rate"
          style={styles.inputs}
          value={this.state.rate.toString()}
          onChangeText={number => this.setState({ rate: number })}
        />
        <TextInput
          keyboardType="numeric"
          placeholder="Principal"
          style={styles.inputs}
          value={this.state.principal.toString()}
          onChangeText={number => this.setState({ principal: number })}
        />
        <TextInput
          keyboardType="numeric"
          placeholder="Years"
          style={styles.inputs}
          value={this.state.years.toString()}
          onChangeText={number => this.setState({ years: number })}
        />
        <View style={styles.button}>
          <Button
            onPress={this.calculate}
            //   style={styles.button}
            title="Calculate"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={this.reset}
            //   style={styles.button}
            title="Reset"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={() =>
              this.props.navigator.dismissModal({
                animationType: "slide-up" // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
              })
            }
            //   style={styles.button}
            title="Back"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // button: {
  //   backgroundColor: "#FFA500",
  //   height: 5,
  //   width: 15,
  //   color: "#FFFAFA",
  //   bottom: 15
  // },
  container: {
    flex: 1,
    backgroundColor: "#067EBD",
    alignItems: "center",
    justifyContent: "center",
    bottom: 50
  },
  inputs: {
    width: 300,
    alignSelf: "center",
    height: 40,
    top: 5,
    backgroundColor: "#FFFFFF"
  },
  // button: {
  //   flexDirection: "row",
  //   justifyContent: "center"
  // }
  results: {
    width: 300,
    alignSelf: "center",
    height: 70,
    margin: 10
  }
});
