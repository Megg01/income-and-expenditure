import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatCurrency } from "@/utils";
import Global from "@/constants/Global";
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
  },
  graytext: {
    color: Global.colors.gray,
    fontSize: 18,
  },
  text: {
    paddingTop: 2,
    color: Global.colors.text,
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default memo(Index);
