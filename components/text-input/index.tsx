import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export type Props = {
  type: "pass" | "email" | "phone";
  secure?: boolean;
  value: string;
  placeholder: string;
  onChangeText?: ((text: string) => void) | undefined;
  onPress?: (() => void) | undefined;
  mode?: "flat" | "outlined";
  rIcon?: string;
};

const Index: React.FC<Props> = ({
  type,
  secure = false,
  value,
  placeholder,
  onChangeText,
  onPress,
  mode = "flat",
  rIcon,
}) => {
  const _keyboardType =
    type === "email"
      ? "email-address"
      : type === "phone"
      ? "numeric"
      : "default";

  if (rIcon) {
    return (
      <TextInput
        secureTextEntry={secure}
        keyboardType={_keyboardType}
        style={style.input}
        label={placeholder}
        value={value}
        mode={mode}
        right={<TextInput.Icon icon={rIcon} onPress={onPress} />}
        onChangeText={onChangeText}
      />
    );
  }

  return (
    <TextInput
      secureTextEntry={secure}
      keyboardType={_keyboardType}
      style={style.input}
      label={placeholder}
      value={value}
      mode={mode}
      onChangeText={onChangeText}
    />
  );
};

const style = StyleSheet.create({
  input: {
    borderRadius: 4,
    backgroundColor: "white",
    color: "black",
    minWidth: "80%",
    marginBottom: 10,
  },
});

export default memo(Index);
