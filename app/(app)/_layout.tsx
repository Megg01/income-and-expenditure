import { AppBar } from "@/components";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/authContext";
import fetchRequest from "@/utils/customRequest";

const CustomDrawerContent = ({ handlePress }: { handlePress: () => void }) => {
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
        onPress={handlePress}
      ></DrawerItem>
    </DrawerContentScrollView>
  );
};

export default function AppLayout() {
  const { isAuthenticated, logout, token } = useContext(AuthContext);

  useEffect(() => {
    fetchRequest({ url: "users" }).then((res) => {
      console.log("🚀 ~ useEffect ~ res:", res);
      return;
    });
  }, []);

  const handlePress = async () => {
    const isSuccess = await logout();
    if (isSuccess) {
      router.navigate("/(sign-in)");
    }
  };
  return (
    <Drawer
      screenOptions={{ header: () => <AppBar /> }}
      drawerContent={() => <CustomDrawerContent handlePress={handlePress} />}
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
