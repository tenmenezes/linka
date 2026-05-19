import React, { useRef, useState } from "react";
import {
  Alert,
  Animated,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";

import { TAB_BAR_HEIGHT } from "../../constants/layout";

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const contentAnim = useRef(new Animated.Value(0)).current;

  const [screenMode, setScreenMode] = useState("main");

  const [userData, setUserData] = useState({
    name: "Nome de usuário",
    course: "Análise e Desenv. de Sistemas",
    email: "aluno@example.com",
    phone: "(11) 98765-4321",
    university: "Universidade exemplo",
    semester: "4° semestre",
    linkedin: "",
    github: "",
    portfolio: "",
    avatarUrl: "https://github.com/mizuno-p.png",
  });

  const [personalForm, setPersonalForm] = useState({
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    linkedin: userData.linkedin,
    github: userData.github,
    portfolio: userData.portfolio,
  });

  const [academicForm, setAcademicForm] = useState({
    university: userData.university,
    course: userData.course,
    semester: userData.semester,
  });

  const projects = [
    {
      id: 1,
      title: "Sistema de vagas",
      status: "Publicado",
    },
    {
      id: 2,
      title: "Portfólio acadêmico",
      status: "Rascunho",
    },
  ];

  function animateScreenChange(nextScreen) {
    contentAnim.setValue(40);
    setScreenMode(nextScreen);

    Animated.timing(contentAnim, {
      toValue: 0,
      duration: 220,
      useNativeDriver: true,
    }).start();
  }

  function goBackToProfile() {
    setScreenMode("main");
  }

  async function handlePickProfileImage() {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permissão necessária",
        "Permita o acesso à galeria para alterar sua foto de perfil."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (result.canceled) {
      return;
    }

    setUserData((prev) => ({
      ...prev,
      avatarUrl: result.assets[0].uri,
    }));
  }

  function handlePersonalChange(field, value) {
    setPersonalForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleAcademicChange(field, value) {
    setAcademicForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSavePersonalData() {
    setUserData((prev) => ({
      ...prev,
      name: personalForm.name,
      email: personalForm.email,
      phone: personalForm.phone,
      linkedin: personalForm.linkedin,
      github: personalForm.github,
      portfolio: personalForm.portfolio,
    }));

    Alert.alert("Sucesso", "Informações pessoais atualizadas.");
    goBackToProfile();
  }

  function handleSaveAcademicData() {
    setUserData((prev) => ({
      ...prev,
      university: academicForm.university,
      course: academicForm.course,
      semester: academicForm.semester,
    }));

    Alert.alert("Sucesso", "Dados acadêmicos atualizados.");
    goBackToProfile();
  }

  function renderHeader() {
    return (
      <View className="flex-row items-center justify-between bg-primary px-5 py-4">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            if (screenMode === "main") {
              router.back();
              return;
            }

            goBackToProfile();
          }}
          className="h-10 w-10 items-center justify-center rounded-full bg-black/20"
        >
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>

        <View className="h-10 w-10" />
      </View>
    );
  }

  function renderProfileHero() {
    return (
      <View className="relative overflow-hidden bg-primary px-5 pb-24 pt-6 items-center">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handlePickProfileImage}
          className="relative"
        >
          <View className="h-28 w-28 rounded-full border-4 border-white/25 overflow-hidden bg-zinc-300 justify-center items-center">
            {userData.avatarUrl ? (
              <Image
                source={{ uri: userData.avatarUrl }}
                className="h-full w-full"
              />
            ) : (
              <Ionicons name="person" size={52} color="#666" />
            )}
          </View>

          <View className="absolute bottom-0 right-0 rounded-full bg-accent p-2.5 shadow-sm">
            <Ionicons name="camera" size={16} color="#000" />
          </View>
        </TouchableOpacity>

        <Text className="mt-4 text-3xl font-atkinson-bold text-white">
          {userData.name}
        </Text>
      </View>
    );
  }

  function renderMainContent() {
    return (
      <>
        {renderProfileHero()}

        <View className="-mt-12 rounded-t-[42px] bg-white px-0 pt-6">
          <ProfileOption
            icon="person-outline"
            title="Informações pessoais"
            onPress={() => animateScreenChange("personal")}
          />

          <ProfileOption
            icon="school-outline"
            title="Dados acadêmicos"
            onPress={() => animateScreenChange("academic")}
          />

          <ProfileOption
            icon="folder-open-outline"
            title="Projetos"
            onPress={() => animateScreenChange("projects")}
          />

          <ProfileOption
            icon="shield-checkmark-outline"
            title="Segurança"
            onPress={() => animateScreenChange("security")}
          />

          <ProfileOption
            icon="help-circle-outline"
            title="Ajuda"
            onPress={() => animateScreenChange("help")}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push("/login")}
            className="mt-5 flex-row items-center px-6 py-4"
          >
            <View className="h-10 w-10 items-center justify-center">
              <Ionicons name="log-out-outline" size={24} color="#ef4444" />
            </View>

            <Text className="ml-4 flex-1 text-lg font-atkinson-bold text-red-500">
              Sair da conta
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  function renderPersonalContent() {
    return (
      <View className="bg-white px-6 pt-6 pb-12">
        <Text className="text-3xl font-atkinson-bold text-primary">
          Informações pessoais
        </Text>

        <Text className="mt-2 text-base leading-6 text-zinc-500 font-atkinson">
          Atualize seus dados, redes profissionais e foto de perfil.
        </Text>

        <View className="items-center mt-8 mb-7">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handlePickProfileImage}
            className="relative"
          >
            <View className="h-28 w-28 rounded-full border border-zinc-200 overflow-hidden bg-zinc-200 justify-center items-center">
              {userData.avatarUrl ? (
                <Image
                  source={{ uri: userData.avatarUrl }}
                  className="h-full w-full"
                />
              ) : (
                <Ionicons name="person" size={50} color="#666" />
              )}
            </View>

            <View className="absolute bottom-0 right-0 rounded-full bg-accent p-2.5 shadow-sm">
              <Ionicons name="camera" size={16} color="#000" />
            </View>
          </TouchableOpacity>

          <Text className="mt-3 text-sm text-zinc-500 font-atkinson">
            Alterar foto de perfil
          </Text>
        </View>

        <ProfileInput
          label="Nome completo"
          placeholder="Digite seu nome completo"
          value={personalForm.name}
          onChangeText={(value) => handlePersonalChange("name", value)}
        />

        <ProfileInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          value={personalForm.email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(value) => handlePersonalChange("email", value)}
        />

        <ProfileInput
          label="Telefone"
          placeholder="Digite seu telefone"
          value={personalForm.phone}
          keyboardType="phone-pad"
          onChangeText={(value) => handlePersonalChange("phone", value)}
        />

        <ProfileInput
          label="LinkedIn"
          placeholder="Cole o link do seu LinkedIn"
          value={personalForm.linkedin}
          autoCapitalize="none"
          onChangeText={(value) => handlePersonalChange("linkedin", value)}
        />

        <ProfileInput
          label="GitHub"
          placeholder="Cole o link do seu GitHub"
          value={personalForm.github}
          autoCapitalize="none"
          onChangeText={(value) => handlePersonalChange("github", value)}
        />

        <ProfileInput
          label="Portfólio"
          placeholder="Cole o link do seu portfólio"
          value={personalForm.portfolio}
          autoCapitalize="none"
          onChangeText={(value) => handlePersonalChange("portfolio", value)}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleSavePersonalData}
          className="mt-6 rounded-xl bg-primary py-4"
        >
          <Text className="text-center text-lg font-atkinson-bold text-white">
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderAcademicContent() {
    return (
      <View className="bg-white px-6 pt-6 pb-12">
        <Text className="text-3xl font-atkinson-bold text-primary">
          Dados acadêmicos
        </Text>

        <Text className="mt-2 text-base leading-6 text-zinc-500 font-atkinson">
          Informe sua instituição, curso e semestre atual.
        </Text>

        <View className="mt-8">
          <ProfileInput
            label="Universidade"
            placeholder="Digite sua universidade"
            value={academicForm.university}
            onChangeText={(value) => handleAcademicChange("university", value)}
          />

          <ProfileInput
            label="Curso"
            placeholder="Digite seu curso"
            value={academicForm.course}
            onChangeText={(value) => handleAcademicChange("course", value)}
          />

          <ProfileInput
            label="Semestre"
            placeholder="Ex: 4° semestre"
            value={academicForm.semester}
            onChangeText={(value) => handleAcademicChange("semester", value)}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleSaveAcademicData}
            className="mt-6 rounded-xl bg-primary py-4"
          >
            <Text className="text-center text-lg font-atkinson-bold text-white">
              Salvar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderProjectsContent() {
    return (
      <View className="bg-white px-6 pt-6 pb-12">
        <Text className="text-3xl font-atkinson-bold text-primary">
          Projetos
        </Text>

        <Text className="mt-2 text-base leading-6 text-zinc-500 font-atkinson">
          Veja os projetos enviados para a plataforma e edite as informações.
        </Text>

        <View className="mt-8">
          {projects.map((project) => (
            <TouchableOpacity
              key={project.id}
              activeOpacity={0.8}
              className="mb-4 rounded-2xl border border-zinc-100 bg-[#f8fafc] p-4"
            >
              <View className="flex-row items-center justify-between">
                <View className="flex-1">
                  <Text className="text-lg font-atkinson-bold text-zinc-900">
                    {project.title}
                  </Text>

                  <Text className="mt-1 text-sm text-zinc-500 font-atkinson">
                    Status: {project.status}
                  </Text>
                </View>

                <Ionicons name="create-outline" size={22} color="#2F3B69" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }

  function renderSecurityContent() {
    return (
      <View className="bg-white px-6 pt-6 pb-12">
        <Text className="text-3xl font-atkinson-bold text-primary">
          Segurança
        </Text>

        <Text className="mt-2 text-base leading-6 text-zinc-500 font-atkinson">
          Gerencie senha e configurações de acesso.
        </Text>

        <View className="mt-8">
          <ProfileOption icon="key-outline" title="Alterar senha" />
          <ProfileOption icon="lock-closed-outline" title="Privacidade" />
        </View>
      </View>
    );
  }

  function renderHelpContent() {
    return (
      <View className="bg-white px-6 pt-6 pb-12">
        <Text className="text-3xl font-atkinson-bold text-primary">
          Ajuda
        </Text>

        <Text className="mt-2 text-base leading-6 text-zinc-500 font-atkinson">
          Encontre suporte para dúvidas sobre sua conta e uso da plataforma.
        </Text>

        <View className="mt-8">
          <ProfileOption icon="chatbubble-outline" title="Falar com suporte" />
          <ProfileOption
            icon="document-text-outline"
            title="Perguntas frequentes"
          />
        </View>
      </View>
    );
  }

  function renderContent() {
    if (screenMode === "personal") return renderPersonalContent();
    if (screenMode === "academic") return renderAcademicContent();
    if (screenMode === "projects") return renderProjectsContent();
    if (screenMode === "security") return renderSecurityContent();
    if (screenMode === "help") return renderHelpContent();

    return renderMainContent();
  }

  const shouldAnimateContent = screenMode !== "main";

  return (
    <SafeAreaView className="flex-1 bg-primary" edges={["top"]}>
      <View className="flex-1 bg-white">
        {renderHeader()}

        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          overScrollMode="never"
          contentContainerStyle={{
            paddingBottom: insets.bottom + TAB_BAR_HEIGHT + 20,
          }}
        >
          {shouldAnimateContent ? (
            <Animated.View
              style={{
                transform: [{ translateX: contentAnim }],
                opacity: contentAnim.interpolate({
                  inputRange: [0, 40],
                  outputRange: [1, 0.4],
                }),
              }}
            >
              {renderContent()}
            </Animated.View>
          ) : (
            renderContent()
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function ProfileOption({ icon, title, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className="flex-row items-center border-b border-zinc-100 px-6 py-5"
    >
      <View className="h-10 w-10 items-center justify-center">
        <Ionicons name={icon} size={22} color="#18181b" />
      </View>

      <View className="ml-4 flex-1">
        <Text className="text-base font-atkinson text-zinc-900">{title}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#a1a1aa" />
    </TouchableOpacity>
  );
}

function ProfileInput({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  autoCapitalize,
}) {
  return (
    <View className="mb-5">
      <Text className="mb-2 text-sm font-atkinson-bold text-zinc-700">
        {label}
      </Text>

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#a1a1aa"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        className="rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-base font-atkinson text-zinc-900"
        style={{
          outlineStyle: "none",
          boxShadow: "none",
        }}
      />
    </View>
  );
}