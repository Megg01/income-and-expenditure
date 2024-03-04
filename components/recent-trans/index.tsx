import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import ButtonOpacity from "../button-opacity";

const Index: React.FC = () => {
  return (
    <View style={style.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={style.text}>Сүүлийн гүйлгээ</Text>
        <ButtonOpacity
          onPress={() => router.navigate("/(sign-in)")}
          label="Бүгдийг харах"
        />
      </View>
      
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    maxWidth: "100%",
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default memo(Index);
