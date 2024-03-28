import { useRouter } from "expo-router";
import { memo, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Upbar from "./components/upbar";
import { GlobalContext } from "@/context/globalCtx";
import Global from "@/constants/Global";

const Index = () => {
  const router = useRouter();
  const context = useContext(GlobalContext);

  const handlePress = async () => {
    // router.navigate("/(auth)/(sign-in)");
  };
  return (
    <SafeAreaView style={style.container}>
      <Upbar name={context?.data?.userInfo?.lastName} />
    </SafeAreaView>
  );
};

export default memo(Index);

const style = StyleSheet.create({
  container: {
    height: "100%",
    padding: Global.padding.screen,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});
