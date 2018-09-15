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

    // this.state = {
    //   data: [
    //     {
    //       re_id: 1,
    //       catfathername: "Kwun Tong",
    //       catname: "Wah Fat Building ",
    //       my_target_price: "$5,000,000",
    //       addr: "8/F Room 11",
    //       area: "690ft",
    //       imageUrl:
    //         "https://images.okay.com/Building/Folder150/1208_634105534157968750.JPG"
    //     },
    //     {
    //       re_id: 2,
    //       catfathername: "Ho Man Tin",
    //       catname: "Mantin Heights",
    //       my_target_price: "$3,600,000",
    //       addr: "TOWER 7 7/F Room G",
    //       area: "690ft",
    //       imageUrl:
    //         "https://www.28hse.com/en/utf8/developer/d298/selfcapture/7zRjsPPexx_large.jpg"
    //     },
    //     {
    //       re_id: 3,
    //       catfathername: "Tai Kok Tsui",
    //       catname: "Metro Harbour View",
    //       my_target_price: "$4,300,000",
    //       addr: "BLOCK 6 3#/F Room F",
    //       area: "690ft",
    //       imageUrl:
    //         "https://www.28hse.com/en/utf8/developer/d298/selfcapture/7zRjsPPexx_large.jpg"
    //     }
    //   ]
    // };
  }

  public render() {
    console.log(this.props.watchList[0]);
    return (
      <View>
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
                  <Text style={styles.homeListHeader}>
                    Re_id:: {item.re_id}
                  </Text>
                  {item.address.map((item, i) => (
                    <Text key={i}>
                      Catname: {item.catname}
                      CatFatherName: {item.catfathername}
                      Winloss: {item.avWinloss}
                      Price: {item.avPrice_sq}
                    </Text>
                  ))}
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, key) => String(key)}
        />

        {/* <FlatList
          data={this.props.watchList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigator.showModal({
                  screen: "example.watchlisttestitem", // unique ID registered with Navigation.registerScreen
                  title: item.re_id, // title of the screen as appears in the nav bar (optional)
                  passProps: {
                    // re_id: item.re_id,
                    // address: item.address
                  }, // simple serializable object that will pass as props to the modal (optional)
                  navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
                  animationType: "slide-up" // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
                })
              }
            >
              <View style={styles.homeList}>
                <View style={styles.homeListContent}>
                  <Text style={styles.homeListHeader}>
                    Re_id:: {item.re_id}
                  </Text>

                  {item.address.map((item, i) => (
                    <Text key={i}>
                      Catname: {item.catname}
                      CatFatherName: {item.catfathername}
                      Winloss: {item.avWinloss}
                      Price: {item.avPrice_sq}
                    </Text>
                  ))}
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, key) => String(key)}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeList: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: 120,
    backgroundColor: "aliceblue",
    padding: 20
  },
  homeListThumbnail: {
    width: 120,
    height: 120,
    position: "absolute",
    left: 0
  },
  homeListContent: {
    position: "absolute",
    right: 20,
    letterSpacing: 10
  },
  homeListHeader: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    letterSpacing: 1
  },
  homeListItem: {
    fontSize: 16,
    textAlign: "right",
    color: "dimgray"
  }
});
