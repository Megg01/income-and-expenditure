import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Balance, InEx, Spend } from "@/components";

export default function Index() {
  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Balance value={250400} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 5,
          }}
        >
          <InEx type="in" value={10000000} />
          <InEx type="ex" value={10000000} />
        </View>
      </View>
      <Spend />
    </SafeAreaView>
  );
}
