import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import Wallet from "@/assets/icons/wallet.png";
import Global from "@/constants/Global";
import { Button } from "react-native-paper";

interface Props {
  img?: string | any;
  name: string;
  onPress: () => void;
}

const ActionLabel = ({ img = Wallet, name, onPress }: Props) => {
  return (
    <Pressable style={style.container} onPress={onPress}>
      <View style={style.imgContainer}>
        <Image source={img} width={56} height={56} />
      </View>
      <Text style={style.name}>{name}</Text>
    </Pressable>
  );
};

export default ActionLabel;

const style = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: Global.colors.white,
    borderWidth: 1,
    borderColor: Global.colors.whiteGreen,
  },
  imgContainer: {},
  name: {
    fontSize: 16,
    color: Global.colors.green,
  },
});
