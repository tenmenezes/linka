import { Image } from "expo-image";
import { Link, router } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logoLogin from "../../assets/images/logoLogin.png";

export default function LoginScreen() {
  const { width, height } = useWindowDimensions();

  const isCompactWidth = width < 380;
  const containerPaddingClassName = width < 360 ? "px-5" : "px-6";
  const heroHeightClassName = height < 700 ? "min-h-[260px]" : "min-h-[300px]";
  const roleButtonsClassName = isCompactWidth ? "flex-col" : "flex-row";

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
              className={`w-full items-center justify-center rounded-b-[80px] bg-[#2f3b69] pt-7 pb-8 ${containerPaddingClassName} ${heroHeightClassName}`}
            >
              <View className="w-full max-w-[420px] items-center">
                <Image
                  source={logoLogin}
                  contentFit="contain"
                  className="mb-5 h-20 w-[72%] max-w-[240px]"
                />

                <Text className="text-center text-3xl font-bold text-white">
                  Bem-vindo(a)
                </Text>

                <Text className="mt-4 text-center text-lg leading-6 text-slate-200">
                  Entre na sua conta para acompanhar atividades, acessar a
                  plataforma e continuar sua jornada com praticidade em qualquer
                  lugar.
                </Text>
              </View>
            </View>

            <View
              className={`w-full max-w-[420px] flex-1 self-center py-7 ${containerPaddingClassName}`}
            >
              <Text className="text-3xl font-bold text-[#2f3b69]">Login</Text>
              <Text className="mt-2 text-base leading-6 text-zinc-500">
                Escolha seu perfil e preencha seus dados para entrar.
              </Text>

              <View className={`mt-6 gap-3 ${roleButtonsClassName}`}>
                <TouchableOpacity
                  className="flex-1 rounded-2xl bg-[#2f3b69] px-4 py-4"
                  activeOpacity={0.9}
                  onPress={() => router.push("/home")}
                >
                  <View className="flex-row items-center justify-center gap-3">
                    <FontAwesome name="user-o" size={18} color="#ffffff" />
                    <Text className="text-base font-semibold text-white">
                      Aluno
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-1 rounded-2xl bg-[#ffde59] px-4 py-4"
                  activeOpacity={0.9}
                  onPress={() => router.push("/home")}
                >
                  <View className="flex-row items-center justify-center gap-3">
                    <FontAwesome
                      name="building-o"
                      size={18}
                      color="#2f3b69"
                    />
                    <Text className="text-base font-semibold text-[#2f3b69]">
                      Empresa
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View className="mt-6 gap-4">
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
                className="mt-4 self-end"
                activeOpacity={0.7}
                onPress={() => { }}
              >
                <Text className="text-sm font-medium text-[#2f3b69]">
                  Esqueceu a senha?
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="mt-8 rounded-2xl bg-[#2f3b69] px-4 py-4"
                activeOpacity={0.9}
                onPress={() => router.push("/home")}
              >
                <Text className="text-center text-lg font-semibold text-white">
                  Entrar
                </Text>
              </TouchableOpacity>

              <Text className="mt-6 text-center text-base text-zinc-600">
                Não tem conta?{" "}
                <Link href="/cadastro" className="font-semibold text-[#2f3b69]">
                  Cadastre-se
                </Link>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}