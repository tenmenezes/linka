import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack initialRouteName="(auth)" screenOptions={{ headerShown: false }} />;
}
