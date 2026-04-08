import { Image } from "expo-image";
import { Link, router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function LoginScreen() {
  return (
    <View className="flex-1 justify-between items-center bg-white">

      <View className="flex justify-center items-center gap-6 p-8 w-full h-[50%] bg-[#2f3b69] rounded-b-[120]">

        <Image source={require("@/assets/images/logoLogin.png")} resizeMode="contain" className="w-full h-20 rounded-xl" />

        <Text className="text-4xl font-bold text-center text-white">Bem-vindo(a)</Text>

        <Text className="text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deleniti perferendis voluptates vitae magnam quasi,
          aliquam aperiam debitis placeat sunt,
          repellendus voluptatum accusamus incidunt
          vel recusandae quam doloremque veniam ratione voluptate.
        </Text>

      </View>

      <Text className="text-start text-3xl font-bold text-[#2f3b69] underline decoration-yellow-500 decoration-3">
        Login
      </Text>

      <View className="flex flex-row gap-2 justify-around items-center w-full">
        <TouchableOpacity
          className="rounded-lg bg-[#2f3b69] py-3 w-[30%]"
          onPress={() => router.replace("/home")}
        >
          <Text className="flex justify-center items-center text-center gap-4 font-semibold text-white">
            <FontAwesome name="user-o" size={20} />
            Aluno
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="rounded-lg bg-[#ffde59] py-3 w-[30%]"
          onPress={() => router.replace("/home")}
        >

          <Text className="flex flex-row justify-center items-center gap-4 text-center font-semibold text-[#2f3b69]">
            <FontAwesome name="building-o" size={20} />
            Empresa
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#71717a"
        keyboardType="email-address"
        autoCapitalize="none"
        className="rounded-xl w-[80%] border border-zinc-300 px-4 py-4 text-zinc-900"
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#71717a"
        secureTextEntry
        className="rounded-xl w-[80%] border border-zinc-300 px-4 py-4 text-zinc-900"
      />

      <Text className="text-end ">
        Esqueceu a senha?
      </Text>

      <TouchableOpacity
        className="rounded-lg bg-[#2f3b69] p-2 w-[50%]"
        onPress={() => router.replace("/home")}
      >
        <Text className="text-center font-semibold text-white text-xl">Entrar</Text>
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
