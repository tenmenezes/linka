import { Link, router } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logoLight from "../../assets/images/logoLight.png";

export default function RegisterScreen() {
  const { width, height } = useWindowDimensions();

  const containerPaddingClassName = width < 360 ? "px-5" : "px-6";
  const heroHeightClassName = height < 700 ? "min-h-[260px]" : "min-h-[300px]";

  return (
    <SafeAreaView className="flex-1 bg-[#2f3b69]" edges={["top"]}>
      <StatusBar barStyle="light-content" />

      <KeyboardAvoidingView
        className="flex-1 bg-white"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          className="flex-1 bg-white"
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 bg-white">
            <View
              className={`w-full items-center justify-center rounded-b-[110px] bg-[#2f3b69] pt-7 pb-8 ${containerPaddingClassName} ${heroHeightClassName}`}
            >
              <View className="w-full max-w-[420px] items-center gap-6">

                <View className="flex flex-row items-center justify-center">
                  <Image
                    source={logoLight}
                    style={{ width: 60, height: 60 }}
                    resizeMode="contain"
                  />
                  <Text className="text-6xl text-white font-atkinson-bold">
                    Linka
                  </Text>
                </View>

                <Text className="mt-2 text-center text-4xl font-atkinson-bold text-white">
                  Criar conta
                </Text>

              </View>
            </View>

            <View
              className={`w-full max-w-[420px] flex-1 self-center py-7 ${containerPaddingClassName}`}
            >
              <Text className="text-4xl font-atkinson-bold text-[#2f3b69]">
                Cadastro
              </Text>

              <Text className="mt-2 text-lg leading-6 text-zinc-500 font-atkinson">
                Informe seus dados para continuar.
              </Text>

              <View className="mt-6 gap-4">
                <TextInput
                  placeholder="Nome"
                  placeholderTextColor="#71717a"
                  className="rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-base text-zinc-900"
                />

                <TextInput
                  placeholder="E-mail"
                  placeholderTextColor="#71717a"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className="rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-base text-zinc-900"
                />

                <TextInput
                  placeholder="Senha"
                  placeholderTextColor="#71717a"
                  secureTextEntry
                  className="rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-base text-zinc-900"
                />
              </View>

              <TouchableOpacity
                className="mt-8 rounded-xl bg-[#2f3b69] py-4"
                activeOpacity={0.8}
                onPress={() => router.replace("/home")}
              >
                <Text className="text-center text-2xl font-atkinson-bold text-white">
                  Cadastrar
                </Text>
              </TouchableOpacity>

              <Text className="mt-8 text-center text-zinc-600 text-lg">
                Já tem conta?{" "}
                <Link href="/login" className="font-semibold text-[#2f3b69]">
                  Entrar
                </Link>
              </Text>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}