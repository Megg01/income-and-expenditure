import React, { memo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatCurrency } from "@/utils";
import Global from "@/constants/Global";
import { SegmentedButtons } from "react-native-paper";
type Props = {
  value: number;
};

const Index: React.FC = ({}) => {
  const [value, setValue] = useState("");

  return (
    <View style={style.container}>
      <Text style={style.text}>Зарцуулалт</Text>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "day",
            label: "Өнөөдөр",
          },
          {
            value: "week",
            label: "7 хоног",
          },
          { value: "month", label: "Сар" },
          { value: "year", label: "Жил" },
        ]}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingVertical: 15,
  },
  graytext: {
    color: Global.colors.gray,
    fontSize: 16,
  },
  text: {
    color: Global.colors.text,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default memo(Index);
