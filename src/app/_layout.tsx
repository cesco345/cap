import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Image, TouchableOpacity } from "react-native";

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
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
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

function RootLayoutNav() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(modals)/login"
        options={{
          presentation: "modal",

          title: "Login or Sign Up",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
          headerRight: () => (
            <Image
              source={require("../../assets/images/favicon.png")}
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
              }}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons
                name="close-outline"
                size={28}
                color="black"
                padding={10}
              ></Ionicons>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="listing/[id]"
        options={{
          headerTitle: " ",
          headerStyle: {
            backgroundColor: "transparentModal",
          },
        }}
      />
      <Stack.Screen
        name="(modals)/booking"
        options={{
          presentation: "transparentModal",
        }}
      />
      <Stack.Screen
        name="(modals)/product"
        options={{
          presentation: "modal",
          title: "Product Expertise",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
          headerRight: () => (
            <Image
              source={require("../../assets/images/favicon.png")}
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
              }}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons
                name="close-outline"
                size={28}
                color="black"
                padding={10}
              ></Ionicons>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="(modals)/capital"
        options={{
          presentation: "modal",
          title: "Capital Sources",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
          headerRight: () => (
            <Image
              source={require("../../assets/images/favicon.png")}
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
              }}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons
                name="close-outline"
                size={28}
                color="black"
                padding={10}
              ></Ionicons>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="(modals)/news"
        options={{
          presentation: "modal",
          title: "In the News",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
          headerRight: () => (
            <Image
              source={require("../../assets/images/favicon.png")}
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
              }}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons
                name="close-outline"
                size={28}
                color="black"
                padding={10}
              ></Ionicons>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
