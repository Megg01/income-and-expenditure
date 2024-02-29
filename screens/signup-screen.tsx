import { Button, TextInput } from "@/components/index";
import { useSession } from "@/context/ctx";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  const { signUp, session } = useSession();
  const router = useRouter();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryAgain, setSecureTextEntryAgain] = useState(true);

  const handleSubmit = () => {
    signUp();
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
      <Text style={{ textAlign: "center", fontSize: 20 }}>Бүртгүүлэх</Text>
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
          type="text"
          placeholder="Овог"
          mode="outlined"
          value={lname}
          onChangeText={(value) => setLname(value)}
        ></TextInput>
        <TextInput
          type="text"
          placeholder="Нэр"
          mode="outlined"
          value={fname}
          onChangeText={(value) => setFname(value)}
        ></TextInput>
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
        <TextInput
          type="pass"
          secure={secureTextEntryAgain}
          placeholder="Нууц үг давтах"
          mode="outlined"
          value={passwordAgain}
          onChangeText={(value) => setPasswordAgain(value)}
          onPress={() => setSecureTextEntryAgain(!secureTextEntryAgain)}
        ></TextInput>
        <Button onPress={handleSubmit} label="Бүртгүүлэх" />
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: Platform.OS === "ios" ? 0 : 10,
          width: "100%",
        }}
      >
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
