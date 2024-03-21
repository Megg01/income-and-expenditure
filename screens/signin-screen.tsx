import { Button, Spacer, TextInput, Title } from "@/components";
import Colors from "@/constants/Colors";
import { useSignIn } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { showMessage } from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
const login = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  let completeSignIn: any = null;

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSignInPress = async () => {
    if (!isLoaded || emailAddress === "" || password === "") {
      showMessage({
        message: "Талбаруудаа дахин шалгана уу",
        type: "warning",
      });
      return;
    }
    setLoading(true);
    try {
      await signIn
        .create({
          identifier: emailAddress,
          password,
        })
        .then((res) => {
          completeSignIn = res;
        })
        .catch((error) => {
          showMessage({
            message: error.errors[0].message,
            type: "warning",
          });
          setLoading(false);
          return;
        });

      await setActive({ session: completeSignIn?.createdSessionId });
      showMessage({ message: "Амжилттай нэвтэрлээ", type: "success" });
    } catch (error: any) {
      showMessage({
        message: error.errors[0].message,
        type: "warning",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Нэвтрэх</Title>

      <Spacer size={100} />
      <TextInput
        type="email"
        placeholder="Имэйл"
        mode="outlined"
        value={emailAddress}
        onChangeText={(value) => setEmailAddress(value)}
      />
      <TextInput
        type="pass"
        secure={true}
        placeholder="Нууц үг"
        mode="outlined"
        value={password}
        onChangeText={(value) => setPassword(value)}
      />

      <Button
        label="Нэвтрэх"
        onPress={onSignInPress}
        loading={loading}
      ></Button>

      <View style={styles.bottom}>
        {/* <Link href="/reset" asChild> */}
        <Pressable style={styles.button}>
          <Text>Нууц үг мартсан?</Text>
        </Pressable>
        {/* </Link> */}
        <Link href="/(sign-up)" asChild>
          <Pressable style={styles.button}>
            <Text>Бүртгүүлэх</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    paddingHorizontal: 20,
    height: "100%",
  },
  button: {
    margin: 8,
    alignItems: "center",
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
