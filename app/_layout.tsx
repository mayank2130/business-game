import { BusinessProvider } from "@/lib/context";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
// import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Platform, View, StatusBar, Text } from "react-native";
import "react-native-reanimated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    mon: require("../assets/fonts/Montserrat-Regular.ttf"),
    "mon-l": require("../assets/fonts/Montserrat-Light.ttf"),
    "mon-sb": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "mon-b": require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
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

  return <RootLayoutNav />;
}

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 10 : StatusBar.currentHeight;

function RootLayoutNav() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      {/* <View
        style={{
          paddingTop: STATUSBAR_HEIGHT,
          flex: 1,
          backgroundColor: "white",
        }}
      > */}
        <BusinessProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          </Stack>
        </BusinessProvider>
      {/* </View> */}
    </SafeAreaView>
  );
}
