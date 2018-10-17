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

const containerStyle = {
  borderRadius: 24
};

class WatchListItemDetail extends Component<IWatchListItemDetailProps> {
  constructor(props: IWatchListItemDetailProps) {
    super(props);
  }

  _removeFavourite = () => {
    this.props.RemoveItems(this.props.re_id);
    console.log("Remove favourite: " + this.props.re_id);
    this.props.navigator.dismissLightBox({
      animationType: "slide-down"
    });
    Alert.alert("Remove favourite");
  };

  _goBack = () => {
    this.props.navigator.dismissLightBox({
      animationType: "slide-down"
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Card
          image={require("../../src/img/img_placeholder.png")}
          containerStyle={containerStyle}
        >
          <Text
            style={{
              width: Dimensions.get("window").width * 0.85,
              marginBottom: 60
            }}
          >
            {this.props.address.map((item, i) => (
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: "bold",
                  textAlign: "center"
                }}
                key={i}
              >
                {item.catname}
                {"\n"}
              </Text>
            ))}
            <Text
              style={{
                fontSize: 22,
                color: "dimgray",
                textAlign: "center",
                lineHeight: 40,
                padding: 20
              }}
            >
              {this.props.address.map((item, i) => (
                <Text key={i}>
                  {item.catfathername}
                  {"\n"}
                </Text>
              ))}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "dimgray",
                textAlign: "center",
                lineHeight: 32,
                padding: 20
              }}
            >
              {this.props.address.map((item, i) => (
                <Text key={i}>
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
    alignItems: "center"
    // backgroundColor: "#FACC56"
  },
  button: {
    width: Dimensions.get("window").width * 0.5,
    borderRadius: 24,
    marginBottom: 6
  }
});
