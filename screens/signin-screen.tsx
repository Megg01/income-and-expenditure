import { Button, Spacer, TextInput } from "@/components/index";
import { useSession } from "@/context/ctx";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  const { signIn, session } = useSession();
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
        <Text style={{ textAlign: "center", fontSize: 20 }}>Нэвтрэх</Text>
        {/* <Spacer size={250} /> */}
        <View style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
            rIcon="eye"
          ></TextInput>
          <Button onPress={handleSubmit} label="Нэвтрэх" />
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              textDecorationLine: "underline",
              marginBottom: 15,
            }}
          >
            Нууц үгээ мартсан
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Page;
