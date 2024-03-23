import { Button, Spacer, TextInput } from "@/components";
import Global from "@/constants/Global";
import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { memo, useRef, useState } from "react";
import { View, Text, Platform, StyleSheet, SafeAreaView } from "react-native";
import { showMessage } from "react-native-flash-message";
import OTPTextView from "react-native-otp-textinput";

const Index = () => {
  const router = useRouter();
  const input = useRef<OTPTextView>(null);
  const { isLoaded, signUp, setActive } = useSignUp();
  const [loading, setLoading] = useState(false);

  let completeSignUp: any = null;

  const [code, setCode] = useState<string>("");

  const handleInputChange = async (text: string, i: number) => {
    // if (i === 0) {
    //   const clippedText = await Clipboard.getString();
    //   if (clippedText.slice(0, 1) === text) {
    //     input.current?.setValue(clippedText, true);
    //   }
    // }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      setLoading(true);
      await signUp
        .attemptEmailAddressVerification({
          code,
        })
        .then((res) => {
          completeSignUp = res;
        })
        .catch((error) => {
          showMessage({
            message: error.errors[0].message,
            type: "warning",
          });
          setLoading(false);
          return;
        });

      showMessage({
        message: "Амжилттай бүртгүүллээ.",
        type: "success",
      });

      await setActive({ session: completeSignUp.createdSessionId });

      router.navigate("/(app)/(tabs)/home");
    } catch (err: any) {
      console.log("🚀 ~ onPressVerify ~ err:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.largetext}>Баталгаажуулах кодоо оруулна уу</Text>
        <Spacer size={50} />
        <OTPTextView
          ref={input}
          handleTextChange={setCode}
          handleCellTextChange={handleInputChange}
          containerStyle={styles.otpInput}
          inputCount={6}
          tintColor={Global.colors.green}
        />
        <Button
          label="Баталгаажуулах"
          onPress={onPressVerify}
          loading={loading}
        />
      </View>

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
  );
};

export default memo(Index);

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  largetext: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    margin: 8,
    alignItems: "center",
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
  otpInput: {
    marginBottom: 20,
  },
});
