import { AppBar } from "@/components";
import { Stack } from "expo-router";

export default function ReportLayout() {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        header: () => <AppBar />,
      }}
    />
  );
}
