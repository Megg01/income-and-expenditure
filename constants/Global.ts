import { Platform } from "react-native";
const Global = {
  colors: {
    green: "#254745",
    white: "#FAF8F6",
    gray: "#91919F",
    text: "#000",
    aqua: "aquamerine",
    background: "#fff",
    income: "#00A86B",
    expense: "#FF6961",
  },
  padding: {
    screen: 10,
  },
  tabIconDefault: "#ccc",
  tabIconFocused: "#000",
  tabMidBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#254745",
    width: Platform.OS == "ios" ? 50 : 60,
    height: Platform.OS == "ios" ? 50 : 60,
    top: Platform.OS == "ios" ? -10 : -20,
    borderRadius: Platform.OS == "ios" ? 25 : 30,
  },
};

export default Global;
