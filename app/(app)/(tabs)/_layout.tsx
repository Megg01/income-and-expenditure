import { Tabs } from "expo-router";
import { AntDesign, FontAwesome, Foundation } from "@expo/vector-icons";
import { Platform, View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Нүүр",
          title: "Нүүр",
          tabBarIcon: ({ focused }) => (
            <AntDesign size={28} style={{ marginBottom: -3 }} name="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="trans"
        options={{
          tabBarLabel: "Гүйлгээ",
          title: "Гүйлгээ",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#16247d",
                width: Platform.OS == "ios" ? 50 : 60,
                height: Platform.OS == "ios" ? 50 : 60,
                top: Platform.OS == "ios" ? -10 : -20,
                borderRadius: Platform.OS == "ios" ? 25 : 30,
              }}
            >
              <FontAwesome name="exchange" size={24} color="#fff" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          tabBarLabel: "Нийт",
          title: "Нийт",
          tabBarIcon: ({ focused }) => (
            <Foundation
              size={28}
              style={{ marginBottom: -3 }}
              name="graph-bar"
            />
          ),
        }}
      />
    </Tabs>
  );
}
