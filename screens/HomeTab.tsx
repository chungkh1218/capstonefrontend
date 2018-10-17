import * as React from "react";
import { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Picker,
  TouchableHighlight,
  Animated,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";

import { NavigationComponentProps } from "react-native-navigation";
import ModalExample from "../components/home/districtbotton";
import SearchBar from "../components/home/searchbar";
// import Picker from "../components/_global/Picker";
import Modal from "react-native-modal";

import PropertyList from "../components/home/propertylist";
import { IAuthUser } from "../models/models";
import { IProperty } from "../models/models";
import { IRootState } from "../redux/store";
import { SearchPropFromAPIAction } from "../redux/actions/SearchActions";
import { connect } from "react-redux";
import SplashScreen from "react-native-splash-screen";
import ProgressBar from "../components/_global/ProgressBar";
interface IHomeProps extends NavigationComponentProps {
  properties: IProperty[];
  user: IAuthUser;
  loadProperties: (search?: string, condition?: string) => void;
  navigator: any;
}

interface IHomeStates {
  isLoading: boolean;
  user: string;

  time: string;
  modal: boolean;
  timeIndex: number;
  offSet: any;

  visibleModal: any;

  options: string[];
}

let deviceHeight = Dimensions.get("window").height;
let hkOptions = [
  "Island West",
  "Central",
  "Sheung Wan",
  "Mid - Level",
  "Wan Chai",
  "Causeway Bay",
  "Tin Hau",
  "Tai Hang",
  "North Point",
  "Fortress Hill",
  "Quarry Bay",
  "TaiKoo",
  "Sai WanHo",
  "Shau Kei Wan",
  "Heng Fa Chuen",
  "Chai Wan",
  "Shek O",
  "Aberdeen",
  "Island South"
];
let klOption = [
  "Yau Tong",
  "Nam Tin",
  "Ngau Tau Kok",
  "Kwun Tong",
  "San Po Kong",
  "Kowloon Bay",
  "Wong Tai Sin",
  "Diamond Hill",
  "Kowloon City",
  "Kowloon Tong",
  "Ho Man Tin",
  "Yau Yat Tsuen",
  "Sham Shui Po",
  "Shek Kip Mei",
  "Lai Chi Kok",
  "Cheung Sha Wan",
  "Mei Foo",
  "Lai King",
  "Tai Kok Tsui",
  "Olympic",
  "Kowloon Station",
  "Prince Edward",
  "Mong Kok",
  "Yau Ma Tei",
  "Tsim Sha Tsui",
  "Jordan",
  "Hung Hom",
  "Whampoa"
];
let ntOptions = [
  "Tuen Mun",
  "Yuen Long",
  "ShaTin",
  "Tai Po",
  "Sai Kung",
  "Clearwater Bay",
  "Ma On Shan",
  "Tseung Kwan O",
  "Fo Tan",
  "Sheung Shui",
  "Tai Wai",
  "Fan Ling",
  "Tin Shui Wai",
  "Tsuen Wan",
  "Kwai Chung",
  "Tsing Yi",
  "Kwai Fong",
  "Tung Chung"
];
let liOptions = [
  "Ma Wan",
  "Discovery Bay",
  "Tung Chung",
  "South Lantau Island",
  "Peng Chau",
  "Tai O",
  "Lamma Island",
  "Cheung Chau",
  "Other Islands"
];

class Home extends Component<IHomeProps, IHomeStates> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {
      isLoading: true,
      user: "",

      time: "7:00",
      modal: false,
      timeIndex: 0,
      offSet: new Animated.Value(deviceHeight),

      visibleModal: null,

      options: hkOptions
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  componentWillMount() {
    if (!this.props.user.isAuthenticated) {
      this.props.navigator.showModal({
        screen: "example.landingpage",
        navigatorStyle: {
          screenBackgroundColor: "#304A8B"
        }
      });
    }
    this.props.loadProperties("Central", "district");
  }

  componentWillReceiveProps(properties: any) {
    if (properties) {
      this.setState({ isLoading: false });
      console.log("HomeTab Will Receiving Props...");
    }
  }

  _onSearchBarChanged = (search: string, condition: string) => {
    this.props.loadProperties(search, condition);
  };

  _updateUser = (user: string) => {
    this.setState({ user: user });
  };

  _changeTime = (time: any) => {
    this.setState({
      time,
      timeIndex: time
    });
  };

  renderButton = (text: string, onPress: any) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  renderModalContent = (dataIn: string[]) => (
    <View style={styles.modalContent}>
      <FlatList
        data={dataIn}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              this.props.loadProperties(item, "district");
              this.setState({ visibleModal: null });
            }}
          >
            <Text style={{ padding: 8, width: 320 }}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
      />
      {this.renderButton("Close", () => this.setState({ visibleModal: null }))}
    </View>
  );

  render() {
    if (this.props.user.isAuthenticated) {
      this.props.navigator.dismissModal({
        screen: "example.landingpage"
      });
    }
    return (
      <View style={styles.container}>
        {/* <SearchBar
          isLoading={false}
          onSearchChange={this._onSearchBarChanged}
        /> */}
        {/* <ModalExample
          onModalPressed={value => {
            this.props.loadProperties(value, "district");
          }}
        /> */}
        <View style={styles.modal}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ visibleModal: 5, options: hkOptions });
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>HKI</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({ visibleModal: 5, options: klOption });
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>KLW</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({ visibleModal: 5, options: ntOptions });
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>N.T.</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({ visibleModal: 5, options: liOptions });
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>LAN</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Modal
          isVisible={this.state.visibleModal === 5}
          style={styles.bottomModal}
        >
          {this.renderModalContent(this.state.options)}
        </Modal>

        {/* IOS Picker */}
        {/* <View style={styles.modal}>
          <TouchableHighlight
            style={styles.button}
            underlayColor="transparent"
            onPress={() => this.setState({ modal: true })}
          >
            <Text style={styles.buttonText}>
              HK & {showtimes[this.state.timeIndex].time}
            </Text>
          </TouchableHighlight>
        </View> */}

        {/* <View style={styles.showtimeContainer}>
          <Text style={styles.showtime}>
            Now viewing showtime of {showtimes[this.state.timeIndex].time}
          </Text>
        </View> */}

        {this.state.modal ? (
          <Picker
            closeModal={() => this.setState({ modal: false })}
            offSet={this.state.offSet}
            changeTime={this._changeTime}
            showtime={this.state.time}
          />
        ) : null}

        {this.state.isLoading ? (
          <View style={styles.progressBar}>
            <ProgressBar />
          </View>
        ) : (
          <PropertyList
            navigator={this.props.navigator}
            properties={this.props.properties}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    properties: state.properties.propertylist,
    user: state.auth.user
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadProperties: (search?: string, condition?: string) => {
      dispatch(SearchPropFromAPIAction(search, condition));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)"
  },
  progressBar: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width
  },
  text: {
    fontSize: 30,
    alignSelf: "center",
    color: "red"
  },

  // PickerIOS
  showtimeContainer: {
    borderTopColor: "#ededed",
    borderTopWidth: 1
  },
  showtime: {
    padding: 20,
    textAlign: "center"
  },
  button: {
    marginTop: 18,
    marginBottom: 18,
    padding: "auto"
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  },
  modalContent: {
    height: 300,
    backgroundColor: "rgba(255, 255, 255, 0.97)",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12
    // borderColor: "rgba(0, 0, 0, 0.1)"
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  modal: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FACC56"
  }
});
