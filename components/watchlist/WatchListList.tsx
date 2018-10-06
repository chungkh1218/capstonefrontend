import * as React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from "react-native";
import { IWatchList } from "../../models/models";

interface IWatchListListProps {
  navigator: any;
  watchList: IWatchList[];
}
export class WatchListList extends React.Component<IWatchListListProps> {
  constructor(props: IWatchListListProps) {
    super(props);
  }

  _handleWatchListItem(item: any, navigator: any) {
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
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={this._handleWatchListItem.bind(
              this,
              item,
              this.props.navigator
            )}
          >
            <View style={styles.homeList}>
              <View style={styles.homeListContent}>
                {item.address.map((item, i) => (
                  <View key={i}>
                    <Text style={styles.homeListHeader}>{item.catname}</Text>
                    <View style={styles.homeListItem}>
                      <Text>{item.catfathername}</Text>
                      <Text>Winloss: {item.avWinloss}%</Text>
                      <Text>Price: ${item.avPrice_sq}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, key) => String(key)}
      />
    );
  }
}

const styles = StyleSheet.create({
  homeList: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: 120,
    backgroundColor: "white",
    padding: 20,
    marginBottom: 6,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25
  },
  homeListThumbnail: {
    width: 120,
    height: 120,
    position: "absolute",
    left: 0
  },
  homeListContent: {
    position: "absolute",
    letterSpacing: 10,
    padding: 10
  },
  homeListHeader: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1
  },
  homeListItem: {
    fontSize: 16,
    color: "dimgray"
  }
});
