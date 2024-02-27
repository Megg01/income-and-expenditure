import Signin from "@/components/sign-in";
import { useSession } from "@/context/ctx";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <SafeAreaView>
      <Signin />
    </SafeAreaView>
  );
}
