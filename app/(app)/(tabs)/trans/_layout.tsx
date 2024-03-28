import { Stack } from "expo-router";

export default function TransLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
