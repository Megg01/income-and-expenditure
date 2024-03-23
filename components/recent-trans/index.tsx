import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import ButtonOpacity from "../button-opacity";

const Index: React.FC = () => {
  return (
    <View style={style.container}>
      <View style={style.top}>
        <Text style={style.text}>Сүүлийн гүйлгээ</Text>
        <ButtonOpacity onPress={() => {}} label="Бүгдийг харах" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    maxWidth: "100%",
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
