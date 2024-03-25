import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import Global from "@/constants/Global";
import {
  Button,
  Camera,
  DropdownHeader,
  PickerImage,
  Select,
  Upload,
} from "@/components";
import { IncomeCategories, ExpenseCategories } from "@/static/category";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { IconButton } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { InputTypes } from "@/static/types";
type Props = {
  type: "in" | "ex";
};

const Index: React.FC = () => {
  const router = useRouter();
  const [value, setValue] = useState<any>("₮0");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("1");
  const [loading, setLoading] = useState(false);

  //image upload
  const [camera, setCamera] = useState<any>(null);
  const [image, setImage] = useState<any>(null);

  //header
  const [selected, setSelected] = useState("1");

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["15%", "20%"], []);

  useEffect(() => {
    console.log("USEEFCECT");
    if (image) {
      setCamera(null);
    }
    if (camera) {
      setImage(null);
    }
  }, [image !== null, camera !== null]);

  const handleChange = (text: string) => {
    if (text?.length >= 1) {
      setValue(text);
    }
  };
  const handleSelectCatChange = (value: any) => {
    setCategory(value);
  };

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const onContinuePress = () => {
    const body = {
      value: value,
      desc: desc,
      category: category,
      camera: camera,
      image: image,
    };
    console.log("🚀 ~ onContinuePress ~ body:", body);
  };

  return (
    <BottomSheetModalProvider>
      <View style={style.header}>
        <IconButton
          icon="arrow-left"
          iconColor={Global.colors.background}
          onPress={() => {
            router.back();
          }}
        />
      </View>
      <View style={style.dropdownHeader}>
        <DropdownHeader
          data={InputTypes}
          selected={selected}
          handleChange={setSelected}
        />
      </View>
      <View
        style={[
          style.container,
          {
            backgroundColor:
              selected === "1"
                ? Global.colors.income
                : selected === "2"
                ? Global.colors.expense
                : Global.colors.blue,
          },
        ]}
      >
        <View style={style.inputContainer}>
          <Text style={style.text}>Хэр их вэ?</Text>
          <TextInput
            style={style.input}
            value={value}
            defaultValue="0"
            onChangeText={handleChange}
            keyboardType="numeric"
            returnKeyType="done"
          />
        </View>
        <View style={style.botomContainer}>
          <View style={style.inputFieldsContainer}>
            <Select
              data={IncomeCategories}
              value={category}
              handleChange={handleSelectCatChange}
            />
            <TextInput
              placeholder="Тайлбар"
              numberOfLines={2}
              value={desc}
              onChangeText={setDesc}
              lineBreakStrategyIOS="push-out"
              placeholderTextColor={Global.colors.gray}
              style={style.textInput}
            />
            <Upload onPress={handlePresentModalPress} />
          </View>
          <Button
            label="Оруулах"
            onPress={onContinuePress}
            loading={loading}
          ></Button>
        </View>
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Camera value={camera} setValue={setCamera} />
          <PickerImage value={image} setValue={setImage} />
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const style = StyleSheet.create({
  income: {
    backgroundColor: Global.colors.income,
  },
  expense: {
    backgroundColor: Global.colors.expense,
  },
  header: {
    position: "absolute",
    paddingTop: 50,
    paddingLeft: 10,
    width: "100%",
    zIndex: 2,
  },
  dropdownHeader: {
    position: "absolute",
    width: "60%",
    paddingTop: 50,
    left: "48%",
    transform: [{ translateX: -50 }],
    zIndex: 2,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 20,
    borderRadius: 22,
    paddingHorizontal: Global.padding.inputMoney,
    // backgroundColor: Global.colors.income,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "35%",
  },
  botomContainer: {
    height: "65%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 20,
    backgroundColor: Global.colors.white,
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    marginHorizontal: -Global.padding.inputMoney,
    paddingHorizontal: Global.padding.inputMoney,
    paddingVertical: 30,
  },

  inputFieldsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 20,
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
    fontSize: 64,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 20,
    alignItems: "center",
  },
});

export default memo(Index);
