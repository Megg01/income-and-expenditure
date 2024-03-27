import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Balance, Card, InEx, RecentTrans, Spend } from "@/components";
import { memo, useContext } from "react";
import Global from "@/constants/Global";
import { GlobalContext } from "@/context/globalCtx";

const Index = () => {
  const context = useContext(GlobalContext);
  const { userInfo } = context;
  console.log("🚀 ~ Index ~ userInfo:", userInfo);

  return (
    <ScrollView style={style.container}>
      <Balance value={userInfo?.totalIncome - userInfo?.totalExpense | 0} />
      <View style={style.inexContainer}>
        <InEx type="in" value={userInfo?.totalIncome} />
        <InEx type="ex" value={userInfo?.totalExpense} />
      </View>
      <Spend />
      <RecentTrans />
    </ScrollView>
  );
};

export default memo(Index);

const style = StyleSheet.create({
  container: {
    paddingHorizontal: Global.padding.screen,
    display: "flex",
    flexDirection: "column",
  },
  inexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
