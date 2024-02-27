import { useSession } from "@/context/ctx";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Signin() {
  const { signIn } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <SafeAreaView>
      <Text
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: 10,
          fontSize: 20,
        }}
      >
        Нэвтрэх
      </Text>
      <View className="flex flex-col items-center justify-center pt-[130] px-10 gap-6">
        <TextInput
          style={{ fontFamily: "Roboto" }}
          className="w-full"
          mode="outlined"
          label="И-мэйл"
          value={email}
          onChangeText={(e) => {
            setEmail(e);
          }}
        />
        <TextInput
          className="w-full"
          mode="outlined"
          secureTextEntry={secureTextEntry}
          label="Нууц үг"
          value={password}
          right={
            <TextInput.Icon
              icon="eye"
              onPress={() => setSecureTextEntry(!secureTextEntry)}
            />
          }
          onChangeText={(e) => {
            setPassword(e);
          }}
        />
        <Button className="w-full p-2 text-xl" mode="contained">
          Нэвтрэх
        </Button>
        <Button className="w-full p-2 text-xl">Нууц үгээ мартсан</Button>
        <Button className="w-full p-2 text-xl">
          Та бүртгүүлэх үү? <Link href="/">Бүртгүүлэх</Link>
        </Button>
      </View>
    </SafeAreaView>
  );
}
