import { Stack } from "expo-router";
import { View, Text } from "react-native";

export const unstable_settings = {
  initialRouteName: "(root)",
};

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"/>
    </Stack>
  );
}
