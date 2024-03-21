import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Slot, useRouter, useSegments } from "expo-router";
import { Slot, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
// import { AuthProvider, AuthContext } from "@/context/authContext";
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import { PaperProvider } from "react-native-paper";
import { GlobalProvider } from "@/context/globalCtx";
import FlashMessage from "react-native-flash-message";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;
    const inTabsGroup = segments[0] === "(app)";
    if (isSignedIn && !inTabsGroup) {
      router.replace("/(app)/(tabs)/home");
    } else if (!isSignedIn) {
      router.replace("/(sign-in)");
    }
  }, [isSignedIn]);

  return <Slot />;
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Commissioner: require("../assets/fonts/Commissioner-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <GlobalProvider>
        <PaperProvider>
          <FlashMessage position="top" />
          <InitialLayout />
        </PaperProvider>
      </GlobalProvider>
    </ClerkProvider>
  );
}
