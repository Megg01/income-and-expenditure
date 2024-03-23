import { AppBar } from "@/components";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Slot, router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useContext, useEffect } from "react";
import request from "@/utils/customRequest";
import { useAuth, useUser } from "@clerk/clerk-expo";

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
        />
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
        />
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
  const { signOut } = useAuth();
  const handlePress = async () => {
    await signOut();
    router.navigate("/(sign-in)");
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await request({
    //       method: "GET",
    //       url: "http://10.150.10.70:5000/api/users",
    //     });
    //     console.log("🚀 ~ fetchData ~ response:", response);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData();
  }, []);

  return (
    <Drawer
      screenOptions={{ header: () => <AppBar /> }}
      drawerContent={() => <CustomDrawerContent handlePress={handlePress} />}
      initialRouteName="/(app)/(tabs)/home"
    />
  );
}

const style = StyleSheet.create({
  logout: {
    backgroundColor: "#f2e3dc",
  },
});
