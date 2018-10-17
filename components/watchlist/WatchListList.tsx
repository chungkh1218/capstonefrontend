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
import ProgressBar from "../_global/ProgressBar";

interface IWatchListListProps {
  navigator: any;
  watchList: IWatchList[];
}
interface IWatchListListStates {
  isLoading: boolean;
}

export default class WatchListList extends React.Component<
  IWatchListListProps,
  IWatchListListStates
> {
  constructor(props: IWatchListListProps) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentWillReceiveProps(watchList: any) {
    if (watchList) {
      this.setState({ isLoading: false });
      console.log("WatchTab Will Receiving Props...");
    }
  }

  componentWillUnmount() {
    this.props.watchList === null;
  }

  _onPressItem(item: any, navigator: any) {
    this.props.navigator.showLightBox({
      screen: "example.watchlistitemdetail",
      title: "Modal",
      passProps: {
        navigator: navigator,
        re_id: item.re_id,
        address: item.address
      },
      style: {
        backgroundBlur: "dark",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        tapBackgroundToDismiss: true
      },
      animationType: "slide-up"
    });
  }

  public render() {
    return this.state.isLoading ? (
      <View style={styles.progressBar}>
        <ProgressBar />
      </View>
    ) : (
      <View>
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
      </View>
    );
    // return (
    //   <View>
    //     <FlatList
    //       data={this.props.watchList}
    //       keyExtractor={(item, index) => String(index)}
    //       renderItem={({ item }) => (
    //         <View style={styles.homeList}>
    //           <View style={styles.homeListContent}>
    //             <TouchableOpacity
    //               onPress={this._onPressItem.bind(
    //                 this,
    //                 item,
    //                 this.props.navigator
    //               )}
    //             >
    //               {item.address.map((item, i) => (
    //                 <WatchListItem
    //                   key={i}
    //                   catname={item.catname}
    //                   catfathername={item.catfathername}
    //                   avWinloss={item.avWinloss}
    //                   avPrice_sq={item.avPrice_sq}
    //                 />
    //               ))}
    //             </TouchableOpacity>
    //           </View>
    //         </View>
    //       )}
    //     />
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  homeList: {
    flex: 1,
    width: Dimensions.get("window").width - 20,
    height: 120,
    padding: 20,
    marginBottom: 6,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    backgroundColor: "white",
    borderRadius: 16,
    margin: 10
  },
  homeListContent: {
    width: Dimensions.get("window").width,
    position: "absolute",
    letterSpacing: 10,
    padding: 10
  },
  progressBar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width
  }
});
