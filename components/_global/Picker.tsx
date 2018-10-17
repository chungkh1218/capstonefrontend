import * as React from "react";
import {
  StyleSheet,
  View,
  Animated,
  PickerIOS,
  TouchableHighlight,
  Dimensions
} from "react-native";
import { Text } from "react-native-elements";

interface IPickerProps {
  offSet: any;
  showtime: string;
  closeModal: () => void;
  changeTime: (time: any) => any;
}

let deviceHeight = Dimensions.get("window").height;
let PickerItemIOS = PickerIOS.Item;
let showtimes = [
  { time: "Island West" },
  { time: "Central" },
  { time: "Sheung Wan" },
  { time: "Mid - Level" },
  { time: "Wan Chai" },
  { time: "Causeway Bay" },
  { time: "Tin Hau" },
  { time: "Tai Hang" },
  { time: "North Point" },
  { time: "Fortress Hill" },
  { time: "Quarry Bay" },
  { time: "TaiKoo" },
  { time: "Sai WanHo" },
  { time: "Shau Kei Wan" },
  { time: "Heng Fa Chuen" },
  { time: "Chai Wan" },
  { time: "Shek O" },
  { time: "Aberdeen" },
  { time: "Island South" }
];

class Picker extends React.Component<IPickerProps, {}> {
  constructor(props: IPickerProps) {
    super(props);
  }
  componentDidMount() {
    Animated.timing(this.props.offSet, {
      duration: 300,
      toValue: 100
    }).start();
  }
  closeModal = () => {
    Animated.timing(this.props.offSet, {
      duration: 300,
      toValue: deviceHeight
    }).start(this.props.closeModal);
  };
  render() {
    return (
      // this.props.offSet
      <Animated.View
        style={{ transform: [{ translateY: 0 }], backgroundColor: "white" }}
      >
        <View style={styles.closeButtonContainer}>
          <TouchableHighlight
            onPress={this.closeModal}
            underlayColor="transparent"
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Choose</Text>
          </TouchableHighlight>
        </View>
        <PickerIOS
          selectedValue={this.props.showtime}
          onValueChange={time => this.props.changeTime(time)}
        >
          {Object.keys(showtimes).map((time, index) => (
            <PickerItemIOS
              key={time}
              value={time}
              label={showtimes[index].time}
            />
          ))}
        </PickerIOS>
      </Animated.View>
    );
  }
}
export default Picker;

var styles = StyleSheet.create({
  closeButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    borderTopColor: "#e2e2e2",
    borderTopWidth: 1,
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1,
    width: Dimensions.get("window").width
  },
  closeButton: {
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  closeButtonText: {
    color: "blue"
  }
});
