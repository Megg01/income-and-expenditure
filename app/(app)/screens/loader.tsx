// import { View, Text, Modal, StyleSheet } from "react-native";
// import React, { memo, useContext } from "react";
// import { GlobalContext } from "@/context/globalCtx";
// import Global from "@/constants/Global";
// import { ActivityIndicator } from "react-native-paper";

// const Loader = () => {
//   const context = useContext(GlobalContext);

//   return (
//     <Modal transparent visible={context?.loading}>
//       <View style={styles.MainContainer}>
//         <ActivityIndicator
//           size="large"
//           color={Global.colors.green}
//           theme={{ colors: { primary: Global.colors.green } }}
//         />
//       </View>
//     </Modal>
//   );
// };

// export default memo(Loader);

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
