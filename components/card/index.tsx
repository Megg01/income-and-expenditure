import * as React from "react";
import { Text } from "react-native-paper";
import { Image, StyleSheet, View } from "react-native";
import Global from "@/constants/Global";
import { formatCurrency } from "@/utils";
import Shopping from "@/assets/icons/shopping.svg";
import SvgUri from "react-native-svg-uri";

type Props = {
  title: string;
  content: string;
  value: number;
  type: string;
  date: string;
};

const Component = ({ title, content, value, type, date }: Props) => (
  <View style={style.card}>
    <View style={style.first}>
      <View>
        <SvgUri width="50" height="50" svgXmlData={Shopping} />
      </View>
      <View style={style.mid}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.content}>{content}</Text>
      </View>
    </View>
    <View style={style.last}>
      <Text style={style.value}>{formatCurrency(value)}</Text>
      <Text style={style.date}>{date}</Text>
    </View>
  </View>
);

export default React.memo(Component);

const style = StyleSheet.create({
  card: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 24,
    backgroundColor: Global.colors.background,
    padding: 15,
  },
  first: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  mid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 6,
  },
  last: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 6,
  },
  title: {
    color: Global.colors.text,
    fontSize: 17,
    fontWeight: "bold",
  },
  content: {
    color: Global.colors.gray,
  },
  value: {
    color: Global.colors.expense,
    fontWeight: "bold",
    fontSize: 17,
  },
  date: {
    color: Global.colors.gray,
  },
});
