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
  loading?: boolean;
};

const Index: React.FC<Props> = ({
  btnColor = "#254745",
  txtColor = "#FFF",
  label,
  onPress,
  mode = "contained",
  icon,
  loading = false,
}) => {
  const handlePress = () => {
    if (!loading && onPress) {
      onPress();
    }
  };
  return (
    <Button
      style={style.button}
      mode={mode}
      onPress={handlePress}
      buttonColor={btnColor}
      textColor={txtColor}
      icon={icon}
      labelStyle={style.label}
      loading={loading}
    >
      {label}
    </Button>
  );
};

const style = StyleSheet.create({
  button: {
    borderRadius: 15,
    minWidth: "80%",
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    shadowOpacity: 1,
    shadowOffset: { width: 1, height: 1 },
  },
  label: {},
});

export default memo(Index);
