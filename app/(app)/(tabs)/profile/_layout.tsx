import { AppBar } from "@/components";
import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // header: () => <AppBar />,
      }}
    />
  );
}
