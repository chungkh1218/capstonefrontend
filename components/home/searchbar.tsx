import * as React from "react";
import { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ActivityIndicator,
  Dimensions
} from "react-native";

interface ISearchProp {
  onSearchChange: (search: string, condition: string) => void;
  isLoading: boolean;
}

interface ISearchState {
  search: string;
  isLoading: boolean;
  value: string;
  width: number;
}

export default class SearchBar extends Component<ISearchProp, ISearchState> {
  constructor(props: ISearchProp) {
    super(props);
    this.state = {
      value: "",
      search: "Which district are you interested in? ",
      isLoading: false,
      width: 300
    };
  }

  componentWillReceiveProps(props: ISearchProp) {
    this.setState({ isLoading: props.isLoading });
  }
  onSearchTextChange = (event: any) => {
    const searchValue = event.nativeEvent.text;
    this.setState({ value: searchValue });
  };

  onSearchPressed = () => {
    console.log("button pressed");
    const search = this.state.search;
    this.setState({ isLoading: true });
    this.props.onSearchChange(this.state.value, "estate");
    console.log(this.state.search);
  };

  public render() {
    const spinner = this.state.isLoading ? (
      <ActivityIndicator size="large" />
    ) : null;
    return (
      <View
        style={styles.searchbar}
        onLayout={event => {
          this.setState({
            width: event.nativeEvent.layout.width
          });
        }}
      >
        <TextInput
          style={styles.searchinput}
          value={this.state.value}
          placeholder={this.state.search}
          onChange={this.onSearchTextChange}
        />
        <Button
          title="Go"
          disabled={this.state.value.trim().length === 0}
          onPress={this.onSearchPressed}
        />
        {this.state.isLoading ? spinner : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchinput: {
    height: 40,
    flexGrow: 1,
    padding: 12,
    fontSize: 18,
    color: "#FF9212"
  },
  searchbar: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
    alignItems: "center"
  }
});
