import * as React from "react";
import { Card, Text } from "react-native-paper";
import { Image, Pressable, StyleSheet, View } from "react-native";
import Global from "@/constants/Global";
import { formatCurrency } from "@/utils";
import Shopping from "@/assets/icons/shopping.png";

type Props = {
  title: string;
  content: string;
  value: number;
  type:
    | string
    | "shopping"
    | "food"
    | "subscription"
    | "transport"
    | "salary"
    | "passive";
  isIncome: boolean;
  date: string;
};

const Component = ({ title, content, value, type, isIncome, date }: Props) => (
  <Card
    contentStyle={style.card}
    theme={{ roundness: 24 }}
    onPress={() => alert("You pressed a button")}
  >
    <View style={style.first}>
      <View>
        <Image source={Shopping} style={{ width: 40, height: 40 }} />
      </View>
      <View style={style.mid}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.content}>{content}</Text>
      </View>
    </View>
    <View style={style.last}>
      <Text
        style={{
          ...style.value,
          color: isIncome ? Global.colors.income : Global.colors.expense,
        }}
      >
        {formatCurrency(value * (type === "in" ? 1 : -1))}
      </Text>
      <Text style={style.date}>{date}</Text>
    </View>
  </Card>
);

export default React.memo(Component);

const style = StyleSheet.create({
  card: {
    borderRadius: 24,
    maxWidth: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
