import { Platform } from "react-native";
const Colors = {
    green: "#254745",
    white: "#FAF8F6",
    text: '#000',
    background: '#fff',
    tabIconDefault: '#ccc',
    tabIconFocused: "#000",
    tabMidBtn: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#254745",
      width: Platform.OS == "ios" ? 50 : 60,
      height: Platform.OS == "ios" ? 50 : 60,
      top: Platform.OS == "ios" ? -10 : -20,
      borderRadius: Platform.OS == "ios" ? 25 : 30,
    }
};


export default Colors;