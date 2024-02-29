import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export type Props = {
  type?: "pass" | "email" | "phone" | "text";
  secure?: boolean;
  value: string;
  placeholder: string;
  onChangeText?: ((text: string) => void) | undefined;
  onPress?: (() => void) | undefined;
  mode?: "flat" | "outlined";
  rIcon?: string;
};

const Index: React.FC<Props> = ({
  type = "text",
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
        activeOutlineColor="#1D1C1A"
        textColor="#000"
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

  if (type === "email") {
    return (
      <TextInput
        activeOutlineColor="#1D1C1A"
        textColor="#000"
        secureTextEntry={secure}
        keyboardType={_keyboardType}
        style={style.input}
        label={placeholder}
        value={value}
        mode={mode}
        onChangeText={onChangeText}
      />
    );
  } else if (type === "pass") {
    return (
      <TextInput
        secureTextEntry={secure}
        activeOutlineColor="#1D1C1A"
        textColor="#000"
        keyboardType={_keyboardType}
        style={style.input}
        label={placeholder}
        value={value}
        mode={mode}
        right={
          <TextInput.Icon icon={secure ? "eye" : "eye-off"} onPress={onPress} />
        }
        onChangeText={onChangeText}
      />
    );
  }

  return (
    <TextInput
      activeOutlineColor="#1D1C1A"
      textColor="#000"
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
    marginBottom: 8,
  },
});

export default memo(Index);
