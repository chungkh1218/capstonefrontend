import * as React from "react";
import { Component } from "react";
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
  navigator: Navigator;
  watchList: IWatchList[];
  // data: Array<{
  //   re_id: number;
  //   catfathername: string;
  //   catname: string;
  //   my_target_price: string;
  //   addr: string;
  //   area: string;
  //   imageUrl: string;
  // }>;
}
export class WatchListList extends React.Component<IWatchListListProps> {
  constructor(props: IWatchListListProps) {
    super(props);
  }

  public render() {
    console.log(this.props.watchList[0]);
    return (
      <FlatList
        data={this.props.watchList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              this.props.navigator.showModal({
                screen: "example.watchlistitem", // unique ID registered with Navigation.registerScreen
                title: "Modal", // title of the screen as appears in the nav bar (optional)
                passProps: {
                  re_id: item.re_id,
                  address: item.address
                }, // simple serializable object that will pass as props to the modal (optional)
                navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
                animationType: "slide-up" // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
              })
            }
          >
            <View style={styles.homeList}>
              <View style={styles.homeListContent}>
                {item.address.map((item, i) => (
                  <View key={i}>
                    <Text style={styles.homeListHeader}>{item.catname}</Text>
                    <View style={styles.homeListItem}>
                      <Text>{item.catfathername}</Text>
                      <Text>Winloss: {item.avWinloss}</Text>
                      <Text>Price: {item.avPrice_sq}</Text>
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
