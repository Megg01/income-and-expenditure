import * as React from "react";
import { Card, Text } from "react-native-paper";
import { Image, Pressable, StyleSheet, View } from "react-native";
import Global from "@/constants/Global";
import { formatCurrency } from "@/utils";
import Shopping from "@/assets/icons/shopping.png";
import formatDate from "@/utils/dateFormat";
import { router } from "expo-router";

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
    | "passive"
    | "income"
    | "expense"
    | "transfer";
  date: string;
  id: string;
  item: any;
};

const Component = ({ id, title, content, value, type, date, item }: Props) => {
  const navigateTo = () => {
    router.setParams(item);
    router.push({ pathname: `/transactions/${id}`, params: item });
  };

  return (
    <Card
      contentStyle={style.card}
      theme={{ roundness: 24 }}
      mode="contained"
      onPress={() => navigateTo()}
      id={id}
    >
      <View style={style.first}>
        <View style={style.iconContainer}>
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
            color:
              type === "income"
                ? Global.colors.income
                : type === "expense"
                ? Global.colors.expense
                : Global.colors.blue,
          }}
        >
          {formatCurrency(value * (type === "expense" ? -1 : 1))}
        </Text>
        <Text style={style.date}>{formatDate(date, false)}</Text>
      </View>
    </Card>
  );
};

export default React.memo(Component);

const style = StyleSheet.create({
  card: {
    borderRadius: 24,
    maxWidth: "100%",
    minHeight: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Global.colors.background,
    padding: 15,
    shadowOffset: { height: 2, width: 1 },
    shadowOpacity: 0.1,
  },
  first: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
  },
  last: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 10,
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
