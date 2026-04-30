import React from 'react';

import {View, Text, StyleSheet, ScrollView,FlatList,TouchableOpacity,Dimensions 
}from 'react-native';

import { SafeAreaView } from ' react -native -safe -area-context'; 

import { Ionicons } from '@expo/vector-icons';


const { width } = Dimensions.get('window');

// Dados para o protótipo (Mock)
const CATEGORIAS = [
  { id: '1', nome: 'Projetos', icone: 'bulb-outline' },
  { id: '2', nome: 'Vagas', icone: 'briefcase-outline' },
  { id: '3', nome: 'Grupos', icone: 'people-outline' },
];

const DESTAQUES = [
  { id: '1', titulo: 'Semana de Tecnologia', local: 'Unisuam - Bonsucesso', data: '12 Out' },
  { id: '2', titulo: 'Hackathon Linka', local: 'Remoto', data: '20 Out' },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.logoText}>Linka</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color="#fff" style={{ marginRight: 15 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* SAUDAÇÃO (ÁREA AZUL) */}
        <View style={styles.blueSection}>
          <Text style={styles.greeting}>Olá, Luiz Arthur!</Text>
          <Text style={styles.subGreeting}>O que vamos descobrir hoje?</Text>
        </View>

        {/* ÁREA BRANCA (CONTEÚDO) */}
        <View style={styles.whiteSection}>
          
          {/* SEÇÃO: CATEGORIAS */}
          <Text style={styles.sectionTitle}>Categorias</Text>
          <FlatList
            horizontal
            data={CATEGORIAS}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.categoryCard}>
                <Ionicons name={item.icone} size={20} color="#002B5B" />
                <Text style={styles.categoryText}>{item.nome}</Text>
              </TouchableOpacity>
            )}
          />

          {/* SEÇÃO: DESTAQUES */}
          <Text style={styles.sectionTitle}>Destaques</Text>
          <FlatList
            horizontal
            data={DESTAQUES}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.highlightCard}>
                <View style={styles.imagePlaceholder} />
                <View style={styles.highlightInfo}>
                  <Text style={styles.highlightTitle}>{item.titulo}</Text>
                  <Text style={styles.highlightSub}>{item.data} - {item.local}</Text>
                </View>
              </View>
            )}
          />

          {/* SEÇÃO: PROJETOS EM ALTA */}
          <View style={styles.rowTitle}>
            <Text style={styles.sectionTitle}>Projetos em alta</Text>
            <TouchableOpacity><Text style={styles.seeAll}>Ver todos</Text></TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.projectCard}>
            <View style={styles.projectIconBox}>
              <Ionicons name="code-working" size={24} color="#002B5B" />
            </View>
            <View style={styles.projectInfo}>
              <Text style={styles.projectTitle}>Aplicativo para idosos</Text>
              <Text style={styles.projectTag}>Computação | UI/UX</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#CCC" />
          </TouchableOpacity>

        </View>
      </ScrollView>

      {/* BOTÃO FLUTUANTE (FAB) */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={32} color="#000" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#002B5B' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 15 
  },
  logoText: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  headerIcons: { flexDirection: 'row' },
  blueSection: { paddingHorizontal: 20, paddingBottom: 40, paddingTop: 10 },
  greeting: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
  subGreeting: { color: '#BDC3C7', fontSize: 16, marginTop: 5 },
  whiteSection: { 
    flex: 1, 
    backgroundColor: '#fff', 
    borderTopLeftRadius: 35, 
    borderTopRightRadius: 35, 
    paddingHorizontal: 20, 
    paddingTop: 30,
    minHeight: 600,
    marginTop: -10 
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#002B5B', marginBottom: 15 },
  categoryCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F1F3F5', 
    paddingHorizontal: 15, 
    paddingVertical: 10, 
    borderRadius: 20, 
    marginRight: 10,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#E9ECEF'
  },
  categoryText: { marginLeft: 8, color: '#002B5B', fontWeight: '500' },
  highlightCard: { 
    width: width * 0.7, 
    backgroundColor: '#F1F3F5', 
    borderRadius: 20, 
    marginRight: 15, 
    overflow: 'hidden',
    marginBottom: 25 
  },
  imagePlaceholder: { height: 130, backgroundColor: '#D1D5DB' },
  highlightInfo: { padding: 15 },
  highlightTitle: { fontWeight: 'bold', fontSize: 16, color: '#333' },
  highlightSub: { fontSize: 12, color: '#666', marginTop: 4 },
  rowTitle: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  seeAll: { color: '#666', fontSize: 12 },
  projectCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F8F9FA', 
    padding: 15, 
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F1F3F5',
    marginBottom: 100
  },
  projectIconBox: { width: 50, height: 50, backgroundColor: '#E9ECEF', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  projectInfo: { flex: 1, marginLeft: 15 },
  projectTitle: { fontWeight: 'bold', fontSize: 16 },
  projectTag: { fontSize: 12, color: '#002B5B', marginTop: 2 },
  fab: { 
    position: 'absolute', 
    bottom: 75, 
    right: 25, 
    backgroundColor: '#FFD700', 
    width: 65, 
    height: 65, 
    borderRadius: 32.5, 
    justifyContent: 'center', 
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65
  }
});