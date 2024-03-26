import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import Global from "@/constants/Global";

const Index: React.FC = () => {
  const navigation = useNavigation();
  const handleDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <Appbar.Header style={style.header} safeAreaInsets={{ top: 0 }}>
      <Appbar.Action
        size={28}
        style={style.action}
        icon={({ color }) => <Ionicons name="person" size={28} />}
        onPress={handleDrawer}
      />
      <Appbar.Action
        size={28}
        style={style.action}
        icon={({ color }) => (
          <MaterialIcons name="notifications-none" size={28} />
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
    backgroundColor: "transparent",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: Global.colors.text,
    shadowOpacity: 0.1,
  },
  action: {
    padding: 0,
  },
});

export default memo(Index);
