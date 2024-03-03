import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatCurrency } from "@/utils";
import Colors from "@/constants/Colors";
type Props = {
  value: number;
};

const Index: React.FC<Props> = ({ value }) => {
  return (
    <View style={style.container}>
      <Text style={style.graytext}>{"Үлдэгдэл"}</Text>
      <Text style={style.text}>{formatCurrency(value)}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  graytext: {
    color: Colors.gray,
    fontSize: 16,
  },
  text: {
    paddingHorizontal: 5,
    color: Colors.text,
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default memo(Index);
