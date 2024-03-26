import { Tabs, useRouter } from "expo-router";
import { AntDesign, FontAwesome, Foundation } from "@expo/vector-icons";
import { Platform, StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";
import Global from "@/constants/Global";
import Button from "@/components/button";
import { AppBar } from "@/components";

export default function TabsLayout() {
  const router = useRouter();

  const handlePressMid = () => {
    router.navigate("/(app)/screens/input");
  };

  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          // headerShown: true,
          header: () => <AppBar />,
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
          headerShown: true,
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
          tabBarHideOnKeyboard: true,
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            handlePressMid();
          },
        })}
      />
      <Tabs.Screen
        name="budget"
        options={{
          headerShown: true,
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
