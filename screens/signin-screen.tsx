import { Button, Spacer, TextInput } from "@/components/index";
import { useSession } from "@/context/ctx";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const Page = () => {
  const { signIn, session } = useSession();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleSubmit = () => {
    signIn();
    if (session) {
      router.navigate("/(app)/(tabs)/home");
    }
  };

  return (
    <SafeAreaView
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 20 }}>Нэвтрэх</Text>
      <ScrollView
        automaticallyAdjustKeyboardInsets
        keyboardShouldPersistTaps="never"
        contentContainerStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          marginTop: 50,
          marginLeft: 15,
          marginRight: 15,
          height: "100%",
        }}
      >
        <TextInput
          type="email"
          placeholder="Имэйл"
          mode="outlined"
          value={email}
          onChangeText={(value) => setEmail(value)}
        ></TextInput>
        <TextInput
          type="pass"
          secure={secureTextEntry}
          placeholder="Нууц үг"
          mode="outlined"
          value={password}
          onChangeText={(value) => setPassword(value)}
          onPress={() => setSecureTextEntry(!secureTextEntry)}
        ></TextInput>
        <Button onPress={handleSubmit} label="Нэвтрэх" />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              textDecorationLine: "underline",
              marginBottom: 15,
            }}
            onPress={() => {}}
          >
            Нууц үгээ мартсан
          </Text>
          <Text
            style={{
              textAlign: "center",
              textDecorationLine: "underline",
              marginBottom: 15,
            }}
            onPress={() => {
              router.navigate("/(sign-up)");
            }}
          >
            Бүртгүүлэх
          </Text>
        </View>
      </ScrollView>
      <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Text
          style={{
            textAlign: "center",
            textDecorationLine: "underline",
          }}
        >
          Үйлчилгээний нөхцөл
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Page;