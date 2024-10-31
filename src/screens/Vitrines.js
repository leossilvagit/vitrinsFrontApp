import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VitrineCategoria from '../components/VitrineCategoria';
import Produto from '../components/Produto';

const destaques = [
  { id: '1', titulo: 'Adega 24h', cor: '#FF6347', imagem: require('../assets/destaques/novidades.png') },
  { id: '2', titulo: 'Descontão', cor: '#FFD700', imagem: require('../assets/destaques/ofertas.png') },
  { id: '3', titulo: 'Só breja', cor: '#1E90FF', imagem: require('../assets/destaques/retornaveis.png') },
  { id: '4', titulo: '3 por 10', cor: '#32CD32', imagem: require('../assets/destaques/latas.png') },
  { id: '5', titulo: 'Chopp', cor: '#FFA07A', imagem: require('../assets/destaques/chopp.png') },
];

// Dados de exemplo para categorias e produtos
const categorias = [
  { id: '2', categoria: 'Cervejas', imagem: require('../assets/categorias/cervejas.png') },
  { id: '3', categoria: 'Destilados', imagem: require('../assets/categorias/destilados.png') },
  { id: '4', categoria: 'Vinhos', imagem: require('../assets/categorias/vinhos.png') },
  { id: '5', categoria: 'Chopp', imagem: require('../assets/categorias/chopp.png') },
  { id: '6', categoria: 'Não alcoólicos', imagem: require('../assets/categorias/naoalcoolicos.png') },
  { id: '7', categoria: 'Águas e Gelo', imagem: require('../assets/categorias/aguagelo.png') },
  { id: '8', categoria: 'Comidinhas', imagem: require('../assets/categorias/comidinhas.png') },
  { id: '9', categoria: 'Drinks Prontos', imagem: require('../assets/categorias/drinks.png') },
  { id: '10', categoria: 'Artesanais', imagem: require('../assets/categorias/artesanais.png') },
];

const produtosFavoritos = [
  { id: '1', nome: 'Cerveja Corona Extra', volume: '330ml', imagem:  require('../assets/produtos/corona.png')},
  { id: '2', nome: 'Heineken', volume: '355ml', imagem: require('../assets/produtos/heneken.png')},
  { id: '3', nome: 'Spaten', volume: '330ml', imagem: require('../assets/produtos/spaten.png') },
  // Outros produtos...
];

const Vitrines = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <Text style={styles.sectionTitle}>Vitrines em Destaque</Text>
        <FlatList
          data={destaques}
          renderItem={({ item }) => (
            <View style={styles.destaqueWrapper}>
              <View style={styles.destaqueItem}>
                <Image source={item.imagem} style={styles.destaqueImage} />
              </View>
              <Text style={styles.destaqueText}>{item.titulo}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.destaqueContainer}
        />

        <Text style={styles.sectionTitle}>Vitrines</Text>
        <FlatList
          data={categorias}
          renderItem={({ item }) => (
            <View style={styles.itemWrapper}>
              <VitrineCategoria imagem={item.imagem} />
              <Text style={styles.itemText}>{item.categoria}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          numColumns={3}
          columnWrapperStyle={styles.categoryRow}
          scrollEnabled={false}
        />

        <Text style={styles.sectionTitle}>Produtos</Text>
        <FlatList
          data={produtosFavoritos}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Produto nome={item.nome} volume={item.volume} imagem={item.imagem} preco={item.preco} />
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>

      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="home" size={24} color="#333" />
          <Text style={styles.menuItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="search" size={24} color="#333" />
          <Text style={styles.menuItemText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="person" size={24} color="#333" />
          <Text style={styles.menuItemText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="settings" size={24} color="#333" />
          <Text style={styles.menuItemText}>Configurações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
    backgroundColor: 'white',
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  destaqueContainer: {
    paddingHorizontal: 16,
  },
  destaqueWrapper: {
    alignItems: 'center',
    marginRight: 16,
  },
  destaqueItem: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  destaqueImage: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  destaqueText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 5,
  },
  itemWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  itemText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    marginTop: 5,
  },
  categoryRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 10,
    color: '#333',
    marginTop: 0,
  },
});

export default Vitrines;
