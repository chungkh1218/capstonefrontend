import * as React from "react";
import { Component } from "react";
import { View, TextInput, Button, ActivityIndicator } from "react-native";
import homeStyles from "../../src/styles/style";

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

    // this.props.onSearchChange(event.currentTarget.value);
  };

  onSearchPressed = () => {
    //const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
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
        style={homeStyles.searchbar}
        onLayout={event => {
          this.setState({
            width: event.nativeEvent.layout.width
          });
        }}
      >
        <TextInput
          style={homeStyles.searchinput}
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
