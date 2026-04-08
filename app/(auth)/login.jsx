import { Link, router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  return (
    <View className="flex-1 justify-center bg-white px-6">
      <Text className="mb-8 text-center text-3xl font-bold text-zinc-900">
        Login
      </Text>

      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#71717a"
        keyboardType="email-address"
        autoCapitalize="none"
        className="mb-3 rounded-xl border border-zinc-300 px-4 py-4 text-zinc-900"
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#71717a"
        secureTextEntry
        className="mb-4 rounded-xl border border-zinc-300 px-4 py-4 text-zinc-900"
      />

      <TouchableOpacity
        className="mb-5 rounded-xl bg-zinc-900 py-4"
        onPress={() => router.replace("/home")}
      >
        <Text className="text-center font-semibold text-white">Entrar</Text>
      </TouchableOpacity>

      <Text className="text-center text-zinc-600">
        Não tem conta?{" "}
        <Link href="/cadastro" className="font-semibold text-blue-600">
          Cadastre-se
        </Link>
      </Text>
    </View>
  );
}