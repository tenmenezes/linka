import React from 'react';
import {
  View, Text, ScrollView, FlatList, TouchableOpacity, Dimensions, StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const CATEGORIAS = [
  { id: '1', nome: 'Projetos', icone: 'bulb-outline' },
  { id: '2', nome: 'Vagas', icone: 'briefcase-outline' },
  { id: '3', nome: 'Oportunidades', icone: 'people-outline' },
  { id: '4', nome: 'Eventos', icone: 'people-outline' },
];

const DESTAQUES = [
  { id: '1', titulo: 'Semana de Tecnologia', local: 'Unisuam - Bonsucesso', data: '12 Out' },
  { id: '2', titulo: 'Hackathon Linka', local: 'Remoto', data: '20 Out' },
];

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-[#002B5B]">
      
      {/* HEADER */}
      <View className="flex-row justify-between items-center px-5 py-4">
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={28} color="#fff" />
        </TouchableOpacity>

        <Text className="text-white text-2xl text-center font-bold font-atkinson-bold">Linka</Text>

        <View className="flex-row">
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color="#fff" style={{ marginRight: 15 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* ÁREA AZUL */}
        <View className="px-5 pb-10 pt-2">
          <Text className="text-white text-3xl font-bold font-atkinson-bold">Olá, Luiz Arthur!</Text>
          <Text className="text-[#BDC3C7] text-base mt-1 font-atkinson">O que vamos descobrir hoje?</Text>
        </View>

        {/* ÁREA BRANCA */}
        <View className="flex-1 bg-white rounded-t-[35px] px-5 pt-8 min-h-[600px] -mt-2">
          
          {/* CATEGORIAS */}
          <Text className="text-lg font-bold text-[#002B5B] mb-4">Categorias</Text>

          <FlatList
            horizontal
            data={CATEGORIAS}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity className="flex-row items-center bg-[#F1F3F5] px-4 py-2 rounded-full mr-3 mb-6 border border-[#E9ECEF]">
                <Ionicons name={item.icone} size={20} color="#002B5B" />
                <Text className="ml-2 text-[#002B5B] font-medium">{item.nome}</Text>
              </TouchableOpacity>
            )}
          />

          {/* DESTAQUES */}
          <Text className="text-lg font-bold text-[#002B5B] mb-4">Destaques</Text>

          <FlatList
            horizontal
            data={DESTAQUES}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                className="bg-[#F1F3F5] rounded-2xl mr-4 mb-6 overflow-hidden"
                style={{ width: width * 0.7 }}
              >
                <View className="h-[130px] bg-[#D1D5DB]" />

                <View className="p-4">
                  <Text className="font-bold text-base text-[#333]">{item.titulo}</Text>
                  <Text className="text-xs text-[#666] mt-1">
                    {item.data} - {item.local}
                  </Text>
                </View>
              </View>
            )}
          />

          {/* PROJETOS */}
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-[#002B5B]">Projetos em alta</Text>
            <TouchableOpacity>
              <Text className="text-[#666] text-xs">Ver todos</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="flex-row items-center bg-[#F8F9FA] p-4 rounded-2xl border border-[#F1F3F5] mb-24">
            <View className="w-[50px] h-[50px] bg-[#E9ECEF] rounded-xl justify-center items-center">
              <Ionicons name="code-working" size={24} color="#002B5B" />
            </View>

            <View className="flex-1 ml-4">
              <Text className="font-bold text-base">Aplicativo para idosos</Text>
              <Text className="text-xs text-[#002B5B] mt-1">Computação: UI / UX</Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#CCC" />
          </TouchableOpacity>

        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity
        className="absolute bottom-[12%] right-6 bg-[#FFD700] w-[65px] h-[65px] rounded-full justify-center items-center"
        style={styles.fabShadow}
      >
        <Ionicons name="add" size={32} color="#000" />
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fabShadow: {
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65
  }
});