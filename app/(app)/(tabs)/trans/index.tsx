import React, { memo, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SelectCountry } from "react-native-element-dropdown";
import { formatCurrency } from "@/utils";
import Global from "@/constants/Global";
import { Select, Upload } from "@/components";
import { IncomeCategories, ExpenseCategories } from "@/static/category";
type Props = {
  type: "in" | "ex";
};

const Index: React.FC = () => {
  const [value, setValue] = useState<any>("₮0");
  const [category, setCategory] = useState("1");

  const handleChange = (text: string) => {
    if (text?.length >= 1) {
      setValue(text);
    }
  };

  const handleSelectCatChange = (value: any) => {
    setCategory(value);
  };
  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <Text style={style.text}>Хэр их вэ?</Text>
        <TextInput
          style={style.input}
          value={value}
          defaultValue="0"
          onChangeText={handleChange}
          keyboardType="numeric"
        />
      </View>
      <View style={style.botomContainer}>
        <Select
          data={IncomeCategories}
          value={category}
          handleChange={handleSelectCatChange}
        />
        <TextInput placeholder="Тайлбар" style={style.textInput} />
        <Upload />
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
    paddingTop: 20,
    borderRadius: 22,
    backgroundColor: Global.colors.income,
    paddingHorizontal: Global.padding.inputMoney,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
  },
  botomContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    backgroundColor: Global.colors.white,
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    marginHorizontal: -Global.padding.inputMoney,
    paddingHorizontal: Global.padding.inputMoney,
    paddingTop: 30,
  },
  text: {
    color: "#FCFCFC",
    fontSize: 20,
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
    fontSize: 60,
  },
});
export default memo(Index);
