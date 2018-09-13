import * as React from "react";
import { Component } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet
} from "react-native";

interface IWatchListListProps {
  navigator: Navigator;
}

interface IWatchListStates {
  data: Array<{
    re_id: number;
    catfathername: string;
    catname: string;
    my_target_price: string;
    addr: string;
    area: string;
    imageUrl: string;
  }>;
}
export class WatchListList extends React.Component<
  IWatchListListProps,
  IWatchListStates
> {
  constructor(props: IWatchListListProps) {
    super(props);

    this.state = {
      data: [
        {
          re_id: 1,
          catfathername: "Kwun Tong",
          catname: "Wah Fat Building ",
          my_target_price: "$5,000,000",
          addr: "8/F Room 11",
          area: "690ft",
          imageUrl:
            "https://images.okay.com/Building/Folder150/1208_634105534157968750.JPG"
        },
        {
          re_id: 2,
          catfathername: "Ho Man Tin",
          catname: "Mantin Heights",
          my_target_price: "$3,600,000",
          addr: "TOWER 7 7/F Room G",
          area: "690ft",
          imageUrl:
            "https://www.28hse.com/en/utf8/developer/d298/selfcapture/7zRjsPPexx_large.jpg"
        },
        {
          re_id: 3,
          catfathername: "Tai Kok Tsui",
          catname: "Metro Harbour View",
          my_target_price: "$4,300,000",
          addr: "BLOCK 6 3#/F Room F",
          area: "690ft",
          imageUrl:
            "https://www.28hse.com/en/utf8/developer/d298/selfcapture/7zRjsPPexx_large.jpg"
        }
      ]
    };
  }

  // componentDidMount() {
  //   this.updateFavourite();
  // }

  // updateFavourite = () => {
  //   console.log("Update favourite");
  //   this.props.ListItems();
  // };

  public render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigator.showModal({
                  screen: "example.watchlistitem", // unique ID registered with Navigation.registerScreen
                  title: item.catname, // title of the screen as appears in the nav bar (optional)
                  passProps: {
                    re_id: item.re_id,
                    catfathername: item.catfathername,
                    catname: item.catname,
                    my_target_price: item.my_target_price,
                    addr: item.addr,
                    area: item.area,
                    imageUrl: item.imageUrl
                  }, // simple serializable object that will pass as props to the modal (optional)
                  navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
                  animationType: "slide-up" // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
                })
              }
            >
              <View style={styles.homeList}>
                <Image
                  source={{
                    uri: item.imageUrl
                  }}
                  style={styles.homeListThumbnail}
                />
                <View style={styles.homeListContent}>
                  <Text style={styles.homeListHeader}>{item.catname}</Text>
                  <Text style={styles.homeListItem}>{item.catfathername}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.catname}
        />
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
