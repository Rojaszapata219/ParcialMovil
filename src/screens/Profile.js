import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Profile() {
  const route = useRoute();
  const { id } = route.params;
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error('No se encontró al parcero:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {character ? (
        <View style={styles.content}>
          <Image source={{ uri: character.image }} style={styles.imagenCenter} />
          <Text style={styles.titulo}>Nombre:</Text>
          <Text style={styles.descripcion}>{character.name}</Text>
          <Text style={styles.titulo}>Estado:</Text>
          <Text style={styles.descripcion}>{character.status}</Text>
          <Text style={styles.titulo}>Especie:</Text>
          <Text style={styles.descripcion}>{character.species}</Text>
          <Text style={styles.titulo}>Genero:</Text>
          <Text style={styles.descripcion}>{character.gender}</Text>
          <Text style={styles.titulo}>Origen:</Text>
          <Text style={styles.descripcion}>{character.origin.name}</Text>
          <Text style={styles.titulo}>Localización:</Text>
          <Text style={styles.descripcion}>{character.location.name}</Text>
        </View>
      ) : (
        <Text style={styles.loadingText}>Cargando...</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'a6cccc',
    alignItems: 'center',
    padding: 20,
  },
  content: {
 
    alignItems: 'center',
    flexGrow: 1, 
  },
  imagenCenter: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderColor: 'white',
    borderWidth: 4,
    marginBottom: 20,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  descripcion: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 2,
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
