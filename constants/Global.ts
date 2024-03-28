import { Platform } from "react-native";
const Global = {
  colors: {
    green: "#333333",
    whiteGreen: "#d8e6e5",
    white: "#FAF8F6",
    gray: "#91919F",
    text: "#000",
    whiteBorder: "#F1F1FA",
    aqua: "aquamerine",
    background: "#fff",
    income: "#00A86B",
    expense: "#FF6961",
    violet: "#7F3DFF",
    blue: "#0077FF"
  },
  padding: {
    screen: 10,
    inputMoney: 20,
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
