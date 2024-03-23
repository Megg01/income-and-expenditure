import { Button, TextInput } from "@/components";
import Title from "@/components/title";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { memo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Platform,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";
import { showMessage } from "react-native-flash-message";
import Global from "@/constants/Global";

const Index = () => {
  const router = useRouter();
  const { isLoaded, signUp } = useSignUp();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const [pending, setPending] = useState(false);

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    if (password !== passwordAgain) {
      showMessage({
        message: "Нууц үг хоорондоо таарахгүй байна.",
        type: "warning",
      });
      return;
    }

    try {
      setPending(true);
      await signUp
        .create({
          firstName,
          lastName,
          emailAddress,
          password,
        })
        .catch((error) => {
          showMessage({
            message: error.errors[0].message,
            type: "warning",
          });
          setPending(false);
          return;
        });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      showMessage({
        message: "Баталгаажуулах имейл илгээгдлээ.",
        type: "success",
      });

      router.navigate("/(verify-email)");
    } catch (error: any) {
      showMessage({
        message: error.errors[0].message,
        type: "warning",
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <SafeAreaView>
      <SafeAreaView style={styles.container}>
        <Title>Бүртгүүлэх</Title>

        <ScrollView
          automaticallyAdjustKeyboardInsets
          keyboardShouldPersistTaps="never"
          contentContainerStyle={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginTop: 50,
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
            secure={true}
            placeholder="Нууц үг"
            mode="outlined"
            value={password}
            onChangeText={(value) => setPassword(value)}
          ></TextInput>
          <TextInput
            type="pass"
            secure={true}
            placeholder="Нууц үг давтах"
            mode="outlined"
            value={passwordAgain}
            onChangeText={(value) => setPasswordAgain(value)}
          ></TextInput>
          <Button
            onPress={onSignUpPress}
            label="Бүртгүүлэх"
            loading={pending}
          />

          <View style={styles.bottom}>
            <Link href="/(sign-in)" asChild>
              <Pressable style={styles.button}>
                <Text>Нэвтрэх</Text>
              </Pressable>
            </Link>
          </View>
        </ScrollView>

        <View style={styles.policy}>
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
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  button: {
    margin: 8,
    alignItems: "center",
  },
  loader: {
    color: Global.colors.text,
    position: "absolute",
    right: "50%",
    top: "50%",
    zIndex: 999,
  },
  bottom: {
    display: "flex",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  policy: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 0 : 10,
    width: "100%",
  },
});

export default memo(Index);
