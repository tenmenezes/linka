import { Text, View } from "react-native";
import "@/global.css";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-xl font-bold text-blue-800">Edit app/index.tsx to edit this screen.</Text>
      <Text className="text-medium font-bold text-red-800">This project use NativeWind.</Text>
    </View>
  );
}
