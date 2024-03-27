import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";
import Global from "@/constants/Global";
import {
  Button,
  Camera,
  DatePicker,
  DropdownHeader,
  NormalTextInput,
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
import { FontAwesome6 } from "@expo/vector-icons";
import { InputTypes } from "@/static/types";
import request from "@/utils/customRequest";
import { useUser } from "@clerk/clerk-expo";
import { GlobalContext } from "@/context/globalCtx";

const Index: React.FC = () => {
  const context = useContext(GlobalContext);
  const router = useRouter();
  const userId = useUser()?.user?.id;
  const [value, setValue] = useState<any>("₮0");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("1");
  const [loading, setLoading] = useState(false);

  //image upload
  const [camera, setCamera] = useState<any>(null);
  const [image, setImage] = useState<any>(null);

  //header
  const [selected, setSelected] = useState("1");

  // transaction
  const [to, setTo] = useState<any>(null);

  // date
  const [date, setDate] = useState<Date>(new Date());

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["15%", "20%"], []);

  useEffect(() => {
    bottomSheetModalRef.current?.close();
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

  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log("handleSheetChanges", index);
  // }, []);

  const onContinuePress = async () => {
    const body = {
      user: userId,
      value: parseInt(value.split("₮")[1]),
      description: desc,
      category: category,
      image: selected === "3" ? null : image ? image : camera ? camera : null,
      date: date,
    };

    context?.startLoading();

    await request({
      method: "POST",
      url:
        selected === "1"
          ? "/income"
          : selected === "2"
          ? "/expense"
          : "/transfer",
      body: body,
      isNotification: true,
    }).then((response: any) => {
      if (response?.success) {
        context?.stopLoading();
      }
    });
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
        {/* </View> */}
        {/* <View /> */}
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
          <Text style={style.text}>Мөнгөн дүн</Text>
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
            {selected !== "3" && (
              <Select
                data={selected === "1" ? IncomeCategories : ExpenseCategories}
                value={category}
                handleChange={handleSelectCatChange}
              />
            )}
            {selected === "3" && (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <NormalTextInput
                  placeholder="Хэн рүү"
                  value={to}
                  setValue={setTo}
                  width="90%"
                />
                <FontAwesome6
                  name="money-bill-transfer"
                  size={20}
                  color={Global.colors.green}
                />
              </View>
            )}
            <NormalTextInput
              placeholder="Тайлбар"
              value={desc}
              setValue={setDesc}
              numLines={2}
            />

            <DatePicker value={date} setValue={setDate} />

            {!(image || camera) && <Upload onPress={handlePresentModalPress} />}

            {(image || camera) && (
              <View
                style={{
                  height: "35%",
                  width: "35%",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    borderRadius: 50,
                    margin: -20,
                    top: 0,
                    right: 0,
                    zIndex: 2,
                  }}
                >
                  <IconButton
                    icon="close"
                    style={{
                      backgroundColor: Global.colors.white,
                      borderWidth: 1,
                    }}
                    size={14}
                    iconColor={Global.colors.text}
                    borderless={false}
                    onPress={() => {
                      setCamera(null);
                      setImage(null);
                    }}
                  />
                </View>
                <Image
                  source={{ uri: camera || image }}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
              </View>
            )}
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
        // onChange={handleSheetChanges}
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
    // display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
    // borderWidth: 1
  },
  dropdownHeader: {
    position: "absolute",
    width: "70%",
    paddingTop: 50,
    left: "47%",
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
    justifyContent: "flex-start",
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
