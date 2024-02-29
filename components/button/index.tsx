import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

export type Props = {
  label: string;
  onPress: (() => void) | undefined;
  mode?: "text" | "outlined" | "contained" | "elevated" | "contained-tonal";
  btnColor?: string;
  txtColor?: string;
  icon?: IconSource;
};

const Index: React.FC<Props> = ({
  btnColor = "#254745",
  txtColor = "#FFF",
  label,
  onPress,
  mode = "contained",
  icon,
}) => {
  return (
    <Button
      style={style.button}
      mode={mode}
      onPress={onPress}
      buttonColor={btnColor}
      textColor={txtColor}
      icon={icon}
      labelStyle={style.label}
    >
      {label}
    </Button>
  );
};

const style = StyleSheet.create({
  button: {
    borderRadius: 4,
    minWidth: "80%",
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
  },
  label: {},
});

export default memo(Index);
