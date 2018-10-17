import * as React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Text } from "react-native-elements";

interface IWatchListItemProps {
  catname: any;
  catfathername: any;
  avWinloss: any;
  avPrice_sq: any;
}

const WatchListItem: React.StatelessComponent<IWatchListItemProps> = ({
  catname,
  catfathername,
  avWinloss,
  avPrice_sq
}: IWatchListItemProps) => {
  return (
    <View>
      <Text style={styles.homeListHeader}>{catname}</Text>
      <View style={styles.homeListItem}>
        <Text>{catfathername}</Text>
      </View>
    </View>
  );
};

export default WatchListItem;

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
