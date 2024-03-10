import { Button, TextInput } from "@/components/index";
import { useToken } from "@/context/authContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  const { signUp, token } = useToken();
  const router = useRouter();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryAgain, setSecureTextEntryAgain] = useState(true);

  const handleSubmit = () => {
    signUp(fname, lname, email, password);
    if (token) {
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

// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { TextInput, Button } from 'react-native-paper';

// const SignUpForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = () => {
//     // Handle sign-up logic here
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>
//       <TextInput
//         label="Name"
//         value={name}
//         onChangeText={text => setName(text)}
//         style={styles.input}
//       />
//       <TextInput
//         label="Email"
//         value={email}
//         onChangeText={text => setEmail(text)}
//         style={styles.input}
//       />
//       <TextInput
//         label="Password"
//         value={password}
//         onChangeText={text => setPassword(text)}
//         secureTextEntry
//         style={styles.input}
//       />
//       <TextInput
//         label="Password"
//         value={password}
//         onChangeText={text => setPassword(text)}
//         secureTextEntry
//         style={styles.input}
//       />
//       <TextInput
//         label="Password"
//         value={password}
//         onChangeText={text => setPassword(text)}
//         secureTextEntry
//         style={styles.input}
//       />
//       <TextInput
//         label="Password"
//         value={password}
//         onChangeText={text => setPassword(text)}
//         secureTextEntry
//         style={styles.input}
//       />
//       <Button mode="contained" onPress={handleSignUp} style={styles.button}>
//         Sign Up
//       </Button>
//       <Text style={styles.orText}>Or</Text>
//       <Button mode="outlined" style={styles.googleButton}>
//         Sign Up with Google
//       </Button>
//       <Text style={styles.bottomText}>
//         By signing up, you agree to the Terms of Service and Privacy Policy
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     // flex: 1,
//     display: "flex",
//     height: "100%",
//     flexDirection: "column",
//     justifyContent: "space-evenly",
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     marginBottom: 10,
//   },
//   button: {
//     marginBottom: 10,
//   },
//   orText: {
//     textAlign: 'center',
//     marginVertical: 10,
//     fontWeight: 'bold',
//   },
//   googleButton: {
//     marginBottom: 20,
//   },
//   bottomText: {
//     textAlign: 'center',
//   },
// });

// export default SignUpForm;