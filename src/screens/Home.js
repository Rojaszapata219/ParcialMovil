import React from "react";
import { Text, TouchableOpacity, View, FlatList, Image} from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import { Button } from 'react-native';

export default function Home() {
  const navigation = useNavigation();

  // Hook and State

  const [characters, setCharacters] = useState([]); 

  // URL base
  const urlBase = 'https://rickandmortyapi.com/api';


  const getCharacters = async () => {
    try {
      const response = await fetch(`${urlBase}/character`);
      const dataApi = await response.json();
      setCharacters(dataApi.results);
  
    } catch (error) {
      console.error('No se pudieron cargar los personajes', error);
      // error
    }
  };

  return (
    <View style={styles.container}>
    <Button onPress={getCharacters} title='Llamar API'></Button> 
      <FlatList
      numColumns={2}
        keyExtractor={(item) => item.id}
        data={characters}
        renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Personaje',{id:item.id})} style={styles.containerBook}> 
            <Image
              source={{ uri: item.image }}
              style={styles.imageStyle}
            />
            <Text>Name: {item.name}</Text>
            <Text>Gender: {item.gender}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
    containerAPI: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      flexDirection: 'row',
      backgroundColor: 'red'
    },

    Button: {
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: 'red'
      },
  
    containerBook: {
      width: 170,
      height: 'auto',
      backgroundColor: '#ebe480',
      alignItems: 'center',
      margin: 5,
      borderRadius: 20,
   
    },
  
    container: {
      flex: 1,
      backgroundColor: '#a6cccc',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    imageStyle: {
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 100,
      
    }
  });