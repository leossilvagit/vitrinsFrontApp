import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Produto = ({ nome, volume, imagem, preco }) => (
  <View style={styles.container}>
    <Image source={imagem} style={styles.image} />
    <Text style={styles.name}>{nome}</Text>
    <Text style={styles.volume}>{volume}</Text>
    {preco && <Text style={styles.price}>R$ {preco}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: 120,  // Ajuste para o tamanho dos itens
    height: 150,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
  },
  volume: {
    fontSize: 10,
    textAlign: 'center',
    color: '#666',
  },
  price: {
    fontSize: 12,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default Produto;
