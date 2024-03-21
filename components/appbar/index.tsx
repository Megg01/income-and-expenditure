import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useDrawerStatus } from "@react-navigation/drawer";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

const Index: React.FC = () => {
  const navigation = useNavigation();
  const handleDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <Appbar.Header style={style.header} safeAreaInsets={{ top: 0 }}>
      <Appbar.Action
        icon={({ color }) => (
          <Ionicons
            size={24}
            style={{ marginBottom: -3 }}
            name="person"
            color={color}
          />
        )}
        onPress={handleDrawer}
      />
      {/* <Appbar.Action
        icon={({ color }) => (
          <AntDesign
            size={28}
            style={{ marginBottom: -3 }}
            name="profile"
            color={color}
          />
        )}
        onPress={() => {}}
      /> */}
      <Appbar.Action
        icon={({ color }) => (
          <MaterialIcons
            name="notifications-none"
            size={24}
            style={{ marginBottom: -3 }}
            color={color}
          />
        )}
        onPress={() => {}}
      />
    </Appbar.Header>
  );
};

const style = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    top: -10,
    borderWidth: 1,
  },
});

export default memo(Index);
