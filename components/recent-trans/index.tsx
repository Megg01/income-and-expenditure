import React, { memo, useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import ButtonOpacity from "../button-opacity";
import { FlashList } from "@shopify/flash-list";
import Card from "./card";
// import { GlobalContext } from "@/context/globalCtx";
import request from "@/context/fetch/request";
import { useUser } from "@clerk/clerk-expo";
import { GlobalContext } from "@/context";

const Index = () => {
  const user = useUser()?.user?.id;
  const context = useContext(GlobalContext);
  console.log("🚀 ~ Index ~ context:", context);

  const [recentTransactions, setRecentTransactions] = useState();

  useEffect(() => {
    context
      .request({
        url: "transaction/all",
        method: "POST",
        model: "transactionall",
        body: { user },
      })
      .then((response: any) => {
        console.log("🚀 ~ .then ~ response:", response);
        if (response?.success) {
          setRecentTransactions(response?.data?.slice(0, 3));
        }
      });
  }, []);

  const renderItem = (item: any) => {
    console.log("🚀 ~ renderItem ~ item:", item);
    return (
      <View style={{ paddingTop: 6 }}>
        <Card
          title={item?.category}
          content={item?.description}
          value={item?.value}
          type={item?.type}
          date={item?.date}
        />
      </View>
    );
  };

  return (
    <View style={style.container}>
      <View style={style.top}>
        <Text style={style.text}>Сүүлийн гүйлгээ</Text>
        <ButtonOpacity onPress={() => {}} label="Бүгдийг харах" />
      </View>

      <FlashList
        data={recentTransactions}
        renderItem={({ item }: any) => {
          return renderItem(item);
        }}
        ListEmptyComponent={<Text>Та гүйлгээ хийгээгүй байна</Text>}
        estimatedItemSize={60}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default memo(Index);
