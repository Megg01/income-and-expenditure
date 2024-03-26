import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import Global from "@/constants/Global";

interface Props {
  value: any;
  setValue: any;
}

const PickerImage = ({ value, setValue }: Props) => {
  const [image, setImage] = useState<any>(value);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [21, 9],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result?.assets[0].uri);
      setValue(result?.assets[0].uri);
    }
  };

  return (
    <Pressable style={style.pressable} onPress={pickImage}>
      {/* {!image && ( */}
        <View style={{ display: "flex", alignItems: "center" }}>
          <Entypo name="image" size={24} color={Global.colors.green} />
          <Text style={style.pressable_text}>Зураг</Text>
        </View>
      {/*  )} */}
      {/* {image && <Image source={{ uri: image }} style={style.image} />} */}
    </Pressable>
  );
};

export default PickerImage;

const style = StyleSheet.create({
  pressable: {
    borderColor: Global.colors.whiteBorder,
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: Global.colors.whiteGreen,
    width: "40%",
    padding: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pressable_text: {
    color: Global.colors.green,
    fontWeight: "bold",
  },
  image: {
    height: "50%",
    width: "50%",
  },
});
