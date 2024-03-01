import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { InEx } from "@/components";

export default function Index() {
  return (
    <SafeAreaView>
      <InEx type="in" value={1000000} />
    </SafeAreaView>
  );
}
