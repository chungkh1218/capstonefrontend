import * as React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { connect } from "react-redux";
import { IRootState } from "../redux/store";
import { ListWatchItems } from "../redux/actions/WatchListAction";
import { IAuthUser, IWatchList } from "../models/models";
import WatchListList from "../components/watchlist/WatchListList";
import AuthRequest from "../components/auth/AuthRequest";
import ProgressBar from "../components/_global/ProgressBar";

interface IWatchListProps {
  navigator: any;
  user: IAuthUser;
  watchList: IWatchList[];
  ListItems: () => void;
}

interface IWatchListStates {
  // isLoading: boolean;
}

class WatchList extends React.Component<IWatchListProps, IWatchListStates> {
  constructor(props: IWatchListProps) {
    super(props);

    // this.state = {
    //   isLoading: true
    // };
  }

  componentWillMount() {
    this._retrieveWatchList();
    console.log("WatchTab Will Mounting...");
  }

  // componentWillReceiveProps(watchList: any) {
  //   if (watchList) {
  //     this.setState({ isLoading: false });
  //     console.log("WatchTab Will Receiving Props...");
  //   }
  // }

  // componentWillUnmount() {
  //   this.props.watchList === null;
  // }

  _retrieveWatchList() {
    this.props.ListItems();
  }

  public render() {
    console.log(this.props.watchList, String(new Date()));

    if (!this.props.user.isAuthenticated) {
      return (
        <View style={styles.container}>
          <AuthRequest navigator={this.props.navigator} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <WatchListList
            navigator={this.props.navigator}
            watchList={this.props.watchList}
          />
        </View>
      );
      // return this.state.isLoading ? (
      //   <View style={styles.progressBar}>
      //     <ProgressBar />
      //   </View>
      // ) : (
      //   <View style={styles.container}>
      //     <WatchListList
      //       navigator={this.props.navigator}
      //       watchList={this.props.watchList}
      //     />
      //   </View>
      // );
    }
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    user: state.auth.user,
    watchList: state.watches.watchList
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ListItems: () => {
      dispatch(ListWatchItems());
    }
  };
};

// Connect to store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: Dimensions.get("window").width
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  homeList: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: 120,
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
  },
  progressBar: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
