import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { memo } from "react";
import Global from "@/constants/Global";
type WidthProp = number | `${number}%`;

interface Props {
  value: any;
  setValue(value: any): void;
  numLines?: number;
  placeholder?: string;
  width?: WidthProp;
}

const Index = ({
  value,
  setValue,
  numLines = 1,
  placeholder,
  width = "100%",
}: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      numberOfLines={numLines}
      value={value}
      onChangeText={setValue}
      placeholderTextColor={Global.colors.gray}
      style={[style.textInput, { width: width }]}
    />
  );
};

export default memo(Index);

const style = StyleSheet.create({
  textInput: {
    borderRadius: 16,
    borderColor: Global.colors.whiteBorder,
    backgroundColor: Global.colors.background,
    height: 56,
    padding: 10,
    borderWidth: 1,
  },
});
