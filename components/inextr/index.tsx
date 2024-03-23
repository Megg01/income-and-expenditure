import { FontAwesome } from "@expo/vector-icons";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatCurrency } from "@/utils";
import Global from "@/constants/Global";
type Props = {
  type: "in" | "ex";
};

const Index: React.FC = () => {
  return (
    <View style={style.container}>
      <View
        style={{
          backgroundColor: "#FFF",
          paddingVertical: 10,
          paddingHorizontal: 13,
          borderRadius: 15,
        }}
      >
        <FontAwesome size={28} name="money" />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          columnGap: 5,
        }}
      >
        <Text style={style.text}>"Зарлага"</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  income: {
    backgroundColor: Global.colors.income,
  },
  expense: {
    backgroundColor: Global.colors.expense,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 20,
    maxWidth: "50%",
    borderRadius: 22,
  },
  text: {
    paddingHorizontal: 5,
    color: Global.colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default memo(Index);
