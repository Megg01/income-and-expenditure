import { Button, TextInput } from "@/components/index";
import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { View, Text, ScrollView, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  const router = useRouter();
  const { isLoaded, signUp, setActive } = useSignUp();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const [pending, setPending] = useState(false);
  const [code, setCode] = useState("");

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryAgain, setSecureTextEntryAgain] = useState(true);

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPending(true);
    } catch (error: any) {
      console.log("🚀 ~ onSignUpPress ~ error:", error);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
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
      {!pending && (
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
            value={lastName}
            onChangeText={(value) => setLastName(value)}
          ></TextInput>
          <TextInput
            type="text"
            placeholder="Нэр"
            mode="outlined"
            value={firstName}
            onChangeText={(value) => setFirstName(value)}
          ></TextInput>
          <TextInput
            type="email"
            placeholder="Имэйл"
            mode="outlined"
            value={emailAddress}
            onChangeText={(value) => setEmailAddress(value)}
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
          <Button onPress={onSignUpPress} label="Бүртгүүлэх" />
        </ScrollView>
      )}

      {pending && (
        <View>
          <View>
            <TextInput
              value={code}
              placeholder="Code..."
              onChangeText={(code) => setCode(code)}
            />
          </View>
          <TouchableOpacity onPress={onPressVerify}>
            <Text>Verify Email</Text>
          </TouchableOpacity>
        </View>
      )}
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
