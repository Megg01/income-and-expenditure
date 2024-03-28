import React, { memo, useContext, useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Global from "@/constants/Global";
import { DetailWidget } from "@/components";
import { IncomeCategories, ExpenseCategories } from "@/static/category";
import { IconButton } from "react-native-paper";
import { InputTypes } from "@/static/types";
import { GlobalContext } from "@/context/globalCtx";
import { showMessage } from "react-native-flash-message";
import formatDate from "@/utils/dateFormat";
import { formatCurrency } from "@/utils";

const Index = () => {
  const context = useContext(GlobalContext);
  const router = useRouter();
  const data = useLocalSearchParams() || {};
  console.log("🚀 ~ Index ~ data:", data);
  const value = formatCurrency(parseInt(data?.value?.toString()));
  const date = formatDate(data?.date?.toString(), true);
  const selected = data?.type?.toString();
  const image = data?.image?.toString();
  const desc = data?.description?.toString();
  const type = data?.type?.toString();
  const cat = data?.category?.toString();
  const to = data?.to?.toString();

  const handleDelete = async () => {
    const res = await context?.request({
      method: "DELETE",
      url: `${type}/${data?.id}`,
      model: "delete",
      isNotification: true,
    });
    if (res?.success) {
      router.back();
      await context?.request({
        url: "transaction/all",
        model: "transactionall",
      });
    }
  };

  return (
    <View style={style.container}>
      <View
        style={[
          style.topContainer,
          {
            backgroundColor:
              selected === "income"
                ? Global.colors.income
                : selected === "expense"
                ? Global.colors.expense
                : Global.colors.blue,
          },
        ]}
      >
        <View style={style.header}>
          <IconButton
            icon="arrow-left"
            iconColor={Global.colors.background}
            onPress={() => {
              router.back();
            }}
          />
          <Text style={style.headerText}>Гүйлгээний дэлгэрэнгүй</Text>
          <IconButton
            icon="trash-can-outline"
            iconColor={Global.colors.background}
            onPress={handleDelete}
          />
        </View>
        <View style={style.inputContainer}>
          <Text style={style.input}>{value}</Text>
          <Text style={style.text}>{date}</Text>
        </View>
      </View>
      <View style={style.middleContainer}>
        <DetailWidget
          type={type}
          cat={cat}
          wallet={type === "transfer" ? to : "wallet"}
        />
        <View style={style.divider} />
      </View>
      <View style={style.botomContainer}>
        <View style={style.descContainer}>
          <Text style={style.titleText}>Тайлбар</Text>
          <Text style={style.descText}>{desc ? desc : "Тайлбар байхгүй."}</Text>
        </View>
        <View style={style.inputFieldsContainer}>
          <Text style={style.titleText}>Зураг</Text>
          {image ? (
            <Image
              resizeMode="contain"
              src={image}
              style={{
                height: "50%",
                width: "50%",
                borderRadius: 10,
              }}
            />
          ) : (
            <Text>Зураг байхгүй байна.</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const screenHeight = Dimensions.get("window").height;

const style = StyleSheet.create({
  income: {
    backgroundColor: Global.colors.income,
  },
  expense: {
    backgroundColor: Global.colors.expense,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 22,
    paddingHorizontal: Global.padding.inputMoney,
    backgroundColor: Global.colors.white,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  topContainer: {
    paddingTop: 50,
    marginHorizontal: -Global.padding.inputMoney,
    paddingHorizontal: Global.padding.inputMoney,
    borderEndStartRadius: 16,
    borderEndEndRadius: 16,
    height: (screenHeight * 30) / 100,
  },
  middleContainer: {
    position: "absolute",
    top: (screenHeight * 25) / 100,
    width: "100%",
    alignSelf: "center",
    zIndex: 4,
  },
  divider: {
    marginTop: 15,
    borderWidth: 0.5,
    borderStyle: "dashed",
  },
  botomContainer: {
    height: (screenHeight * 70) / 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",

    marginHorizontal: -Global.padding.inputMoney,
    paddingHorizontal: Global.padding.inputMoney,
    paddingTop: (screenHeight * 6) / 100 + 20,
  },
  headerText: {
    color: Global.colors.background,
    backgroundColor: "transparent",
    fontSize: 16,
  },
  inputFieldsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 20,

    backgroundColor: Global.colors.background,
    padding: 10,
    borderRadius: 16,
    marginTop: 20,
  },
  text: {
    color: Global.colors.whiteBorder,
    marginTop: 10,
    fontSize: 18,
  },
  textInput: {
    borderRadius: 16,
    borderColor: Global.colors.whiteBorder,
    backgroundColor: Global.colors.background,
    height: 56,
    padding: 10,
    borderWidth: 1,
  },
  input: {
    color: Global.colors.white,
    fontSize: 50,
  },
  descContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 20,
    backgroundColor: Global.colors.background,
    padding: 10,
    borderRadius: 16,
  },
  descText: {
    fontSize: 17,
  },
  titleText: {
    color: Global.colors.gray,
    fontSize: 16,
  },
});

export default memo(Index);
