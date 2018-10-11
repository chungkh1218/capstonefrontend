import * as React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from "react-native";
import { IWatchList } from "../../models/models";
import WatchListItem from "./WatchListItem";

interface IWatchListListProps {
  navigator: any;
  watchList: IWatchList[];
}

export default class WatchListList extends React.Component<
  IWatchListListProps
> {
  constructor(props: IWatchListListProps) {
    super(props);
  }

  _onPressItem(item: any, navigator: any) {
    this.props.navigator.showModal({
      screen: "example.watchlistitemdetail",
      title: "Modal",
      passProps: {
        navigator: navigator,
        re_id: item.re_id,
        address: item.address
      },
      navigatorStyle: {},
      animationType: "slide-up"
    });
  }

  public render() {
    return (
      <FlatList
        data={this.props.watchList}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <View style={styles.homeList}>
            <View style={styles.homeListContent}>
              <TouchableOpacity
                onPress={this._onPressItem.bind(
                  this,
                  item,
                  this.props.navigator
                )}
              >
                {item.address.map((item, i) => (
                  <WatchListItem
                    key={i}
                    catname={item.catname}
                    catfathername={item.catfathername}
                    avWinloss={item.avWinloss}
                    avPrice_sq={item.avPrice_sq}
                  />
                ))}
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  homeList: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: 120,
    padding: 20,
    marginBottom: 6,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    backgroundColor: "white"
  },
  homeListContent: {
    width: Dimensions.get("window").width,
    position: "absolute",
    letterSpacing: 10,
    padding: 10
  }
});
