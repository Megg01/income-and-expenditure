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
            size={28}
            name="person"
          />
        )}
        onPress={handleDrawer}
      />
      <Appbar.Action
        icon={({ color }) => (
          <MaterialIcons
            name="notifications-none"
            size={28}
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
    borderWidth: 1,
    padding: 5,
  },
});

export default memo(Index);
