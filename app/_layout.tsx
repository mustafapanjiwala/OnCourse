import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Rubik: require("../assets/fonts/static/Rubik-Regular.ttf"),
    "Rubik-bold": require("../assets/fonts/static/Rubik-Bold.ttf"),
    "Rubik-xBold": require("../assets/fonts/static/Rubik-ExtraBold.ttf"),
    "Rubik-light": require("../assets/fonts/static/Rubik-Light.ttf"),
    "Rubik-medium": require("../assets/fonts/static/Rubik-Medium.ttf"),
    "Rubik-semiBold": require("../assets/fonts/static/Rubik-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
