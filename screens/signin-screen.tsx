import { Button, Spacer, TextInput, Title } from "@/components";
import Colors from "@/constants/Colors";
import { useSignIn } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { showMessage } from "react-native-flash-message";
import { ActivityIndicator } from "react-native-paper";

const login = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

const login = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
      showMessage({ message: "Амжилттай нэвтэрлээ", type: "success" });
    } catch (err: any) {
      alert(err.errors[0].message);
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
