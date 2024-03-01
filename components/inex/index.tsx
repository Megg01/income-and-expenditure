import { FontAwesome } from "@expo/vector-icons";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatCurrency } from "@/utils";
type Props = {
  value: number;
  type: "in" | "ex";
};

const Index: React.FC<Props> = ({ value, type }) => {
  return (
    <View
      style={[style.container, type === "in" ? style.income : style.expense]}
    >
      <View style={{ backgroundColor: "#FFF", padding: 12, borderRadius: 15 }}>
        <FontAwesome size={28} name="money" />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          paddingHorizontal: 5,
        }}
      >
        <Text style={style.text}>{type === "in" ? "Орлого" : "Зарлага"}</Text>
        <Text style={style.text}>{formatCurrency(value)}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  income: {
    backgroundColor: "#00A86B",
  },
  expense: {},
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: "50%",
    borderRadius: 18,
  },
  text: {
    color: "white",
    fontSize: 17,
  },
});

export default memo(Index);
