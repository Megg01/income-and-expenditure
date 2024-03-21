import React from "react";
import * as WebBrowser from "expo-web-browser";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive?.({ session: createdSessionId });
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <Button
      onPress={onPress}
      labelStyle={styles.label}
      style={styles.google}
      icon={() => <AntDesign name="google" size={24} color="black" />}
    >
      Google хаягаар нэвтрэх
    </Button>
  );
};

const styles = StyleSheet.create({
  google: {
    backgroundColor: Colors.white,
    paddingVertical: 6,
    textAlign: "left",
    shadowColor: Colors.green,
    shadowOpacity: 1,
    shadowOffset: { width: 1, height: 1 },
  },
  label: {
    color: Colors.text,
  },
});

export default SignInWithOAuth;
