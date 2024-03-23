import { FontAwesome } from "@expo/vector-icons";
import React, { memo, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { formatCurrency } from "@/utils";
import Global from "@/constants/Global";
import { InputMoney, Select } from "..";
type Props = {
  type: "in" | "ex";
};

const Index: React.FC = () => {
  const [value, setValue] = useState<any>("₮0");

  const handleChange = (text: string) => {
    if (text?.length >= 1) {
      setValue(text);
    }
  };
  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <Text style={style.text}>Хэр их вэ?</Text>
        <TextInput
          style={style.input}
          value={value}
          defaultValue="0"
          placeholder="sdf"
          onChangeText={handleChange}
          keyboardType="numeric"
        />
      </View>
      <View style={style.botomContainer}>
        <Select />
        <TextInput />
        <TextInput />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  income: {
    backgroundColor: Global.colors.income,
  },
  expense: {
    backgroundColor: Global.colors.expense,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    maxWidth: "100%",
    minHeight: "100%",
    borderRadius: 22,
    backgroundColor: Global.colors.income,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    borderWidth: 1,
  },
  botomContainer: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: Global.colors.white,
  },
  text: {
    color: "#C5C6D0",
    fontSize: 20,
  },
  input: {
    color: Global.colors.white,
    fontSize: 60,
  },
});

export default memo(Index);
