import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VitrineCategoria from '../components/VitrineCategoria';
import Produto from '../components/Produto';

const destaques = [
  { id: '1', titulo: 'Beleza Fidalga', cor: '#FF6347', imagem: require('../assets/logos/belezafidalga.png') },
  { id: '2', titulo: 'Beleza urbana', cor: '#FFD700', imagem: require('../assets/logos/belezaurbana.png') },
  { id: '3', titulo: 'Paula Ventura', cor: '#1E90FF', imagem: require('../assets/logos/paulaventura.png') },
  { id: '4', titulo: 'BM', cor: '#32CD32', imagem: require('../assets/logos/bmlogo.png') },
  { id: '5', titulo: 'Mais Duo', cor: '#FFA07A', imagem: require('../assets/logos/maisduo.png') },
];

const categorias = [
  { id: '2', categoria: 'BM', imagem: require('../assets/logos/bmlogo.png') },
  { id: '3', categoria: 'Mais Duo', imagem: require('../assets/logos/maisduo.png') },
  { id: '4', categoria: 'Beleza urbana', imagem: require('../assets/logos/belezaurbana.png') },
  { id: '5', categoria: 'Vila Hair', imagem: require('../assets/logos/vilahair.png') },
  { id: '6', categoria: 'Los Hermanos', imagem: require('../assets/logos/loshermanos.png') },
  { id: '7', categoria: 'Espaço Vitrine', imagem: require('../assets/logos/espacovitrine.png') },
];

const produtosFavoritos = [
  { id: '1', nome: 'Kit Secador 220w', imagem: require('../assets/produtos/Secador.png') },
  { id: '2', nome: 'Lixadeira eletrica', imagem: require('../assets/produtos/lixadeiraeletrica.png') },
  { id: '3', nome: 'Kit Cilios', imagem: require('../assets/produtos/kitcilios.png') },
  { id: '1', nome: 'Kit Secador 220w', imagem: require('../assets/produtos/Secador.png') },
  { id: '2', nome: 'Lixadeira eletrica', imagem: require('../assets/produtos/Kitciliosmagneticos.png') },
  { id: '3', nome: 'Kit Cilios', imagem: require('../assets/produtos/kitcilios.png') },
  { id: '1', nome: 'Kit alongamento', imagem: require('../assets/produtos/kitalongamento.png') },
  { id: '2', nome: 'Lixadeira eletrica', imagem: require('../assets/produtos/Kitciliosmagneticos.png') },
  { id: '3', nome: 'Kit Cilios', imagem: require('../assets/produtos/kitcilios.png') },
  { id: '1', nome: 'Kit alongamento', imagem: require('../assets/produtos/kitalongamento.png') },
  { id: '2', nome: 'Kit Silios Magneticos', imagem: require('../assets/produtos/Kitciliosmagneticos.png') },
  { id: '3', nome: 'Kit Cilios', imagem: require('../assets/produtos/kitcilios.png') },
  { id: '1', nome: 'Kit alongamento', imagem: require('../assets/produtos/kitalongamento.png') },
  { id: '2', nome: 'Lixadeira eletrica', imagem: require('../assets/produtos/lixadeiraeletrica.png') },
  { id: '3', nome: 'Kit Cilios', imagem: require('../assets/produtos/kitcilios.png') },
  { id: '1', nome: 'Kit alongamento', imagem: require('../assets/produtos/kitalongamento.png') },
  { id: '2', nome: 'Lixadeira eletrica', imagem: require('../assets/produtos/lixadeiraeletrica.png') },
  { id: '3', nome: 'Kit Cilios', imagem: require('../assets/produtos/kitcilios.png') },
  { id: '1', nome: 'Kit alongamento', imagem: require('../assets/produtos/kitalongamento.png') },
  { id: '2', nome: 'Lixadeira eletrica', imagem: require('../assets/produtos/lixadeiraeletrica.png') },
  { id: '3', nome: 'Kit Cilios', imagem: require('../assets/produtos/kitcilios.png') },
  { id: '1', nome: 'Kit alongamento', imagem: require('../assets/produtos/kitalongamento.png') },
  { id: '2', nome: 'Kit Silios Magneticos', imagem: require('../assets/produtos/Kitciliosmagneticos.png') },
  { id: '3', nome: 'Kit Cilios', imagem: require('../assets/produtos/kitcilios.png') },
  { id: '1', nome: 'Kit alongamento', imagem: require('../assets/produtos/kitalongamento.png') },
  { id: '2', nome: 'Lixadeira eletrica', imagem: require('../assets/produtos/lixadeiraeletrica.png') },
  { id: '3', nome: 'Kit Cilios', imagem: require('../assets/produtos/kitcilios.png') },
  { id: '1', nome: 'Kit alongamento', imagem: require('../assets/produtos/kitalongamento.png') },
  { id: '2', nome: 'Lixadeira eletrica', imagem: require('../assets/produtos/lixadeiraeletrica.png') },
  { id: '3', nome: 'Kit Cilios', imagem: require('../assets/produtos/kitcilios.png') },
  { id: '1', nome: 'Kit alongamento', imagem: require('../assets/produtos/kitalongamento.png') },
  { id: '2', nome: 'Lixadeira eletrica', imagem: require('../assets/produtos/lixadeiraeletrica.png') },
  { id: '3', nome: 'Kit Cilios', imagem: require('../assets/produtos/kitcilios.png') },
  { id: '1', nome: 'Kit alongamento', imagem: require('../assets/produtos/kitalongamento.png') },
  { id: '2', nome: 'Kit Silios Magneticos', imagem: require('../assets/produtos/Kitciliosmagneticos.png') },
  { id: '3', nome: 'Kit Cilios', imagem: require('../assets/produtos/kitcilios.png') },
  { id: '1', nome: 'Kit alongamento', imagem: require('../assets/produtos/kitalongamento.png') },
  { id: '2', nome: 'Lixadeira eletrica', imagem: require('../assets/produtos/lixadeiraeletrica.png') },
  { id: '3', nome: 'Kit Cilios', imagem: require('../assets/produtos/kitcilios.png') },
  { id: '1', nome: 'Kit alongamento', imagem: require('../assets/produtos/kitalongamento.png') },
  { id: '2', nome: 'Lixadeira eletrica', imagem: require('../assets/produtos/lixadeiraeletrica.png') },
  { id: '3', nome: 'Kit Cilios', imagem: require('../assets/produtos/kitcilios.png') },
  { id: '1', nome: 'Kit alongamento', imagem: require('../assets/produtos/kitalongamento.png') },
  { id: '2', nome: 'Lixadeira eletrica', imagem: require('../assets/produtos/lixadeiraeletrica.png') },
  { id: '3', nome: 'Kit Cilios', imagem: require('../assets/produtos/kitcilios.png') },
  // Outros produtos...
];

const Vitrines = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.searchContainer}>
        <Text style={styles.endereco}>Rua Victor Civicta, 60</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

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

        <Text style={styles.sectionTitle}>Produtos recomendados</Text>
        // Primeira linha de produtos
          <FlatList
            data={produtosFavoritos.slice(0, 10)} // Primeira linha com 10 produtos
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.produtoContainer}>
                <Image source={item.imagem} style={styles.produtoImagem} />
                <Text style={styles.produtoNome}>{item.nome}</Text>
                <Text style={styles.produtoVolume}>{item.volume}</Text>
                <TouchableOpacity style={styles.adicionarButton}>
                  <Text style={styles.adicionarButtonText}>Adicionar</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />

          // Segunda linha de produtos
          <FlatList
            data={produtosFavoritos.slice(10, 20)} // Segunda linha com os próximos 10 produtos
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.produtoContainer}>
                <Image source={item.imagem} style={styles.produtoImagem} />
                <Text style={styles.produtoNome}>{item.nome}</Text>
                <Text style={styles.produtoVolume}>{item.volume}</Text>
                <TouchableOpacity style={styles.adicionarButton}>
                  <Text style={styles.adicionarButtonText}>Adicionar</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />


      </ScrollView>

      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="home" size={24} color="#800080" />
          <Text style={styles.menuItemText}>Vitrines</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="search" size={24} color="#800080" />
          <Text style={styles.menuItemText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="person" size={24} color="#800080" />
          <Text style={styles.menuItemText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="receipt" size={24} color="#800080" />
          <Text style={styles.menuItemText}>Pedidos</Text>
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
  scrollContent: {
    paddingBottom: 80,
  },
  searchContainer: {
    padding: 16,
    backgroundColor: 'white',
    marginTop: 15,
    marginBottom: 15,
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
  endereco: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 10,
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
    marginBottom: 40,
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
    borderWidth: 3,
    borderColor: '#800080',
  },
  destaqueImage: {
    width: 70,
    height: 70,
    borderRadius: 37.5,
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
  horizontalFlatList: {
    marginVertical: 8,
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 20, 
    left: '20%',
    right: '20%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 10,
    color: '#333',
    marginTop: 2,
  },
  produtoContainer: {
    alignItems: 'center',
    margin: 8,
    width: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 1,
    elevation: 5,
  },
  produtoImagem: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  produtoNome: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 4,
  },
  produtoVolume: {
    fontSize: 10,
    color: '#555',
    marginBottom: 8,
  },
  adicionarButton: {
    backgroundColor: '#800080', // Cor roxa
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  adicionarButtonText: {
    color: 'white',  
  },
});

export default Vitrines;
