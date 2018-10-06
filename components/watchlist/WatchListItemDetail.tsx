import * as React from "react";
import { Component } from "react";
import { StyleSheet, View, Dimensions, Alert } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { RemoveWatchItems } from "../../redux/actions/WatchListAction";
import { IRootState } from "../../redux/store";
import { connect } from "react-redux";

interface IWatchListItemDetailProps {
  navigator: any;
  re_id: number;
  address: [
    {
      catname: string;
      catfathername: string;
      avWinloss: number;
      avPrice_sq: string;
    }
  ];

  RemoveItems: (item: any) => void;
}

class WatchListItemDetail extends Component<IWatchListItemDetailProps> {
  constructor(props: IWatchListItemDetailProps) {
    super(props);
  }

  _removeFavourite = () => {
    this.props.RemoveItems(this.props.re_id);
    console.log("Remove favourite: " + this.props.re_id);
    this.props.navigator.dismissModal({
      animationType: "slide-down"
    });
    Alert.alert("Remove favourite");
  };

  _goBack = () => {
    this.props.navigator.dismissModal({
      animationType: "slide-down"
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Text
            style={{
              width: Dimensions.get("window").width * 0.85,
              marginBottom: 180
            }}
          >
            {this.props.address.map((item, i) => (
              <Text h4 style={{ fontWeight: "bold" }} key={i}>
                {item.catname}
                {"\n"}
              </Text>
            ))}
            <Text style={{ fontSize: 16, color: "dimgray", padding: 20 }}>
              {this.props.address.map((item, i) => (
                <Text key={i}>
                  {item.catfathername}
                  {"\n"}
                  Winloss: {item.avWinloss}%{"\n"}${item.avPrice_sq}
                  /sq.ft
                </Text>
              ))}
            </Text>
          </Text>
          <View
            style={{
              alignItems: "center"
            }}
          >
            <Button
              backgroundColor="#FF7600"
              buttonStyle={styles.button}
              title="Remove Favourite"
              onPress={this._removeFavourite}
            />
            <Button
              backgroundColor="#FF7600"
              buttonStyle={styles.button}
              title="Go Back"
              onPress={this._goBack}
            />
          </View>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    watchList: state.watches.watchList
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    RemoveItems: (item: any) => {
      dispatch(RemoveWatchItems(item));
    }
  };
};

// Connect to store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchListItemDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FACC56"
  },
  button: {
    width: Dimensions.get("window").width * 0.5,
    borderRadius: 24,
    marginBottom: 6
  }
});
