import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const VitrineCategoria = ({ categoria, imagem }) => (
  <View style={styles.container}>
    <Image source={imagem} style={styles.image} />
    <Text style={styles.text}>{categoria}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    width: 110,  // Ajuste para o tamanho dos itens na grade
    height: 100,
    justifyContent: 'space-between', // Distribui espaço entre imagem e texto
  },
  image: {
    width: 100,
    height: 90,
    marginBottom: 1, // Ajusta o espaçamento entre imagem e texto
    resizeMode: 'contain', // Garante que a imagem caiba na área
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: '#333',
  },
});

export default VitrineCategoria;
