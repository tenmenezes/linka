import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { CurvedBottomTabs } from "@/components/ui/base/curved-bottom-tabs";

export default function TabsLayout() {
  return (
    <Tabs
    
      screenOptions={{ headerShown: false,sceneContainerStyle: { backgroundColor: '#002B5B' },tabBarActiveTintColor: '#FFD700',tabBarInactiveTintColor: '#ffffff',tabBarStyle: {
      backgroundColor: '#002B5B', // Deixa a barra azul combinando com o topo
      borderTopWidth: 0,           // Tira a linha de divisão branca
      height: 60,                  
      }, }}
      tabBar={(props) => <CurvedBottomTabs {...props} />}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-sharp" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
