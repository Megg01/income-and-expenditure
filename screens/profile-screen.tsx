import { Button, Spacer, TextInput } from "@/components/index";
import { useSession } from "@/context/ctx";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  const { signIn, signOut, session } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleSubmit = () => {
    signIn();
    if (session) {
      router.navigate("/(app)");
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
          <Text
            onPress={() => {
              signOut();
              router.navigate("/(sign-in)");
            }}
          >
            Гарах
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Page;
