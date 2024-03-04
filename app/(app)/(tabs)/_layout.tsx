import { Tabs } from "expo-router";
import { AntDesign, FontAwesome, Foundation } from "@expo/vector-icons";
import { Platform, StyleSheet, View } from "react-native";
import Colors from "@/constants/Colors";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Нүүр",
          title: "Нүүр",
          tabBarActiveTintColor: Colors.tabIconFocused,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              size={28}
              style={{ marginBottom: -3 }}
              name="home"
              color={focused ? Colors.tabIconFocused : Colors.tabIconDefault}
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
          tabBarActiveTintColor: Colors.tabIconFocused,
          tabBarIcon: ({ focused }) => (
            <View style={{ ...style.midbtn, backgroundColor: Colors.green }}>
              <FontAwesome name="plus" size={28} color={Colors.white} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          tabBarLabel: "Нийт",
          title: "Нийт",
          tabBarActiveTintColor: Colors.tabIconFocused,
          tabBarIcon: ({ focused }) => (
            <Foundation
              size={28}
              style={{ marginBottom: -3 }}
              name="graph-bar"
              color={focused ? Colors.tabIconFocused : Colors.tabIconDefault}
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
