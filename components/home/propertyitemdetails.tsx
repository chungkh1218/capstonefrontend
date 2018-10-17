import * as React from "react";
import { Component } from "react";
import {
  View,
  Alert,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  ActivityIndicator,
  Text
} from "react-native";
import { NavigationComponentProps } from "react-native-navigation";
import HistoryList from "../tshistory/historylist";
import { IHistory } from "../../models/models";
import { IRootState } from "../../redux/store";
import { connect } from "react-redux";
import { ListHistFromAPIAction } from "../../redux/actions/ListHistoryActions";
import { AddWatchItems } from "../../redux/actions/WatchListAction";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";

interface IHistProps extends NavigationComponentProps {
  navigator: any;
  histories: IHistory[];
  url: string;
  catname: string;

  loadHistories: (param: string) => void;
  addItems: (reId: number) => void;
}

interface IHistState {
  isLoading: boolean;
}

class propertyitemdetails extends Component<IHistProps, IHistState> {
  constructor(props: IHistProps) {
    super(props);
    this.state = {
      isLoading: true
    };

    this.props.navigator.setOnNavigatorEvent(
      this._onGoValuationNavigatorEvent.bind(this)
    );
    this.props.navigator.setOnNavigatorEvent(
      this._onAddUserFavouriteNavigatorEvent.bind(this)
    );
  }

  componentWillMount() {
    const param = this.props.catname;
    this.props.loadHistories(param);
  }

  componentWillReceiveProps(props: any) {
    this.setState({ isLoading: props.isLoading });
  }

  _onAddUserFavouriteNavigatorEvent(event: any) {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "addTo") {
        this.props.addItems(this.props.histories[0].re_id);
        Alert.alert(`${this.props.catname} is added as your favourite`);
      }
    }
  }

  _onGoValuationNavigatorEvent(event: any) {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "valuation") {
        this.props.navigator.push({
          screen: "example.bankvaluation",
          animated: true,
          animationType: "slide-horizontal",
          backButtonHidden: false,
          previewCommit: true
        });
      }
    }
  }

  render() {
    const spinner = this.state.isLoading ? (
      <ActivityIndicator size="large" />
    ) : null;
    const uri = this.props.url;
    console.log(this.props.histories);
    console.log(uri);
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            {/* <View>
            <Image
              style={{ width: Dimensions.get("window").width, height: 180 }}
              source={{ uri: uri }}
            />
          </View> */}
            <Image
              style={{ width: Dimensions.get("window").width, height: 200 }}
              source={{
                uri: "https://picsum.photos/200/600/?random"
              }}
            />
            <Text
              style={{
                position: "absolute",
                bottom: 0,
                color: "white",
                alignSelf: "flex-start",
                fontWeight: "bold",
                fontSize: 36,
                padding: 16,
                shadowColor: "#000000",
                shadowOffset: {
                  width: 0,
                  height: 2
                },
                shadowOpacity: 0.5
              }}
            >
              {this.props.catname}
            </Text>
          </View>
          <View>
            {this.state.isLoading ? spinner : null}
            <HistoryList histories={this.props.histories} />
          </View>
        </ScrollView>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => {
            this.props.navigator.push({
              screen: "example.bankvaluation",
              animated: true,
              animationType: "slide-horizontal",
              backButtonHidden: false,
              previewCommit: true
            });
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    histories: state.histories.historylist,
    watchList: state.watches.watchList,
    url: state.url.imgurl
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadHistories: (param: string) => {
      dispatch(ListHistFromAPIAction(param));
    },
    addItems: (reId: number) => {
      dispatch(AddWatchItems(reId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(propertyitemdetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)"
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
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  }
});
