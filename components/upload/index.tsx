import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React, { memo, useCallback, useRef } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Entypo } from "@expo/vector-icons";
import Global from "@/constants/Global";

const Index = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <Pressable style={styles.container}>
      <View style={styles.view}>
        <Entypo name="attachment" size={20} color="black" />
        <Text>Зураг оруулах</Text>
      </View>
      <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </Pressable>
  );
};

export default memo(Index);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Global.colors.background,
    height: 56,
    borderRadius: 16,
    borderStyle: "dashed",
    borderColor: Global.colors.whiteBorder,
    borderWidth: 2,
  },
  view: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    gap: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
