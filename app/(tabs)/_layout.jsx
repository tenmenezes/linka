import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { CurvedBottomTabs } from "@/components/ui/base/curved-bottom-tabs";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CurvedBottomTabs {...props} />}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen 
        name="opportunities"
        options={{
          title: "",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "briefcase" : "briefcase-outline"}
              color={color}
              size={size}
            />
          )
        }}
      />

      <Tabs.Screen 
        name="newProject"
        options={{
          title: "",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen 
        name="profile"
        options={{
        title: "",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? "person" : "person-outline"}
            color={color}
            size={size}
          />
        ),
      }}
      />
    </Tabs>
  );
}
