import React, { memo, useState } from "react";
import { StyleSheet } from "react-native";
import { SelectCountry } from "react-native-element-dropdown";

import { formatCurrency } from "@/utils";
import Global from "@/constants/Global";
type Props = {
  data: any;
  placeholder?: string;
  value: string;
  handleChange: (value: any) => void;
};

const Index = ({ data, placeholder = "", value, handleChange }: Props) => {
  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      imageStyle={styles.imageStyle}
      iconStyle={styles.iconStyle}
      maxHeight={200}
      value={value}
      data={data}
      valueField="value"
      labelField="label"
      imageField="image"
      placeholder={placeholder}
      searchPlaceholder="Хайх..."
      onChange={(e: any) => {
        handleChange(e?.value);
      }}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 56,
    backgroundColor: Global.colors.background,
    borderRadius: 16,
    paddingHorizontal: 16,
    borderColor: Global.colors.whiteBorder,
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

export default memo(Index);
