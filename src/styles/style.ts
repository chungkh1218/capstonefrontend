import { StyleSheet, Dimensions } from "react-native";

// Home.tsx
const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  homePanel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: 100,
    backgroundColor: "beige"
  },
  homeListItem: {
    backgroundColor: "red",
    flex: 1,
    flexDirection: "row"
  },
  item: {
    backgroundColor: "lightblue",
    borderWidth: 1,
    borderColor: "white",
    fontSize: 16,
    textAlign: "left",
    padding: 20,
    width: Dimensions.get("window").width
  },
  districtbox: {
    flexDirection: "row"
  },
  districtbar: {
    flexDirection: "row",
    alignItems: "center"
  },
  propertylist: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "white",
    fontSize: 30
  }
});
export default homeStyles;
