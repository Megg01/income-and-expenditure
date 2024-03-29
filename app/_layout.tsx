import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as SecureStore from "expo-secure-store";
import { useFonts } from "expo-font";
import { Slot, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useContext, useEffect } from "react";
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import { PaperProvider } from "react-native-paper";
import { GlobalContext, GlobalProvider } from "@/context/globalCtx";
import FlashMessage from "react-native-flash-message";
import Loader from "./(app)/screens/loader";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const fetchUserData = async (context: any, userId: string) => {
  await context?.request({
    url: `user/${userId}`,
    method: "GET",
    model: "userInfo",
  });
};

const InitialLayout = () => {
  const { isLoaded, isSignedIn, userId } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const context = useContext(GlobalContext);

  useEffect(() => {
    if (!isLoaded) return;
    const inTabsGroup = segments[0] === "(app)/(tabs)";
    if (isSignedIn && !inTabsGroup) {
      router.replace("/(app)/(tabs)/home");
    } else if (!isSignedIn) {
      router.replace("/(sign-in)");
    }

    if (isSignedIn) {
      fetchUserData(context, userId);
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
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <GlobalProvider>
        <PaperProvider>
          <FlashMessage position="top" />
          <Loader />
          <InitialLayout />
        </PaperProvider>
      </GlobalProvider>
    </ClerkProvider>
  );
}
