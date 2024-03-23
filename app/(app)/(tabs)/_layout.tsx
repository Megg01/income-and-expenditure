import { Tabs } from "expo-router";
import { AntDesign, FontAwesome, Foundation } from "@expo/vector-icons";
import { Platform, StyleSheet, View } from "react-native";
import Global from "@/constants/Global";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Нүүр",
          title: "Нүүр",
          tabBarActiveTintColor: Global.tabIconFocused,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              size={28}
              style={{ marginBottom: -3 }}
              name="home"
              color={focused ? Global.tabIconFocused : Global.tabIconDefault}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="trans"
        options={{
          header: () => <View />,
          tabBarLabel: "Гүйлгээ",
          title: "Гүйлгээ",
          tabBarActiveTintColor: Global.tabIconFocused,
          tabBarIcon: ({ focused }) => (
            <View
              style={{ ...style.midbtn, backgroundColor: Global.colors.green }}
            >
              <FontAwesome name="plus" size={28} color={Global.colors.white} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          tabBarLabel: "Нийт",
          title: "Нийт",
          tabBarActiveTintColor: Global.tabIconFocused,
          tabBarIcon: ({ focused }) => (
            <Foundation
              size={28}
              style={{ marginBottom: -3 }}
              name="graph-bar"
              color={focused ? Global.tabIconFocused : Global.tabIconDefault}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const style = StyleSheet.create({
  midbtn: {
    alignItems: "center",
    justifyContent: "center",
    width: Platform.OS == "ios" ? 50 : 60,
    height: Platform.OS == "ios" ? 50 : 60,
    top: Platform.OS == "ios" ? -10 : -20,
    borderRadius: Platform.OS == "ios" ? 25 : 30,
  },
});
