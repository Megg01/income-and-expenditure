import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Balance, Card, InEx, RecentTrans, Spend } from "@/components";
import { memo } from "react";
import Global from "@/constants/Global";

const Index = () => {
  return (
    <ScrollView style={style.container}>
      <Balance value={250400} />
      <View style={style.inexContainer}>
        <InEx type="in" value={10000000} />
        <InEx type="ex" value={10000000} />
      </View>
      <Spend />
      <RecentTrans />
      <Card
        title="Хувцас"
        content="Цамц авсан."
        value={120}
        type="income"
        isIncome
        date="2023-03-22"
      />
    </ScrollView>
  );
};

export default memo(Index);

const style = StyleSheet.create({
  container: {
    paddingHorizontal: Global.padding.screen,
    display: "flex",
    flexDirection: "column",
    // borderWidth: 1,
  },
  inexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
