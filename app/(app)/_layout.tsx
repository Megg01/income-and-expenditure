import { AppBar } from "@/components";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CustomDrawerContent = () => {
  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        paddingBottom: 25,
      }}
    >
      <View>
        <DrawerItem
          label="Нүүр"
          icon={({ color, size }) => (
            <AntDesign
              size={24}
              style={{ marginBottom: -3 }}
              name="home"
              color={color}
            />
          )}
          onPress={() => {
            router.navigate("/(app)/(tabs)/home");
          }}
        ></DrawerItem>
        <DrawerItem
          label="Хувийн мэдээлэл"
          icon={({ color, size }) => (
            <AntDesign
              size={24}
              style={{ marginBottom: -3 }}
              name="profile"
              color={color}
            />
          )}
          onPress={() => {
            router.navigate("/(app)/(profile)");
          }}
        ></DrawerItem>
      </View>
      <DrawerItem
        label="Гарах"
        style={style.logout}
        icon={({ color, size }) => (
          <AntDesign
            size={24}
            style={{ marginBottom: -3 }}
            name="logout"
            color={color}
          />
        )}
        onPress={() => {
          router.navigate("/(sign-in)");
        }}
      ></DrawerItem>
    </DrawerContentScrollView>
  );
};

export default function AppLayout() {
  return (
    <Drawer
      screenOptions={{ header: () => <AppBar /> }}
      drawerContent={() => <CustomDrawerContent />}
    >
      <Drawer.Screen name="(profile)" options={{ headerShown: true }} />
    </Drawer>
  );
}

const style = StyleSheet.create({
  logout: {
    backgroundColor: "#f2e3dc",
  },
});
