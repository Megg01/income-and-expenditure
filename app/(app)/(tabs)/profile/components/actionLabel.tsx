import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Male from "@/assets/icons/male.png";
import Global from "@/constants/Global";

interface Props {
  img?: string | any;
  name: string;
}

const Upbar = ({ img = Male, name }: Props) => {
  return (
    <View style={style.container}>
      <View style={style.imgContainer}>
        <Image source={img} width={64} height={64} borderRadius={50} />
      </View>
      <View>
        <Text style={style.name}>{name}</Text>
      </View>
    </View>
  );
};

export default Upbar;

const style = StyleSheet.create({
  imgContainer: {
    borderRadius: 50,
    borderWidth: 1,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: Global.colors.green,
  },
});
