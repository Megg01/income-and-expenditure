import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
type Props = {
  value: number;
  type: "in" | "ex";
};

const Index: React.FC<Props> = ({ value, type }) => {
  return (
    <View
      style={[style.container, type === "in" ? style.income : style.expense]}
    >
      <Text>{value}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  income: {
    backgroundColor: "#00A86B",
  },
  expense: {},
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    width: "40%",
    borderRadius: 10,
  },
});

export default memo(Index);
