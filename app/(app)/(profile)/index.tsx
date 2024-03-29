import { Button, Spacer, TextInput } from "@/components/index";
import { useRouter } from "expo-router";
import { memo, useContext } from "react";
import { View, Text, SafeAreaView } from "react-native";

const Index = () => {
  const router = useRouter();

  const handlePress = async () => {
    // router.navigate("/(auth)/(sign-in)");
  };
  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
          marginLeft: 10,
          marginRight: 10,
          height: "100%",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text onPress={handlePress}>Гарах</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default memo(Index);
