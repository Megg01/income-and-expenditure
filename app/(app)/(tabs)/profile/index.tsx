import { useRouter } from "expo-router";
import { memo, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Upbar from "./components/upbar";
import { GlobalContext } from "@/context/globalCtx";
import Global from "@/constants/Global";
import ActionLabel from "./components/actionLabel";

import Wallet from "@/assets/icons/wallet.png";
import Settings from "@/assets/icons/settings.png";
import Logout from "@/assets/icons/logout.png";
import Export from "@/assets/icons/export.png";
import { useAuth } from "@clerk/clerk-expo";

const Index = () => {
  const router = useRouter();
  const { signOut } = useAuth();
  const context = useContext(GlobalContext);

  const logOut = async () => {
    await signOut();
    router.navigate("/(sign-in)");
  };

  const handleExport = () => {};

  const handleSettings = () => {};

  const handleWallet = () => {};

  return (
    <SafeAreaView style={style.container}>
      <Upbar name={context?.data?.userInfo?.lastName} />
      <View style={style.bottomContainer}>
        <ActionLabel img={Wallet} name="Хэтэвч" onPress={handleWallet} />
        <ActionLabel img={Settings} name="Тохиргоо" onPress={handleSettings} />
        <ActionLabel
          img={Export}
          name="Экселээс татах"
          onPress={handleExport}
        />
        <ActionLabel img={Logout} name="Системээс гарах" onPress={logOut} />
      </View>
    </SafeAreaView>
  );
};

export default memo(Index);

const style = StyleSheet.create({
  container: {
    height: "100%",
    padding: Global.padding.screen,
    display: "flex",
    paddingTop: 100,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 50,
  },
  bottomContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    width: "100%",
  },
});
