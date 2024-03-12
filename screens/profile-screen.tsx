import { Button, Spacer, TextInput } from "@/components/index";
import { AuthContext } from "@/context/authContext";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  const { logout, token } = useContext(AuthContext);
  const router = useRouter();

  const handlePress = async () => {
    const isSuccess = await logout();
    if (isSuccess) {
      router.navigate("/(sign-in)");
    }
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

export default Page;
